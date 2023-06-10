import React from "react";
import BlogImage from "./BlogImage";
import BlogCategory from "./BlogCategory";
import BlogMeta from "./BlogMeta";
import BlogTitle from "./BlogTitle";
import slugify from "slugify";
import NotFoundPage from "../../pages/NotFoundPage";
import PropTypes from "prop-types";

const BlogRelatedItem = ({ data }) => {
  if (!data.id) return <NotFoundPage />;

  // FORMAT DATE
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");

  return (
    <div className="flex flex-col h-full p-3 rounded-lg shadow-sm dark:bg-colorDarkRedux bg-whiteSoft">
      <BlogImage size="small" url={data?.image} />
      <div className="flex flex-col flex-1 h-full gap-2 p-3">
        <BlogCategory path={slugify(data?.category?.slug)} className="text-xs">
          {data?.category?.title}
        </BlogCategory>
        <BlogTitle path={slugify(data?.slug)} className="flex-1 text-base">
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
BlogRelatedItem.propTypes = {
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

export default BlogRelatedItem;
