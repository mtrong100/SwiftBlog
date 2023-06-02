import React from "react";
import Skeleton from "react-loading-skeleton";
import { v4 } from "uuid";

const UserSkeleton = ({ users }) => {
  return Array(users)
    .fill(0)
    .map((item) => (
      <div
        key={v4()}
        className="relative flex flex-col items-center justify-center w-full gap-3 p-5 mx-auto user-card md:gap-8 glass rounded-xl bg-colorDarkRedux"
      >
        <Skeleton width={80} height={32} />
        <Skeleton width={150} height={150} borderRadius={100} />
        <div className="flex flex-col items-center justify-center gap-3">
          <Skeleton width={170} height={30} />
        </div>
      </div>
    ));
};

export default UserSkeleton;
