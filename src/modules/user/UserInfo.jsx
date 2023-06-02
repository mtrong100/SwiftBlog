import React from "react";
import Heading from "../../components/heading/Heading";
import PropTypes from "prop-types";
import LabelRole from "../../components/label/LabelRole";

const UserInfo = ({ userInfo, formatDate }) => {
  return (
    <div className="flex flex-col items-center gap-5 px-8 py-5 mt-10 rounded-md shadow-md md:flex-row bg-whiteSoft text-text1 dark:text-white dark:bg-colorDarkRedux">
      <img
        className="w-[250px] object-cover h-[250px] rounded-full"
        src={userInfo?.avatar}
        alt="userInfo-avatar"
      />
      <div className="flex flex-col gap-4">
        <Heading line={false} textDecor="capitalize">
          {userInfo.username}
        </Heading>
        <div className="flex items-center gap-2 font-semibold">
          <span>Email:</span>
          <span className=" hover:opacity-90 text-text2 dark:text-colorSaga">
            {userInfo?.email}
          </span>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <span>Pasword:</span>
          <span className=" hover:opacity-90 text-text2 dark:text-colorSaga">
            {userInfo?.password}
          </span>
        </div>
        <div className="flex items-center gap-5 mt-2">
          <LabelRole type={userInfo?.role}>{userInfo?.role}</LabelRole>
          <span className="font-semibold select-none text-text1 dark:text-white hover:opacity-90">
            {`Date: ${formatDate}`}
          </span>
        </div>
      </div>
    </div>
  );
};

/* ADDING PropsTypes */
UserInfo.propTypes = {
  userInfo: PropTypes.any,
  formatDate: PropTypes.any,
};
export default UserInfo;
