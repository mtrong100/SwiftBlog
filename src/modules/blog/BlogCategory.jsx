import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogCategory = ({ path = "", children, className = "" }) => {
  return (
    <span
      className={`${className}  inline-block bg-opacity-20 capitalize w-fit rounded-md py-2 px-4  bg-blue-500 text-blue-500 dark:bg-colorDarkSaga font-semibold overflow-hidden `}
    >
      <Link className="block hover:underline" to={`/category/${path}`}>
        {children}
      </Link>
    </span>
  );
};

/* ADDING PropsTypes */
BlogCategory.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  path: PropTypes.string,
};

export default BlogCategory;
