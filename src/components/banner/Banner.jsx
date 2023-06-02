import React, { useEffect } from "react";
import { useTheme } from "../../context/theme-context";
import DefaultBtn from "../button/DefaultBtn";

const Banner = () => {
  const { theme } = useTheme();
  const getThemeClass = () => {
    switch (theme) {
      case "primary":
        return "primary-gradient-bg";
      case "secondary":
        return "secondary-gradient-bg";
      case "third":
        return "third-gradient-bg";
      case "fourth":
        return "fourth-gradient-bg";
      default:
        return "";
    }
  };
  const themeColor = getThemeClass();

  return (
    <section
      className={`${themeColor} flex flex-col text-center items-center justify-center pt-[96px] mt-auto font-bold bg-center text-white `}
    >
      <div className="py-20 ">
        <span className={`text-lg `}>Stay Informed, Get Inspired</span>
        <h1 className={`my-3 text-5xl font-bold md:text-7xl `}>SWIFT-BLOG</h1>
        <p className="text-sm max-w-[300px] md:max-w-none w-full mx-auto font-medium leading-snug placeholder:break-all md:text-base">
          Your Ultimate Platform for Expressive Writing and Inspiring Ideas
        </p>
        <DefaultBtn
          className="mx-auto mt-5 font-semibold"
          path="/login"
          type="button"
          padding="px-8 py-4"
        >
          Get started
        </DefaultBtn>
      </div>
    </section>
  );
};

export default Banner;
