import React from "react";
import Skeleton from "react-loading-skeleton";
import { v4 } from "uuid";

const BlogItemSecondarySkeleton = ({ blogs, imgHeight, imgWidth }) => {
  return Array(blogs)
    .fill(0)
    .map((item) => (
      <div
        key={v4()}
        className={`flex flex-col lg:flex-row gap-5 justify-between mb-6 border-b-[1px] border-b-text3 pb-6 last:mb-0 last:pb-0  last:border-0`}
      >
        <Skeleton width={imgWidth} height={imgHeight} />
        <div className="flex flex-col flex-1 gap-3">
          <Skeleton width={80} height={25} />
          <Skeleton style={{ marginBottom: "0.5rem" }} count={3} />
          <Skeleton width={170} height={30} />
        </div>
      </div>
    ));
};

export default BlogItemSecondarySkeleton;
