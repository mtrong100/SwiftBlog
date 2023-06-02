import React, { useEffect, useState } from "react";
import Heading from "../../components/heading/Heading";
import { db } from "../../firebase-app/firebase-config";
import { v4 } from "uuid";
import BlogNewestItem from "./BlogNewestItem";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import BlogItemSecondary from "./BlogItemSecondary";

const BlogOthers = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts data from firebase
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(
      colRef,
      where("status", "==", "approved"),
      where("promote", "in", ["best", "none"]),
      limit(8)
    );
    onSnapshot(queries, (snapshot) => {
      const results = [];
      snapshot.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        });
        setPosts(results);
      });
    });
  }, []);

  const firstHalf = posts.slice(0, 4);
  const secondHalf = posts.slice(4);
  return (
    <section className="mb-20">
      <div className="page-container">
        <Heading>More blogs</Heading>
        <div className="grid gap-10 mt-5 lg:grid-cols-2">
          <div className="p-5 rounded-lg shadow-sm dark:text-white text-text1 bg-whiteSoft dark:bg-colorDarkRedux">
            {firstHalf.length > 0 &&
              firstHalf.map((item) => {
                return (
                  <BlogItemSecondary key={v4()} data={item}></BlogItemSecondary>
                );
              })}
          </div>
          <div className="p-5 rounded-lg shadow-sm dark:text-white text-text1 bg-whiteSoft dark:bg-colorDarkRedux">
            {secondHalf.length > 0 &&
              secondHalf.map((item) => {
                return (
                  <BlogItemSecondary key={v4()} data={item}></BlogItemSecondary>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogOthers;
