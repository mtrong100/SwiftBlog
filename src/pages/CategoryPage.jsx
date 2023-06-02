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

const CategoryPage = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts data from firebase
  useEffect(() => {
    async function fetchPostData() {
      const colRef = collection(db, "posts");
      const slugRef = query(colRef, where("category.slug", "==", slug));
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

  // Fix scroll bug
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  if (!slug) return <NotFoundPage />;
  return (
    <Layout>
      <div className="page-container py-[150px]">
        <Heading>{`Category:  #${slug}`}</Heading>
        <div className="grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {loading && <BlogItemSkeleton Imageheight={220} blogs={6} />}
          {posts.length > 0 &&
            posts.map((item) => {
              return <BlogItem key={v4()} data={item}></BlogItem>;
            })}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
