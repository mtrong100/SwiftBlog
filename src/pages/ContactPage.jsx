import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import contactImgPurple from "../assets/images/contact-purple.png";
import contactImgOrange from "../assets/images/contact-orange.png";
import contactImgYellow from "../assets/images/contact-yellow.png";
import contactImgGreen from "../assets/images/contact-green.png";
import { useTheme } from "../context/theme-context";
import Heading from "../components/heading/Heading";

const ContactPage = () => {
  const { theme } = useTheme();
  const getThemeClass = () => {
    switch (theme) {
      case "primary":
        return "focus:border-colorOrange";
      case "secondary":
        return "focus:border-colorPink";
      case "third":
        return "focus:border-colorGreen";
      case "fourth":
        return "focus:border-colorYellow";
      default:
        return "";
    }
  };
  const getBG = () => {
    switch (theme) {
      case "primary":
        return contactImgOrange;
      case "secondary":
        return contactImgPurple;
      case "third":
        return contactImgGreen;
      case "fourth":
        return contactImgYellow;
      default:
        return "";
    }
  };
  const themeColor = getThemeClass();
  const bgImg = getBG();

  // Fix scroll bug
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Layout>
      <div className="pt-[100px] md:pt-[150px] pb-[50px] grid md:grid-cols-2 gap-5 page-container">
        <div className="flex flex-col gap-8">
          <Heading>Contact us now</Heading>
          <input
            className={`w-full p-4 md:text-base text-sm transition-all border border-text3  rounded-lg focus:bg-slate-100 text-text1 dark:text-white  dark:focus:bg-colorDarkRedux ${themeColor}`}
            type="text"
            placeholder="Enter your name..."
          />
          <input
            className={`w-full p-4 md:text-base text-sm transition-all border border-text3  rounded-lg focus:bg-slate-100 text-text1 dark:text-white  dark:focus:bg-colorDarkRedux ${themeColor}`}
            type="text"
            placeholder="Enter your email..."
          />
          <textarea
            className={`w-full p-4 md:text-base resize-none h-full max-h-[300px] text-sm transition-all border border-text3  rounded-lg focus:bg-slate-100 text-text1 dark:text-white  dark:focus:bg-colorDarkRedux ${themeColor}`}
            placeholder="Write something..."
          ></textarea>
        </div>
        <div>
          <img src={bgImg} alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
