import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ThemeSwitch from "../theme/ThemeSwitch";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <ThemeSwitch />
      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
