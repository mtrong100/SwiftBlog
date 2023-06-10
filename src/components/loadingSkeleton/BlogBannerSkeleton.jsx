import React from "react";
import Skeleton from "react-loading-skeleton";

const BlogBannerSkeleton = () => {
  return (
    <>
      <Skeleton height={400}></Skeleton>
      <div className="absolute top-0 left-0 p-5">
        <div className="flex items-center gap-3">
          <Skeleton width={100} height={100} borderRadius={100}></Skeleton>
          <div className="flex flex-col gap-3">
            <Skeleton width={100} height={22}></Skeleton>
            <Skeleton width={70} height={25}></Skeleton>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogBannerSkeleton;
