import slugify from "slugify";
import React from "react";
import NotFoundPage from "../../pages/NotFoundPage";
import BlogTitle from "./BlogTitle";
import BlogMeta from "./BlogMeta";
import BlogImage from "./BlogImage";
import BlogCategory from "./BlogCategory";

const BlogNewestItem = ({ data }) => {
  if (!data) return <NotFoundPage />;

  // Formate date
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  const { category, user } = data;

  return (
    <div
      className={`flex flex-col md:flex-row gap-5 mb-7 pb-7 border-b border-b-colorPurple last:border-b-0 last:pb-0 last:mb-0`}
    >
      <BlogImage
        size="small"
        className="flex-1"
        url={data?.image}
        alt="blog-img"
      />
      <div className="flex flex-col flex-1 gap-3">
        <BlogCategory className="text-xs" path={slugify(data?.category.slug)}>
          {category?.title}
        </BlogCategory>
        <BlogTitle className="text-base" path={slugify(data?.slug)}>
          {data?.title}
        </BlogTitle>
        <BlogMeta
          className="text-sm"
          path={user?.slug}
          date={formatDate}
          author={user?.username}
        />
      </div>
    </div>
  );
};

export default BlogNewestItem;
