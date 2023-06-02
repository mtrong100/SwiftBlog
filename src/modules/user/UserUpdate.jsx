import useFirebaseImage from "../../hooks/useFirebaseImage";
import React, { useEffect } from "react";
import Radio from "../../components/radio/Radio";
import Loading from "../../components/loading/Loading";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import ImageUpload from "../../components/image/ImageUpload";
import Heading from "../../components/heading/Heading";
import Field from "../../components/field/Field";
import Button from "../../components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { userRole } from "../../utils/constants";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
import { db } from "../../firebase-app/firebase-config";
import {
  getDoc,
  doc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

// VALIDATE FORM
const schema = yup.object({
  username: yup.string().required("Please enter your username"),
  slug: yup.string().lowercase(),
});

const UserUpdate = () => {
  const { userInfo } = useAuth();
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onchange",
    resolver: yupResolver(schema),
  });

  // GET THE PARAMS WHEN UPDATE USER
  const [params] = useSearchParams();
  const userId = params.get("id");
  const navigate = useNavigate();
  const watchRole = watch("role");

  // GET IMAGE_NAME WHEN UPDATE AVATAR
  const imageUrl = getValues("avatar");
  const imageRegex = /%2F(\S+)\?/gm.exec(imageUrl);
  const imageName = imageRegex?.length > 0 ? imageRegex[1] : "";
  /* Import hook update image */
  const { image, setImage, progress, handleSelectImage, handleDeleteImage } =
    useFirebaseImage(setValue, getValues, imageName, deleteAvatar);

  // HANDLE UPDATE USER
  const handleUpdateUser = async (values) => {
    if (!isValid) return;
    try {
      const userDocRef = doc(db, "users", userId);
      // update user
      await updateDoc(userDocRef, {
        ...values,
        avatar: image,
      });

      // update user in "posts" collection at firestore database
      const userPostsRef = collection(db, "posts");
      const q = query(userPostsRef, where("user.id", "==", userInfo.uid));
      const snapshot = await getDocs(q);
      snapshot.forEach(async (postDoc) => {
        const postDocRef = doc(db, "posts", postDoc.id);
        await updateDoc(postDocRef, {
          user: {
            ...postDoc.data().user,
            username: values.username,
            slug: values.slug,
            avatar: image,
          },
        });
      });

      toast.success("Update user successfully !", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Failed to update user !", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  };

  // DELETE AVATAR
  async function deleteAvatar() {
    const colRef = doc(db, "users", userId);
    await updateDoc(colRef, {
      avatar: "",
    });
  }

  // SET IMAGE DATA
  useEffect(() => {
    setImage(imageUrl);
  }, [imageUrl, setImage]);

  // GET USER DATA
  useEffect(() => {
    async function getUserData() {
      if (!userId) return;
      const colRef = doc(db, "users", userId);
      const docData = await getDoc(colRef);
      reset(docData && docData.data());
    }
    getUserData();
  }, [reset, userId]);

  // DISPLAY ERROR MESSAGES
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  }, [errors]);

  if (!userId) return null;
  return (
    <div>
      <Heading>update user</Heading>
      <form className="pt-14" onSubmit={handleSubmit(handleUpdateUser)}>
        <div className="w-[300px] h-[300px] mx-auto rounded-full mb-16">
          {/* ==================== Avatar ============================ */}
          <ImageUpload
            className="!rounded-full h-full"
            onChange={handleSelectImage}
            handleDeleteImage={handleDeleteImage}
            progress={progress}
            image={image}
            userImage="true"
          ></ImageUpload>
        </div>
        <div className="grid grid-cols-2 gap-10 mb-10">
          {/* ==================== Username ============================ */}
          <Field>
            <Label>username ✒️</Label>
            <Input
              control={control}
              placeholder="Enter your username"
              name="username"
            ></Input>
          </Field>
          {/* ==================== Slug ============================ */}
          <Field>
            <Label>slug ✒️</Label>
            <Input
              control={control}
              placeholder="Example: taketa-hana"
              name="slug"
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-2 mb-10 gap-x-10">
          {userInfo?.role === userRole.ADMIN && (
            <>
              {/* ====================== Role ======================= */}
              <Field>
                <Label>role</Label>
                <div className="flex items-center gap-x-5">
                  <Radio
                    name="role"
                    control={control}
                    checked={watchRole === userRole.ADMIN}
                    value={userRole.ADMIN}
                  >
                    admin
                  </Radio>
                  <Radio
                    name="role"
                    control={control}
                    checked={watchRole === userRole.MOD}
                    value={userRole.MOD}
                  >
                    mod
                  </Radio>
                  <Radio
                    name="role"
                    control={control}
                    checked={watchRole === userRole.USER}
                    value={userRole.USER}
                  >
                    user
                  </Radio>
                </div>
              </Field>
            </>
          )}
        </div>

        {/* ======================= Button ===================== */}
        <Button
          type="submit"
          kind="secondary"
          className={`w-[200px] mx-auto h-[65px]  ${
            isSubmitting ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          {isSubmitting ? <Loading /> : "update user"}
        </Button>
      </form>
    </div>
  );
};

export default UserUpdate;
