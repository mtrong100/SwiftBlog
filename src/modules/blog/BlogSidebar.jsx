import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { db } from "../../firebase-app/firebase-config";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import BlogItem from "./BlogItem";
import BlogItemSkeleton from "../../components/loadingSkeleton/BlogItemSkeleton";

const BlogSidebar = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET ALL POSTS DATA IN FIRESTORE DATABASE
  useEffect(() => {
    async function getPostData() {
      const colRef = collection(db, "posts");
      const queries = query(
        colRef,
        where("status", "==", "approved"),
        where("promote", "in", ["best", "none"]),
        limit(10)
      );
      onSnapshot(queries, (snapshot) => {
        let results = [];
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
    getPostData();
  }, []);

  return (
    <section className="sticky top-[110px] rounded-md flex-col hidden gap-5 lg:flex bg-whiteSoft dark:bg-colorDarkRedux">
      {loading && (
        <BlogItemSkeleton Imageheight={200} blogs={5}></BlogItemSkeleton>
      )}
      {posts.length > 0 &&
        posts.map((item) => <BlogItem key={v4()} data={item}></BlogItem>)}
    </section>
  );
};

export default BlogSidebar;
