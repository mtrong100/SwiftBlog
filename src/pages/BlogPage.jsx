import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Heading from "../components/heading/Heading";
import BlogItemSkeleton from "../components/loadingSkeleton/BlogItemSkeleton";
import BlogItem from "../modules/blog/BlogItem";
import { v4 } from "uuid";
import { db } from "../firebase-app/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import { AiOutlineSearch } from "react-icons/ai";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch posts data from firebase
  useEffect(() => {
    async function getPostData() {
      const colRef = collection(db, "posts");
      onSnapshot(colRef, (snapshot) => {
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

  // Search posts
  const searchPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Fix scroll bug
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Layout>
      <div className="page-container py-[150px]">
        <Heading>All posts collection</Heading>

        {/* Search & Filter */}
        <div className="flex w-full gap-3 px-5 py-4 mt-10 border border-solid rounded-full bg-grayf3 text-text1 dark:text-white dark:bg-colorDarkRedux border-text3">
          <span className="text-2xl">
            <AiOutlineSearch />
          </span>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className="w-full"
            placeholder="Search post..."
          />
        </div>

        {/* Posts data */}
        <div className="grid gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {loading && <BlogItemSkeleton Imageheight={230} blogs={9} />}
          {searchPosts.length > 0 &&
            searchPosts.map((item) => {
              return <BlogItem key={v4()} data={item}></BlogItem>;
            })}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
