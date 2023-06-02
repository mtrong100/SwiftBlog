import React, { useEffect, useRef } from "react";
import Loading from "../components/loading/Loading";
import Label from "../components/label/Label";
import InputPasswordToggle from "../components/input/InputPasswordToggle";
import Input from "../components/input/Input";
import Field from "../components/field/Field";
import Button from "../components/button/Button";
import AuthPage from "./AuthPage";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/auth-context";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-app/firebase-config";
import { useTheme } from "../context/theme-context";

// Validate
const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Please enter your email"),
  password: yup
    .string()
    .min(8, "Your password must be 8 characters or greater")
    .required("Please enter your password"),
});

const SigninPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const isMounted = useRef(false);
  const {
    control,
    handleSubmit,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onchange",
    resolver: yupResolver(schema),
  });

  // Stay at homepage when user already login
  useEffect(() => {
    if (isMounted.current && userInfo?.email) {
      navigate("/");
      toast.info("You're already logged in!", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    } else {
      isMounted.current = true;
    }
  }, [navigate, userInfo?.email]);

  // Switch theme
  const { theme } = useTheme();
  const getThemeClass = () => {
    switch (theme) {
      case "primary":
        return "border-colorOrange";
      case "secondary":
        return "border-colorPink";
      case "third":
        return "border-colorGreen";
      case "fourth":
        return "border-colorYellow";
      default:
        return "";
    }
  };
  const themeColor = getThemeClass();

  // Handle login
  const handleSignIn = async (values) => {
    if (!isValid) return;
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast.success("Login successfully!", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
      navigate("/");
    } catch (error) {
      toast.error("Something went wrong!", {
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
    <section className="flex items-center justify-center h-screen signinBG">
      <div className="page-container">
        <form
          onSubmit={handleSubmit(handleSignIn)}
          className={`w-full ${themeColor} border-2 max-w-[600px] p-10 shadow-lg glass-design rounded-lg mx-auto`}
        >
          <AuthPage>
            {/* EMAIL */}
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                placeholder="Enter your email..."
                control={control}
              />
            </Field>

            {/* PASSWORD */}
            <Field>
              <Label htmlFor="password">Password</Label>
              <InputPasswordToggle control={control}></InputPasswordToggle>
              <div className="flex items-center gap-2 text-sm font-semibold normal-case select-none">
                <p>Not have an account?</p>
                <Link to="/register" className="cursor-pointer text-colorPink">
                  Register
                </Link>
              </div>
            </Field>

            {/* BUTTON SUBMIT */}
            <Button
              type="submit"
              className={`w-full h-[55px] md:h-[60px] font-semibold md:text-xl ${
                isSubmitting ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              {isSubmitting ? <Loading /> : "Login"}
            </Button>
          </AuthPage>
        </form>
      </div>
    </section>
  );
};

export default SigninPage;
