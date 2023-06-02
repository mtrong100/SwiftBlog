import React from "react";
import { AiFillDelete } from "react-icons/ai";
import PropTypes from "prop-types";
import { BsFillImageFill } from "react-icons/bs";

const ImageUpload = (props) => {
  const {
    name,
    className = "",
    progress = 0,
    image = "",
    userImage = false,
    handleDeleteImage = () => {},
    ...rest
  } = props;
  return (
    <label
      className={`cursor-pointer flex group items-center justify-center bg-graySoft text-text2 dark:text-white dark:bg-colorDarkRedux hover:bg-opacity-50 transition-all border border-dashed w-full ${
        image ? "h-full" : "min-h-[300px] "
      } rounded-lg ${className} relative overflow-hidden`}
    >
      {/* HIDDEN INPUT TYPE FILE */}
      <input
        type="file"
        name={name}
        className="hidden-input"
        onChange={() => {}}
        {...rest}
      />

      {/* DISPLAY LOADING SPIN WHEN UPLOADING IMG */}
      {progress !== 0 && !image && (
        <div className="absolute z-10 w-16 h-16 border-8 rounded-full border-colorPink border-t-transparent animate-spin"></div>
      )}

      {/* DISPLAY BASE LAYOUT WHEN THERE'S NO UPLOADING */}
      {!image && progress === 0 && (
        <div className="flex flex-col items-center text-center pointer-events-none">
          <span className="mb-5 text-7xl">
            <BsFillImageFill />
          </span>
          <p className="text-xl font-medium capitalize">Choose photo</p>
        </div>
      )}

      {/* DISLAY LAYOUT WHEN IT'S HAVE IMG */}
      {image && (
        <>
          <img src={image} className="object-cover w-full h-full" alt="" />
          <button
            type="button"
            onClick={handleDeleteImage}
            className={`absolute z-10 flex ${
              userImage ? "" : "top-5 right-5"
            } items-center justify-center w-12 h-12 text-2xl text-red-400 transition-all bg-white rounded-full shadow-lg opacity-0 cursor-pointer group-hover:opacity-100 hover:bg-red-500 hover:text-white`}
          >
            <AiFillDelete></AiFillDelete>
          </button>
        </>
      )}

      {/* DISPLAY PROGRESS BAR WHEN UPLOADING IMG */}
      {!image && (
        <div
          className="absolute bottom-0 left-0 w-10 h-1 transition-all bg-colorPink image-upload-progress"
          style={{
            width: `${Math.ceil(progress)}%`,
          }}
        ></div>
      )}
    </label>
  );
};

ImageUpload.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  progress: PropTypes.number,
  image: PropTypes.string,
  userImage: PropTypes.string,
  handleDeleteImage: PropTypes.func,
};

export default ImageUpload;
