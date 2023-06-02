import React from "react";
import PropTypes from "prop-types";
import Heading from "../../components/heading/Heading";
import LabelRole from "../../components/label/LabelRole";

const UserDetail = ({ data, slug, formatDate }) => {
  return (
    <div className="flex items-center gap-5">
      <img
        className="w-[130px] 
         flex-shrink-0 h-[130px] md:w-[250px] object-cover md:h-[250px] rounded border-2 border-gradient"
        src={data?.avatar}
        alt="data-avatar"
      />
      <div className="flex flex-col flex-1 gap-4">
        <div className="flex items-center gap-3">
          <Heading>{data?.username}</Heading>
          <LabelRole type={data?.role}>{data?.role}</LabelRole>
        </div>
        <span className="hover:opacity-90 italic select-none inline-block px-[15px] text-center rounded-lg font-semibold bg-blue-500 w-fit bg-opacity-10 dark:bg-colorDarkSaga text-blue-500 text-sm py-[10px]">
          {data?.email}
        </span>
        <div className="flex items-center gap-5">
          <span className="text-sm font-medium select-none md:text-base text-text3 dark:text-white hover:opacity-90">
            {`Date: ${formatDate}`}
          </span>
        </div>
      </div>
    </div>
  );
};

/* ADDING PropsTypes */
UserDetail.propTypes = {
  data: PropTypes.object,
  slug: PropTypes.string,
  formatDate: PropTypes.string,
};

export default UserDetail;
