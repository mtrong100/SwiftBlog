import React from "react";
import NotFoundPage from "../../pages/NotFoundPage";
import BlogMeta from "../blog/BlogMeta";
import BlogImage from "../blog/BlogImage";
import LabelRole from "../../components/label/LabelRole";

const UserItem = ({ data }) => {
  if (!data.id) return <NotFoundPage />;

  // Format date
  const date = data?.createdAt?.seconds
    ? new Date(data?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");

  return (
    <div className="flex flex-col items-center justify-center w-full p-5 mx-auto lg:p-10 rounded-xl dark:text-white text-text1 bg-graySoft dark:bg-colorDarkRedux">
      <LabelRole type={data?.role}>{data?.role}</LabelRole>
      <BlogImage
        size="circle"
        className="my-5 mb-2 border-2 rounded-full"
        url={data?.avatar}
        alt="blog-img"
      />
      <BlogMeta
        className="flex-col mt-2 text-xs md:text-base"
        path={data?.slug}
        date={formatDate}
        author={data?.username}
      />
    </div>
  );
};

export default UserItem;
