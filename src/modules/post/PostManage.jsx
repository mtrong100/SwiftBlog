import Table from "../../components/table/Table";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import LabelStatus from "../../components/label/LabelStatus";
import IconView from "../../components/icons/IconView";
import IconEdit from "../../components/icons/IconEdit";
import IconDelete from "../../components/icons/IconDelete";
import Heading from "../../components/heading/Heading";
import Button from "../../components/button/Button";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
import { tableTh } from "../../data/data";
import { postStatus, userRole } from "../../utils/constants";
import { db } from "../../firebase-app/firebase-config";
import { AiOutlineSearch } from "react-icons/ai";
import {
  doc,
  collection,
  onSnapshot,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

const PostManage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  // Disabled tab in mobile and tablet
  useEffect(() => {
    if (window.innerWidth <= 768) {
      navigate("/");
      toast.error("Not available for mobile and tablet!", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  }, [navigate]);

  // Render post status
  const renderStatus = (status) => {
    switch (status) {
      case postStatus.APPROVED:
        return <LabelStatus type="success">Approved</LabelStatus>;
      case postStatus.PENDING:
        return <LabelStatus type="warning">Pending</LabelStatus>;
      case postStatus.REJECTED:
        return <LabelStatus type="danger">Rejected</LabelStatus>;
      default:
        break;
    }
  };

  // Fetch posts data from firebase
  useEffect(() => {
    // Check role user
    if (userInfo?.role === userRole.USER) {
      fetchUserPostData();
    } else {
      getPostData();
    }
    // Fetch posts data include (user.id)
    async function fetchUserPostData() {
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
          setPosts(results);
        });
      });
    }
    // Fetch all posts data
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
      });
    }
  }, [userInfo?.role, userInfo.uid]);

  // Search posts
  const searchPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter posts
  const filterPosts = searchPosts.filter((post) => {
    if (filter === "all") {
      return true;
    } else {
      return post.status === filter;
    }
  });

  // Handle delete posts
  const handleDeletePost = async (postID) => {
    const docRef = doc(db, "posts", postID);
    if (userInfo.role === userRole.ADMIN) {
      Swal.fire({
        title: "Are you sure you want to delete this user?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteDoc(docRef);
          await Swal.fire("Deleted!", "User has been deleted.", "success");
        }
      });
    } else {
      toast.error("only ADMIN can delete posts !", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  };

  return (
    <>
      <Heading>posts manage</Heading>
      <div className="flex justify-between py-10">
        <Button type="button" kind="ghost" path="/manage/add-post">
          Add new post
        </Button>
        <div className="flex items-center gap-10">
          {/* Filter */}
          <select
            className="py-2 w-[150px] border border-solid rounded bg-grayf3 text-text1 dark:text-white dark:bg-colorDarkRedux border-text3"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value={postStatus.APPROVED}>Approved</option>
            <option value={postStatus.PENDING}>Pending</option>
            <option value={postStatus.REJECTED}>Rejected</option>
          </select>
          {/* Search */}
          <div className="w-full flex items-center py-4 px-5 gap-3 max-w-[300px] border border-solid rounded-full border-text3 text-text1 dark:text-white ">
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
      </div>
      {/* ==== TABLE LAYOUT === */}
      <Table>
        <thead>
          <tr>
            {tableTh.map((item) => (
              <th key={v4()}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterPosts.length > 0 &&
            filterPosts.map((post) => {
              // Format date
              const date = post?.createdAt?.seconds
                ? new Date(post?.createdAt?.seconds * 1000)
                : new Date();
              const formatDate = new Date(date).toLocaleDateString("vi-VI");
              const { user, category } = post;
              return (
                <tr key={post.id}>
                  <td>
                    <div className="flex gap-x-3">
                      <img
                        src={post.image}
                        alt=""
                        className="w-[100px] select-none h-[60px] rounded object-cover"
                      />
                      <div className="flex-1 whitespace-pre-wrap">
                        <h3 className="mb-1 text-sm font-semibold leading-relaxed capitalize hover:text-blue-500">
                          {post.title}
                        </h3>
                        <time className="text-sm font-bold text-gray-500">
                          {`Date: ${formatDate}`}
                        </time>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="hover:opacity-90 italic capitalize select-none inline-block px-[15px] text-center rounded-lg font-semibold bg-blue-500 bg-opacity-10 dark:bg-colorDarkSaga text-blue-500 text-sm py-[10px]">
                      {category?.title}
                    </span>
                  </td>
                  <td>
                    <span className="font-semibold text-gray-500 capitalize">
                      {user?.username}
                    </span>
                  </td>
                  <td>{renderStatus(post.status)}</td>
                  <td>
                    <div className="flex items-center text-gray-500 gap-x-3">
                      <IconView onClick={() => navigate(`/${post.slug}`)} />
                      <IconEdit
                        onClick={() =>
                          navigate(`/manage/update-post?id=${post.id}`)
                        }
                      />
                      <IconDelete onClick={() => handleDeletePost(post.id)} />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default PostManage;
