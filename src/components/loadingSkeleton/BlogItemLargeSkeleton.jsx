import React from "react";
import Skeleton from "react-loading-skeleton";
import { v4 } from "uuid";

const BlogItemLargeSkeleton = ({ blogs, imgHeight }) => {
  return Array(blogs)
    .fill(0)
    .map((item) => (
      <div key={v4()} className="flex flex-col">
        <div className="flex flex-col">
          <Skeleton height={imgHeight} />
          <div className="flex flex-col gap-3 p-5 bg-whiteSoft dark:bg-colorDarkRedux">
            <Skeleton width={80} height={32} />
            <Skeleton style={{ marginBottom: "1rem" }} height={20} count={3} />
            <Skeleton width={170} height={30} />
          </div>
        </div>
      </div>
    ));
};

export default BlogItemLargeSkeleton;
