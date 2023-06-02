import React from "react";
import { footer } from "../../data/data";
import { BiUpArrowAlt } from "react-icons/bi";
import Logo from "../logo/Logo";
import { useTheme } from "../../context/theme-context";

const Footer = () => {
  const { theme } = useTheme();
  const getThemeClass = () => {
    switch (theme) {
      case "primary":
        return "hover:text-colorOrange dark:hover:text-colorOrange";
      case "secondary":
        return "hover:text-colorPink dark:hover:text-colorPink";
      case "third":
        return "hover:text-colorGreen dark:hover:text-colorGreen";
      case "fourth":
        return "hover:text-colorYellow dark:hover:text-colorYellow";
      default:
        return "";
    }
  };
  const getThemeActiveClass = () => {
    switch (theme) {
      case "primary":
        return "text-colorOrange dark:text-colorOrange";
      case "secondary":
        return "text-colorPink dark:text-colorPink";
      case "third":
        return "text-colorGreen dark:text-colorGreen";
      case "fourth":
        return "text-colorYellow dark:text-colorYellow";
      default:
        return "";
    }
  };
  const themeColor = getThemeClass();
  const themeActiveColor = getThemeActiveClass();

  const { social, details } = footer;

  return (
    <section className="bg-graySoft text-text1 dark:text-white dark:bg-colorDarkRedux">
      <div className="py-10 page-container">
        {/* footer-top */}
        <div className="flex flex-col items-center justify-between gap-8 pb-5 border-b md:flex-row border-text3">
          <Logo />
          <div className="flex items-center gap-5">
            {social.map((item, index) => (
              <span
                key={index}
                className={`text-3xl cursor-pointer ${themeColor}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* footer-links */}
        <div className="flex flex-wrap gap-16 mt-10 text-start md:gap-5">
          {details.map(({ title, links, id }) => {
            return (
              <div className="flex flex-col flex-1" key={id}>
                <h2
                  className={`mb-3 text-xl font-bold uppercase ${themeActiveColor}`}
                >
                  {title}
                </h2>
                <ul className="flex flex-col gap-2">
                  {links.map((item, index) => {
                    return (
                      <li key={index}>
                        <a
                          className={`text-sm font-medium md:text-base ${themeColor}`}
                          href="#"
                        >
                          {item}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* footer-Copyright */}
        <p className="pt-10 text-sm font-semibold text-center ">
          @Copyright by KID-NAME-FINGER 2023
        </p>
      </div>

      {/* scroll to top */}
      <a href="#">
        <div className="fixed shadow-2xl w-[50px] h-[50px] rounded-full bottom-5 right-5 flex items-center justify-center bg-colorDarkSaga text-white z-40 cursor-pointer font-bold text-2xl">
          <BiUpArrowAlt></BiUpArrowAlt>
        </div>
      </a>
    </section>
  );
};

export default Footer;
