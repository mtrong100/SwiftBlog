import React from "react";
import BlogImage from "./BlogImage";
import BlogCategory from "./BlogCategory";
import BlogMeta from "./BlogMeta";
import BlogTitle from "./BlogTitle";
import slugify from "slugify";
import NotFoundPage from "../../pages/NotFoundPage";
import PropTypes from "prop-types";
import { useTheme } from "../../context/theme-context";

const BlogItem = ({ data }) => {
  const { theme } = useTheme();
  const getThemeClass = () => {
    switch (theme) {
      case "primary":
        return "hover:border-colorOrange";
      case "secondary":
        return "hover:border-colorPink";
      case "third":
        return "hover:border-colorGreen";
      case "fourth":
        return "hover:border-colorYellow";
      default:
        return "";
    }
  };
  const themeColor = getThemeClass();

  // FORMAT DATE
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");

  if (!data.id) return <NotFoundPage />;

  // optional chaning
  return (
    <div
      className={`${themeColor} flex flex-col h-full p-3 transition-all border border-transparent rounded-lg shadow-sm dark:text-white text-text1  bg-whiteSoft dark:bg-colorDarkRedux`}
    >
      <BlogImage size="big" url={data?.image} />
      <div className="flex flex-col flex-1 h-full gap-4 p-3">
        <BlogCategory path={slugify(data?.category?.slug)} className="text-xs">
          {data?.category?.title}
        </BlogCategory>
        <BlogTitle
          path={slugify(data?.slug)}
          className="flex-1 md:text-sm lg:text-lg"
        >
          {data?.title}
        </BlogTitle>
        <BlogMeta
          className="text-xs lg:text-sm"
          path={data?.user?.slug}
          date={formatDate}
          author={data?.user?.username}
        />
      </div>
    </div>
  );
};

// ADDING PropTypes
BlogItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.shape({
      seconds: PropTypes.number,
    }),
    image: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
    user: PropTypes.shape({
      slug: PropTypes.string,
      username: PropTypes.string,
    }),
  }).isRequired,
};

export default BlogItem;
