import React, { useEffect, useState } from "react";
import Heading from "../../components/heading/Heading";
import BlogItemSkeleton from "../../components/loadingSkeleton/BlogItemSkeleton";
import { db } from "../../firebase-app/firebase-config";
import BlogItemLarge from "../blog/BlogItemLarge";
import BlogItemSecondary from "../blog/BlogItemSecondary";
import {
  where,
  query,
  collection,
  onSnapshot,
  limit,
} from "firebase/firestore";
import BlogItemLargeSkeleton from "../../components/loadingSkeleton/BlogItemLargeSkeleton";
import BlogItemSecondarySkeleton from "../../components/loadingSkeleton/BlogItemSecondarySkeleton";

const FeatureBlogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts data from firebase
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", "approved"),
      where("promote", "==", "feature"),
      limit(6)
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
  }, []);

  if (posts.length < 0) return null;
  const [first, second, ...other] = posts;

  return (
    <section className="py-10 page-container">
      <Heading>Feature blogs</Heading>
      <div className="grid items-start gap-10 mt-5 md:grid-cols-2">
        <div className="flex flex-col gap-10">
          {loading && <BlogItemLargeSkeleton imgHeight={280} blogs={2} />}
          <BlogItemLarge data={first}></BlogItemLarge>
          <BlogItemLarge data={second}></BlogItemLarge>
        </div>
        <div className="flex flex-col h-full p-5 dark:bg-colorDarkRedux bg-whiteSoft">
          {loading && (
            <BlogItemSecondarySkeleton
              imgHeight={180}
              imgWidth={275}
              blogs={4}
            />
          )}
          {other.length > 0 &&
            other.map((post) => (
              <BlogItemSecondary key={post.id} data={post} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBlogs;
