import React, { useEffect, useState } from "react";
import NotFoundPage from "./NotFoundPage";
import Layout from "../components/layout/Layout";
import Heading from "../components/heading/Heading";
import BlogItem from "../modules/blog/BlogItem";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import { db } from "../firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import BlogItemSkeleton from "../components/loadingSkeleton/BlogItemSkeleton";
import UserDetail from "../modules/user/UserDetail";

const UserProfilePage = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch posts data (with user.slug) from firebase
  useEffect(() => {
    async function fetchPostData() {
      const colRef = collection(db, "posts");
      const slugRef = query(colRef, where("user.slug", "==", slug));
      onSnapshot(slugRef, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
          setPosts(results);
          setLoading(false);
        });
      });
    }
    fetchPostData();
  }, [slug]);

  // Fetch users data from firebase
  useEffect(() => {
    async function fetchUserData() {
      const colRef = collection(db, "users");
      const q = query(colRef, where("slug", "==", slug));
      onSnapshot(q, (snapshot) => {
        snapshot.forEach((doc) => {
          doc.data() && setUser(doc.data());
        });
      });
    }
    fetchUserData();
  }, [slug]);

  // Fix scroll bug
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Format date
  const date = user?.createdAt?.seconds
    ? new Date(user?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");

  if (!slug) return <NotFoundPage />;
  return (
    <Layout>
      <div className="page-container py-[150px]">
        <UserDetail data={user} slug={slug} formatDate={formatDate} />
        <div className="mt-20">
          <Heading>blogs post</Heading>
          <div className="grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {loading && <BlogItemSkeleton Imageheight={200} blogs={3} />}
            {posts.length > 0 &&
              posts.map((item) => {
                return <BlogItem key={v4()} data={item}></BlogItem>;
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfilePage;
