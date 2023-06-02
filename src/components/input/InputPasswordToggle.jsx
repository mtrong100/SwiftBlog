import React, { useState } from "react";
import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";
import PropTypes from "prop-types";
import Input from "./Input";

const InputPasswordToggle = ({ control }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  if (!control) return null;
  return (
    <>
      <Input
        type={togglePassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password..."
        control={control}
      >
        {!togglePassword ? (
          <span className="text-2xl" onClick={() => setTogglePassword(true)}>
            <AiOutlineEyeInvisible />
          </span>
        ) : (
          <span className="text-2xl" onClick={() => setTogglePassword(false)}>
            <AiFillEye />
          </span>
        )}
      </Input>
    </>
  );
};

InputPasswordToggle.propTypes = {
  control: PropTypes.any.isRequired,
};

export default InputPasswordToggle;
