import React from "react";
import Skeleton from "react-loading-skeleton";

const UserInfoSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-5 px-8 py-5 mt-10 rounded-md shadow-md md:flex-row bg-whiteSoft text-text1 dark:text-white dark:bg-colorDarkRedux">
      <Skeleton width={250} height={250} borderRadius={1000}></Skeleton>
      <div className="flex flex-col gap-4">
        <Skeleton width={230} height={60} />
        <div className="flex items-center gap-2 font-semibold">
          <Skeleton width={180} height={25} />
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span className=" hover:opacity-90 text-text2 dark:text-colorSaga">
            <Skeleton width={180} height={25} />
          </span>
        </div>
        <div className="flex items-center gap-5 mt-2">
          <Skeleton width={80} height={32} />
          <Skeleton width={120} height={30} />
        </div>
      </div>
    </div>
  );
};

export default UserInfoSkeleton;
