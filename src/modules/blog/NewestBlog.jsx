import React, { useEffect, useState } from "react";
import Heading from "../../components/heading/Heading";
import { v4 } from "uuid";
import { db } from "../../firebase-app/firebase-config";
import BlogItem from "./BlogItem";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import BlogItemSkeleton from "../../components/loadingSkeleton/BlogItemSkeleton";

const NewestBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts data
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", "approved"),
      where("promote", "==", "hot"),
      limit(4)
    );
    onSnapshot(queries, (snapshot) => {
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
  }, []);

  return (
    <section className="mb-20">
      <div className="page-container">
        <Heading>Newest blogs</Heading>
        <div className="grid gap-10 mt-16 lg:grid-cols-3">
          {loading && (
            <BlogItemSkeleton Imageheight={200} blogs={6}></BlogItemSkeleton>
          )}
          {posts.length > 0 &&
            posts.map((item) => <BlogItem key={v4()} data={item}></BlogItem>)}
        </div>
      </div>
    </section>
  );
};

export default NewestBlog;
