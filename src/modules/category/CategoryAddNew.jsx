import slugify from "slugify";
import React, { useEffect } from "react";
import Radio from "../../components/radio/Radio";
import Loading from "../../components/loading/Loading";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import Heading from "../../components/heading/Heading";
import Field from "../../components/field/Field";
import Button from "../../components/button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
import { db } from "../../firebase-app/firebase-config";
import { categoryStatus, userRole } from "../../utils/constants";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

// VALIDATE FORM
const schema = yup.object({
  title: yup.string().required("Please enter your title !"),
});

const CategoryAddNew = () => {
  const { userInfo } = useAuth();
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onchange",
    resolver: yupResolver(schema),
    defaultValues: {
      title: "",
      slug: "",
      status: "pending",
      createdAt: new Date(),
    },
  });
  const watchStatus = watch("status");

  // HANDLE ADD CATEGORY
  const navigate = useNavigate();
  const handleAddCategory = async (values) => {
    if (!isValid) return;
    try {
      const cloneValues = { ...values };
      cloneValues.slug = slugify(cloneValues.title, { lower: true });
      const colRef = collection(db, "categories");
      await addDoc(colRef, {
        ...cloneValues,
        createdAt: new Date(),
      });
      navigate("/manage/category");
      toast.success("Add new category successfully !", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
      reset({
        title: "",
        slug: "",
        status: "pending",
        createdAt: new Date(),
      });
    } catch (error) {
      toast.error("Failed to add new category !", {
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
      <Heading>add new category</Heading>
      <form className="pt-14" onSubmit={handleSubmit(handleAddCategory)}>
        <div className="grid gap-10 mb-10 lg:grid-cols-2">
          {/* ==================== Title ============================ */}
          <Field>
            <Label>Title ✒️</Label>
            <Input
              control={control}
              placeholder="Enter your title"
              name="title"
            ></Input>
          </Field>
          {/* ====================== Status ======================= */}
          {(userInfo?.role === userRole.ADMIN ||
            userInfo?.role === userRole.MOD) && (
            <>
              {/* ====================== Status ======================= */}
              <Field>
                <Label>Status</Label>
                <div className="flex items-center gap-x-5">
                  <Radio
                    name="status"
                    control={control}
                    checked={watchStatus === categoryStatus.APPROVED}
                    value={categoryStatus.APPROVED}
                  >
                    Approved
                  </Radio>
                  <Radio
                    name="status"
                    control={control}
                    checked={watchStatus === categoryStatus.PENDING}
                    value={categoryStatus.PENDING}
                  >
                    Pending
                  </Radio>
                  <Radio
                    name="status"
                    control={control}
                    checked={watchStatus === categoryStatus.UNAPPROVED}
                    value={categoryStatus.UNAPPROVED}
                  >
                    Unapproved
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
          {isSubmitting ? <Loading /> : "add new category"}
        </Button>
      </form>
    </div>
  );
};

export default CategoryAddNew;
