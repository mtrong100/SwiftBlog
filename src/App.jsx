import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import { useTheme } from "./context/theme-context";
import useDarkMode from "./hooks/useDarkMode";
import ThemeSwitch from "./components/theme/ThemeSwitch";

/* ===================================================== */
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const DashboardLayout = lazy(() =>
  import("./modules/dashboard/DashboardLayout")
);
const PostManage = lazy(() => import("./modules/post/PostManage"));
const PostAddNew = lazy(() => import("./modules/post/PostAddNew"));
const CategoryAddNew = lazy(() => import("./modules/category/CategoryAddNew"));
const CategoryManage = lazy(() => import("./modules/category/CategoryManage"));
const UserManage = lazy(() => import("./modules/user/UserManage"));
const UserAddNew = lazy(() => import("./modules/user/UserAddNew"));
const UserUpdate = lazy(() => import("./modules/user/UserUpdate"));
const CategoryUpdate = lazy(() => import("./modules/category/CategoryUpdate"));
const PostUpdate = lazy(() => import("./modules/post/PostUpdate"));
const PostDetailPage = lazy(() => import("./pages/PostDetailPage"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const UserProfilePage = lazy(() => import("./pages/UserProfilePage"));
const UserPage = lazy(() => import("./pages/UserPage"));

const HomePage = lazy(() => import("./pages/HomePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const SigninPage = lazy(() => import("./pages/SigninPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  const { dark } = useTheme();

  return (
    <>
      <AuthProvider>
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <span className="loadingSpin"></span>
            </div>
          }
        >
          <SkeletonTheme
            baseColor={dark === "true" ? "#202020" : "#ebebeb"}
            highlightColor={dark === "true" ? "#444" : "#f5f5f5"}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<SigninPage />} />
              <Route path="/register" element={<SignupPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/user" element={<UserPage />}></Route>
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/:slug" element={<PostDetailPage />}></Route>
              <Route path="/category/:slug" element={<CategoryPage />}></Route>
              <Route
                path="/profile/:slug"
                element={<UserProfilePage />}
              ></Route>

              {/* ============ DASHBOARD =========== */}
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<DashboardPage />}></Route>
                {/* ============ POST =============== */}
                <Route path="/manage/post" element={<PostManage />}></Route>
                <Route path="/manage/add-post" element={<PostAddNew />}></Route>
                <Route
                  path="/manage/update-post"
                  element={<PostUpdate />}
                ></Route>
                {/* ============ CATEGORY =========== */}
                <Route
                  path="/manage/category"
                  element={<CategoryManage />}
                ></Route>
                <Route
                  path="/manage/add-category"
                  element={<CategoryAddNew />}
                ></Route>
                <Route
                  path="/manage/update-category"
                  element={<CategoryUpdate />}
                ></Route>
                {/* ============ USER =============== */}
                <Route path="/manage/user" element={<UserManage />}></Route>
                <Route path="/manage/add-user" element={<UserAddNew />}></Route>
                <Route
                  path="/manage/update-user"
                  element={<UserUpdate />}
                ></Route>
              </Route>
            </Routes>
          </SkeletonTheme>
        </Suspense>
      </AuthProvider>
    </>
  );
}

export default App;
