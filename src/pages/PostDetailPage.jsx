import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import NotFoundPage from "./NotFoundPage";
import Layout from "../components/layout/Layout";
import BlogSidebar from "../modules/blog/BlogSidebar";
import BlogRelated from "../modules/blog/BlogRelated";
import BlogMeta from "../modules/blog/BlogMeta";
import BlogImage from "../modules/blog/BlogImage";
import BlogCategory from "../modules/blog/BlogCategory";
import { useParams } from "react-router-dom";
import { db } from "../firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import BlogBannerSkeleton from "../components/loadingSkeleton/BlogBannerSkeleton";

const PostDetailPage = () => {
  const { slug } = useParams();
  const [postDetail, setPostDetail] = useState({});
  const [loading, setLoading] = useState(true);

  // GET ALL POSTS WITH THE SLUG
  useEffect(() => {
    async function fetchPostData() {
      if (!slug) return;
      const slugRef = query(collection(db, "posts"), where("slug", "==", slug));
      onSnapshot(slugRef, (snapshot) => {
        snapshot.forEach((doc) => {
          doc.data() && setPostDetail(doc.data());
          setLoading(false);
        });
      });
    }
    fetchPostData();
  }, [slug]);

  // FIX SCROLL WHEN ROUTING
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [slug]);

  // FORMAT DATE
  const date = postDetail?.createdAt?.seconds
    ? new Date(postDetail?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");
  const { category, user } = postDetail;

  if (!slug) return <NotFoundPage />;
  return (
    <Layout>
      <div className="page-container">
        <div className="pt-[150px]">
          <div className="relative">
            <div className="absolute inset-0 overlay"></div>
            {loading && <BlogBannerSkeleton></BlogBannerSkeleton>}
            {!loading && (
              <BlogImage url={postDetail?.image} size="banner"></BlogImage>
            )}
            <div className="absolute top-0 left-0 p-5">
              <div className="flex items-center gap-3">
                <BlogImage
                  roundedInner="rounded-full"
                  className="flex-shrink-0"
                  url={user?.avatar}
                  size="circle"
                ></BlogImage>
                <div className="flex flex-col gap-2">
                  <BlogMeta
                    className="text-base text-white"
                    date={formatDate}
                    author={user?.username}
                  ></BlogMeta>
                  <BlogCategory path={category?.slug} className="text-sm">
                    {category?.title}
                  </BlogCategory>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog Content */}
        <div className="content-layout">
          <div className="entry-content text-text1 dark:text-white">
            {parse(postDetail.content || "")}
          </div>
          <BlogSidebar />
        </div>
        <div className="mt-10 lg:mt-28">
          <BlogRelated categoryID={category?.id} />
        </div>
      </div>
    </Layout>
  );
};

export default PostDetailPage;
