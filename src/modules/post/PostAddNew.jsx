import useFirebaseImage from "../../hooks/useFirebaseImage";
import slugify from "slugify";
import Select from "../../components/dropdown/Select";
import ReactQuill, { Quill } from "react-quill";
import React, { useEffect, useMemo, useState } from "react";
import Radio from "../../components/radio/Radio";
import Option from "../../components/dropdown/Option";
import Loading from "../../components/loading/Loading";
import List from "../../components/dropdown/List";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import ImageUploader from "quill-image-uploader";
import ImageUpload from "../../components/image/ImageUpload";
import Heading from "../../components/heading/Heading";
import Field from "../../components/field/Field";
import Dropdown from "../../components/dropdown/Dropdown";
import Button from "../../components/button/Button";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
import { postPromoted, postStatus, userRole } from "../../utils/constants";
import { db } from "../../firebase-app/firebase-config";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import "react-quill/dist/quill.snow.css";
Quill.register("modules/imageUploader", ImageUploader);
import {
  where,
  serverTimestamp,
  query,
  getDocs,
  getDoc,
  doc,
  collection,
  addDoc,
} from "firebase/firestore";

// VALIDATE FORM
const schema = yup.object({
  title: yup.string().required("Please enter your title !"),
});

const styleScrollBtn =
  "fixed shadow-2xl w-[50px] h-[50px] rounded-full flex items-center justify-center dark:bg-whiteSoft  bg-colorDarkRedux text-white z-40 cursor-pointer dark:text-black font-bold text-2xl";

const PostAddNew = () => {
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
    defaultValues: {
      title: "",
      slug: "",
      status: "pending",
      promote: "none",
      image: "",
      category: {},
      user: {},
    },
  });
  const watchStatus = watch("status");
  const watchPromote = watch("promote");
  const {
    image,
    progress,
    handleSelectImage,
    handleDeleteImage,
    handleResetUpLoad,
  } = useFirebaseImage(setValue, getValues);
  const [categories, setCategories] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");
  const [content, setContent] = useState("");

  // FETCH USER DATA
  useEffect(() => {
    async function fetchUserData() {
      if (!userInfo.email) return;
      const q = query(
        collection(db, "users"),
        where("email", "==", userInfo.email)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setValue("user", {
          id: doc.id,
          ...doc.data(),
        });
      });
    }
    fetchUserData();
  }, [userInfo.email]);

  // HANDLE GET CATEGORIES
  useEffect(() => {
    async function getCategoriesData() {
      const colRef = collection(db, "categories");
      const q = query(colRef, where("status", "==", "approved"));
      const querySnapshot = await getDocs(q);
      let results = [];
      querySnapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(results);
    }
    getCategoriesData();
  }, []);

  // HANDLE ADD POST
  const navigate = useNavigate();
  const handleAddPost = async (values) => {
    if (!isValid || !image || !values.category || !content) {
      toast.error("Please fill full the option !", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
      return;
    }
    try {
      const cloneValues = { ...values };
      cloneValues.slug = slugify(values.slug || values.title, { lower: true });
      const colRef = collection(db, "posts");
      await addDoc(colRef, {
        ...cloneValues,
        image,
        content,
        createdAt: serverTimestamp(),
      });
      toast.success("Add new post successfully !", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
      navigate("/manage/post");
      reset({
        title: "",
        slug: "",
        status: "pending",
        promote: "none",
        image: "",
        category: {},
        user: {},
      });
      handleResetUpLoad();
      setSelectCategory({});
    } catch (error) {
      toast.error("Failed to add new post !", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  };

  // HANDLE SELECTED CATEGORY
  const handleSelectedCategory = async (category) => {
    const colRef = doc(db, "categories", category.id);
    const docData = await getDoc(colRef);
    setValue("category", {
      id: docData.id,
      ...docData.data(),
    });
    setSelectCategory(category);
  };

  // MODULES FOR REACT-QUILL
  const API_KEY = "95913b3beeb193701b10ab1aa5b6bfbf";
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ["clean"],
      ],
      imageUploader: {
        upload: async (file) => {
          const bodyFormData = new FormData();
          bodyFormData.append("image", file);
          const res = await axios({
            method: "post",
            url: `https://api.imgbb.com/1/upload?key=${API_KEY}`,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipath/form-data",
            },
          });
          return res.data.data.url;
        },
      },
    }),
    []
  );

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

  return (
    <div>
      <Heading>add new post</Heading>
      <form className="pt-14" onSubmit={handleSubmit(handleAddPost)}>
        <div className="grid grid-cols-2 gap-10 mb-10">
          {/* ==================== Title ============================ */}
          <Field>
            <Label>Title ✒️</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
            ></Input>
          </Field>
          {/* ==================== Category ============================ */}
          <Field>
            <Label>Category 📦</Label>
            <Dropdown>
              <Select placeholder="Select Category"></Select>
              <List>
                {categories.length > 0 &&
                  categories.map((category) => (
                    <Option
                      key={category.id}
                      onClick={() => handleSelectedCategory(category)}
                    >
                      {category.title}
                    </Option>
                  ))}
              </List>
            </Dropdown>
            {/* DISPLAY CATEGORY WHEN DROPDOWN SELECTED */}
            {selectCategory?.title && (
              <span className="inline-block p-3 text-sm font-medium text-blue-500 bg-blue-500 rounded-lg bg-opacity-20">
                {`#${selectCategory?.title}`}
              </span>
            )}
          </Field>
        </div>
        <div className="grid items-center grid-cols-2 mb-10 gap-x-10">
          {/* ==================== Image ============================ */}
          <Field>
            <Label>Image </Label>
            <ImageUpload
              onChange={handleSelectImage}
              handleDeleteImage={handleDeleteImage}
              progress={progress}
              image={image}
            ></ImageUpload>
            <input type="file" name="image" className="hidden-input" />
          </Field>
          <div className="flex flex-col gap-10">
            {(userInfo?.role === userRole.ADMIN ||
              userInfo?.role === userRole.MOD) && (
              <>
                {/* ===================== Prommoted ======================== */}
                <Field>
                  <Label>Promote Post </Label>
                  <div className="flex items-center gap-x-5">
                    <Radio
                      name="promote"
                      control={control}
                      checked={watchPromote === postPromoted.FEATURE}
                      value={postPromoted.FEATURE}
                    >
                      Feature
                    </Radio>
                    <Radio
                      name="promote"
                      control={control}
                      checked={watchPromote === postPromoted.BEST}
                      value={postPromoted.BEST}
                    >
                      Best
                    </Radio>
                    <Radio
                      name="promote"
                      control={control}
                      checked={watchPromote === postPromoted.HOT}
                      value={postPromoted.HOT}
                    >
                      Hot
                    </Radio>
                  </div>
                </Field>
                {/* ====================== Status ======================= */}
                <Field>
                  <Label>Status </Label>
                  <div className="flex items-center gap-x-5">
                    <Radio
                      name="status"
                      control={control}
                      checked={watchStatus === postStatus.APPROVED}
                      value={postStatus.APPROVED}
                    >
                      Approved
                    </Radio>
                    <Radio
                      name="status"
                      control={control}
                      checked={watchStatus === postStatus.PENDING}
                      value={postStatus.PENDING}
                    >
                      Pending
                    </Radio>
                    <Radio
                      name="status"
                      control={control}
                      checked={watchStatus === postStatus.REJECTED}
                      value={postStatus.REJECTED}
                    >
                      Reject
                    </Radio>
                  </div>
                </Field>
              </>
            )}
          </div>
        </div>
        <div className="mb-10">
          <Field>
            <Label>Content ✍️</Label>
            <div className="w-full entry-content">
              <ReactQuill
                className="dark:text-white text-text1"
                modules={modules}
                theme="snow"
                value={content}
                onChange={setContent}
              />
            </div>
          </Field>
        </div>
        {/* ======================= Button ===================== */}
        <Button
          id="addpost"
          type="submit"
          kind="secondary"
          className={`w-[200px] mx-auto h-[65px]  ${
            isSubmitting ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          {isSubmitting ? <Loading /> : "add new post"}
        </Button>
      </form>

      {/* scroll to top */}
      <a href="#">
        <div className={`${styleScrollBtn} bottom-20 right-5`}>
          <BiUpArrowAlt></BiUpArrowAlt>
        </div>
      </a>

      {/* scroll to bottom */}
      <a href="#addpost">
        <div className={`${styleScrollBtn} bottom-5 right-5`}>
          <BiDownArrowAlt></BiDownArrowAlt>
        </div>
      </a>
    </div>
  );
};

export default PostAddNew;
