import React from "react";
import PropTypes from "prop-types";

const Toggle = ({ on, onClick, ...props }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={on}
        className="hidden-input"
        onChange={() => {}}
        onClick={onClick}
      />
      <div
        className={`inline-block w-[80px] h-[42px] relative cursor-pointer rounded-full p-1 transition-all ${
          on ? "bg-colorGradient" : "bg-gray-300"
        }`}
        {...props}
      >
        <span
          className={`transition-all w-[34px] h-[34px] bg-white rounded-full inline-block ${
            on ? "translate-x-[35px]" : ""
          }`}
        ></span>
      </div>
    </label>
  );
};

Toggle.propTypes = {
  on: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Toggle;
