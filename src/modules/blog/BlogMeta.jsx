import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogMeta = ({
  date = "Unkown",
  author = "Unkown",
  className = "text-sm",
  path = "",
  show = false,
}) => {
  return (
    <div
      className={`${className} text-text1 dark:text-white flex items-center gap-2 font-medium`}
    >
      <span>{date}</span>
      {show && <span className={`text-lg font-bold`}>.</span>}
      <Link to={`/profile/${path}`}>
        <span className="font-semibold capitalize cursor-pointer hover:underline">
          {author}
        </span>
      </Link>
    </div>
  );
};

BlogMeta.propTypes = {
  date: PropTypes.string,
  author: PropTypes.string,
  className: PropTypes.string,
  path: PropTypes.string,
};

export default BlogMeta;
