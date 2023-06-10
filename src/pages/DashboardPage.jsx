import UserInfo from "../modules/user/UserInfo";
import React, { useEffect, useState } from "react";
import Heading from "../components/heading/Heading";
import BlogItemSkeleton from "../components/loadingSkeleton/BlogItemSkeleton";
import BlogItem from "../modules/blog/BlogItem";
import { v4 } from "uuid";
import { useAuth } from "../context/auth-context";
import { db } from "../firebase-app/firebase-config";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import UserInfoSkeleton from "../components/loadingSkeleton/UserInfoSkeleton";

const DashboardPage = () => {
  const { userInfo } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts data from firebase
  useEffect(() => {
    async function fetchPostData() {
      if (!userInfo.uid) return;
      const colRef = collection(db, "posts");
      const q = query(colRef, where("user.id", "==", userInfo.uid));
      onSnapshot(q, (snapshot) => {
        const results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPosts(results);
        setLoading(false);
      });
    }
    fetchPostData();
  }, [userInfo.uid]);

  // Format date
  const date = userInfo?.createdAt?.seconds
    ? new Date(userInfo?.createdAt?.seconds * 1000)
    : new Date();
  const formatDate = new Date(date).toLocaleDateString("vi-VI");

  return (
    <>
      <Heading>personal dashboard</Heading>
      {loading ? (
        <UserInfoSkeleton></UserInfoSkeleton>
      ) : (
        <UserInfo userInfo={userInfo} formatDate={formatDate} />
      )}
      <div className="mt-16">
        <Heading>your blogs</Heading>
        <div className="grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {loading && <BlogItemSkeleton Imageheight={220} blogs={6} />}
          {posts.length > 0 &&
            posts.map((item) => {
              return <BlogItem key={v4()} data={item}></BlogItem>;
            })}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
