import slugify from "slugify";
import React from "react";
import BlogTitle from "./BlogTitle";
import BlogMeta from "./BlogMeta";
import BlogImage from "./BlogImage";
import BlogCategory from "./BlogCategory";

const BlogNewestLarge = ({ data }) => {
  if (!data.id) return null;

  // Format date
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");

  return (
    <div className="p-3 transition-all border border-transparent rounded-lg shadow-lg hover:border-colorPrimary bg-colorDarkRedux">
      <BlogImage size="large" url={data?.image} alt="blog-img" />
      <div className="flex flex-col gap-5 pt-5">
        <div className="flex items-center justify-between">
          <BlogCategory path={slugify(data?.category.slug)}>
            {data?.category?.title}
          </BlogCategory>
          <BlogMeta
            className="md:text-lg"
            path={data?.user?.slug}
            date={formatDate}
            author={data?.user?.username}
          />
        </div>
        <BlogTitle path={slugify(data?.slug)} className="md:text-3xl">
          {data?.title}
        </BlogTitle>
      </div>
    </div>
  );
};

export default BlogNewestLarge;
