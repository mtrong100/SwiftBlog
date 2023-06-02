import { toast } from "react-toastify";
import { useState } from "react";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

/* <<=============================================================>> */
export default function useFirebaseImage(
  setValue,
  getValues,
  imageName = null,
  cb = null
) {
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState("");
  if (!setValue || !getValues) return;

  // UPLOAD IMAGES TO FIREBASE STORAGE
  const handleUploadImage = (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "pictures/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressPercent =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressPercent);
        switch (snapshot.state) {
          case "paused":
            toast.warning("Upload is paused", {
              theme: "colored",
              autoClose: 2000,
              pauseOnHover: false,
            });
            break;
          case "running":
            break;
          default:
            toast.info("How did you get here?!", {
              theme: "colored",
              autoClose: 2000,
              pauseOnHover: false,
            });
        }
      },
      (error) => {
        setImage("");
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
          toast.success("Upload iamge successfully !", {
            theme: "colored",
            autoClose: 2000,
            pauseOnHover: false,
          });
        });
      }
    );
  };

  // SELECT IMAGE
  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setValue("image_name", file.name);
    handleUploadImage(file);
  };

  // HANDLE DELETE IMAGE
  const handleDeleteImage = () => {
    const storage = getStorage();
    const imageRef = ref(
      storage,
      "pictures/" + (imageName || getValues("image_name"))
    );

    deleteObject(imageRef)
      .then(() => {
        toast.success("Delete image successfully !", {
          theme: "colored",
          autoClose: 2000,
          pauseOnHover: false,
        });
        setImage("");
        setProgress(0);
        cb && cb();
      })
      .catch((error) => {
        setImage("");
        // toast.error("Failed to delete image !", {
        //   theme: "colored",
        //   autoClose: 2000,
        //   pauseOnHover: false,
        // });
      });
  };

  const handleResetUpLoad = () => {
    setImage("");
    setProgress(0);
  };

  return {
    image,
    setImage,
    progress,
    handleResetUpLoad,
    handleSelectImage,
    handleDeleteImage,
  };
}
