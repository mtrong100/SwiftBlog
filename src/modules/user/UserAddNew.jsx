import useFirebaseImage from "../../hooks/useFirebaseImage";
import slugify from "slugify";
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
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase-app/firebase-config";
import { useAuth } from "../../context/auth-context";

// VALIDATE FORM
const schema = yup.object({
  username: yup.string().required("Please enter your username"),
  slug: yup.string().lowercase(),
  email: yup
    .string()
    .lowercase()
    .email("Please enter valid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(8, "Your password must be 8 characters or greater")
    .required("Please enter your password"),
});

const UserAddNew = () => {
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
      email: "",
      password: "",
      username: "",
      avatar: "",
      slug: "",
      role: userRole.USER,
      createtAt: new Date(),
    },
  });
  // WATCH VALUES FOR RADIO AND TOGGLE
  const watchRole = watch("role");
  // USE HOOK (useFirebaseImage) TO HANDLE UPLOAD IMAGE
  const {
    image,
    progress,
    handleSelectImage,
    handleDeleteImage,
    handleResetUpLoad,
  } = useFirebaseImage(setValue, getValues);

  // HANDLE ADD USER
  const handleAddUser = async (values) => {
    if (!isValid) return;
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      await addDoc(collection(db, "users"), {
        username: values.username,
        email: values.email,
        password: values.password,
        slug: slugify(values.slug || values.username, { lower: true }),
        role: values.role,
        avatar: image,
        createtAt: serverTimestamp(),
      });
      toast.success("Add new user successfully !", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
      reset({
        email: "",
        password: "",
        username: "",
        avatar: "",
        slug: "",
        role: userRole.USER,
        createtAt: new Date(),
      });
      handleResetUpLoad();
    } catch (error) {
      toast.error("Failed to add new user !", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  };

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
      <Heading>add new user</Heading>
      <form className="pt-14" onSubmit={handleSubmit(handleAddUser)}>
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
          {/* ====================== Email ======================= */}
          <Field>
            <Label>email ✒️</Label>
            <Input
              control={control}
              placeholder="Enter your email"
              name="email"
            ></Input>
          </Field>
          {/* ====================== Password ======================= */}
          <Field>
            <Label>password ✒️</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="password"
            ></Input>
          </Field>
        </div>
        <div className="grid grid-cols-2 mb-10 gap-x-10">
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
        </div>
        {/* ======================= Button ===================== */}
        <Button
          type="submit"
          kind="secondary"
          className={`w-[200px] mx-auto h-[65px]  ${
            isSubmitting ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          {isSubmitting ? <Loading /> : "add new user"}
        </Button>
      </form>
    </div>
  );
};

export default UserAddNew;
