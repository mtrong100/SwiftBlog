import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Heading from "../components/heading/Heading";
import { v4 } from "uuid";
import { db } from "../firebase-app/firebase-config";
import { collection, onSnapshot } from "firebase/firestore";
import UserCard from "../modules/user/UserCard";
import { userRole } from "../utils/constants";
import { AiOutlineSearch } from "react-icons/ai";
import UserSkeleton from "../components/loadingSkeleton/UserSkeleton";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // GET ALL POSTS DATA IN FIRESTORE DATABASE
  useEffect(() => {
    async function getUserData() {
      const colRef = collection(db, "users");
      onSnapshot(colRef, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setUsers(results);
        setLoading(false);
      });
    }
    getUserData();
  }, []);

  // SEARCH USERS
  const searchUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // FILTER USERS
  const filterUsers = searchUsers.filter((user) => {
    if (filter === "all") {
      return true;
    } else {
      return user.role === filter;
    }
  });

  // FIX SCROLL BUG
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Layout>
      <div className="page-container py-[150px]">
        <Heading>All users</Heading>
        <div className="flex flex-col-reverse gap-5 mt-5 md:gap-10 md:items-center md:justify-between md:flex-row">
          {/* ==== FILTER === */}
          <select
            className="py-2 w-[150px] text-lg border border-solid rounded bg-grayf3 text-text1 dark:text-white dark:bg-colorDarkRedux border-text3"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value={userRole.ADMIN}>ADMIN</option>
            <option value={userRole.MOD}>MOD</option>
            <option value={userRole.USER}>USER</option>
          </select>
          {/* ==== SEARCH === */}
          <div className="w-full flex items-center py-4 px-5 gap-3 md:max-w-[320px] border-2 border-solid rounded-full border-text3 text-text1 dark:text-white ">
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
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-3 lg:grid-cols-4">
          {loading && <UserSkeleton users={8} />}
          {filterUsers.length > 0 &&
            filterUsers.map((item) => (
              <UserCard key={v4()} data={item}></UserCard>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default UserPage;
