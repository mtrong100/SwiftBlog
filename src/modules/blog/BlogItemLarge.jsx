import slugify from "slugify";
import React from "react";
import BlogTitle from "./BlogTitle";
import BlogMeta from "./BlogMeta";
import BlogImage from "./BlogImage";
import BlogCategory from "./BlogCategory";

const BlogItemLarge = ({ data }) => {
  if (!data) return null;

  // Format date
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");

  return (
    <div>
      <BlogImage
        roundedInner="rounded-md"
        className="rounded-md"
        size="wide"
        url={data?.image}
        alt="blog-img"
      />
      <div className="flex flex-col gap-3 p-5 bg-whiteSoft dark:bg-colorDarkRedux">
        <BlogCategory className="text-sm" path={slugify(data?.category.slug)}>
          {data?.category?.title}
        </BlogCategory>
        <BlogTitle path={slugify(data?.slug)} className=" lg:text-2xl">
          {data?.title}
        </BlogTitle>
        <BlogMeta
          path={data?.user?.slug}
          date={formatDate}
          author={data?.user?.username}
        />
      </div>
    </div>
  );
};

export default BlogItemLarge;
