import Table from "../../components/table/Table";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import LabelStatus from "../../components/label/LabelStatus";
import IconEdit from "../../components/icons/IconEdit";
import IconDelete from "../../components/icons/IconDelete";
import Heading from "../../components/heading/Heading";
import Button from "../../components/button/Button";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
import { tableCategoryTh } from "../../data/data";
import { db } from "../../firebase-app/firebase-config";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { categoryStatus, userRole } from "../../utils/constants";
import { AiOutlineSearch } from "react-icons/ai";

const CategoryManage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  // RENDER POST STATUS
  const renderStatus = (status) => {
    switch (status) {
      case categoryStatus.APPROVED:
        return <LabelStatus type="success">Approved</LabelStatus>;
      case categoryStatus.PENDING:
        return <LabelStatus type="warning">Pending</LabelStatus>;
      case categoryStatus.UNAPPROVED:
        return <LabelStatus type="danger">Rejected</LabelStatus>;
      default:
        break;
    }
  };

  // GET CATEGORIES DATA FROM FIREBASE
  useEffect(() => {
    async function getCategoriesData() {
      const colRef = collection(db, "categories");
      onSnapshot(colRef, (snapshot) => {
        let results = [];
        snapshot.forEach((doc) => {
          results.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setCategories(results);
      });
    }
    getCategoriesData();
  }, []);

  // SEARCH CATEGORY
  const searchCategory = categories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // FILTER POSTS
  const filterCategories = searchCategory.filter((category) => {
    if (filter === "all") {
      return true;
    } else {
      return category.status === filter;
    }
  });

  // HANDLE DELETE CATEGORY
  const handleDeleteCategory = async (categoryID) => {
    const docRef = doc(db, "categories", categoryID);
    if (userInfo?.role === userRole.ADMIN) {
      Swal.fire({
        title: "Are you sure you want to delete this category?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await deleteDoc(docRef);
          Swal.fire("Deleted!", "Your category has been deleted.", "success");
        }
      });
    } else {
      toast.error("Only ADMIN & MOD can delete!", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  };

  // HANDLE UPDATE CATEGORY
  const handleUpdate = (categoryID) => {
    if (userInfo.role === userRole.ADMIN) {
      navigate(`/manage/update-category?id=${categoryID}`);
    } else {
      toast.error("only ADMIN can update category!", {
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
    }
  };

  return (
    <>
      <Heading>categories manage</Heading>
      <div className="flex flex-col justify-between gap-10 py-10 lg:gap-0 lg:flex-row">
        <Button
          type="button"
          kind="secondary"
          className="h-[55px]"
          path="/manage/add-category"
        >
          Add new category
        </Button>
        <div className="flex items-center gap-10">
          {/* ==== FILTER === */}
          <select
            className="py-2 w-[150px] border border-solid rounded bg-grayf3 text-text1 dark:text-white dark:bg-colorDarkRedux border-text3"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value={categoryStatus.APPROVED}>Approved</option>
            <option value={categoryStatus.PENDING}>Pending</option>
            <option value={categoryStatus.UNAPPROVED}>Unapproved</option>
          </select>
          {/* SEARCH */}
          <div className="w-full flex items-center py-4 px-5 gap-3 max-w-[300px] border border-solid rounded-full border-text3 text-text1 dark:text-white ">
            <span className="text-2xl">
              <AiOutlineSearch />
            </span>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="w-full"
              placeholder="Search category..."
            />
          </div>
        </div>
      </div>
      {/* ==== TABLE LAYOUT === */}
      <Table>
        <thead>
          <tr>
            {tableCategoryTh.map((item) => (
              <th key={v4()}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filterCategories.length > 0 &&
            filterCategories.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <span className="text-xs font-semibold text-gray-500 capitalize lg:text-base ">
                      {item.id}
                    </span>
                  </td>
                  <td>
                    <span className="hover:opacity-90 capitalize select-none inline-block px-4 text-center rounded-lg font-semibold bg-blue-500 bg-opacity-10 dark:bg-colorDarkSaga text-blue-500 text-sm py-[10px]">
                      {item.title}
                    </span>
                  </td>
                  <td>{renderStatus(item.status)}</td>
                  <td>
                    <div className="flex items-center text-gray-500 gap-x-3">
                      <IconEdit onClick={() => handleUpdate(item.id)} />
                      <IconDelete
                        onClick={() => handleDeleteCategory(item.id)}
                      />
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

export default CategoryManage;
