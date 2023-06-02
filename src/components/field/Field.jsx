import React from "react";
import PropTypes from "prop-types";

const Field = ({ children }) => {
  return (
    <div className="flex flex-col items-start gap-3 mb-5 capitalize md:mb-10 md:gap-5 last:mb-0">
      {children}
    </div>
  );
};

Field.propTypes = {
  children: PropTypes.node,
};

export default Field;
