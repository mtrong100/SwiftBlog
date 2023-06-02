import React from "react";
import PropTypes from "prop-types";

const BlogImage = ({
  size = "medium",
  className = "rounded-lg",
  roundedInner = "rounded-lg",
  alt = "blog-img",
  url = "",
}) => {
  switch (size) {
    case "wide":
      size = "w-full h-[250px] md:h-[280px]";
      break;
    case "ultra_wide":
      size = "w-full md:h-[320px]";
      break;
    case "small":
      size = "h-[200px] md:h-[150px] lg:h-[180px]";
      break;
    case "big":
      size = "h-[230px] md:h-[200px] lg:h-[220px]";
      break;
    case "banner":
      size = "w-full h-[400px]";
      break;
    case "circle":
      size = "w-[100px] h-[100px] rounded-full";
      break;

    default:
      break;
  }

  return (
    <div className={`${className} ${size}  overflow-hidden group`}>
      <img
        className={`${roundedInner} transition-all duration-500 select-none w-full h-full object-cover group-hover:scale-105`}
        src={url}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
};

/* ADDING PropsTypes */
BlogImage.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
  url: PropTypes.string,
  roundedInner: PropTypes.string,
};

export default BlogImage;
