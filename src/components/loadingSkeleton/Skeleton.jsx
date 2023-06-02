import React from "react";

const Skeleton = ({ height, width = "w-full", radius = "rounded-md" }) => {
  return <div className={`skeleton  ${height} ${width} ${radius}`}></div>;
};

export default Skeleton;
