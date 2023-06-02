import React from "react";
import Button from "../components/button/Button";
import NotFoundImg from "../assets/images/wut.png";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 notfoundBG">
      <div className="md:w-[300px] md:h-[300px] w-[200px] h-[200px] border-4 md:border-[10px] border-colorPurple rounded-full">
        <img
          className="object-cover w-full h-full rounded-full"
          src={NotFoundImg}
          alt="not-found-img"
        />
      </div>
      <h1 className="text-3xl md:text-5xl lg:text-[80px] font-bold uppercase text-linear">
        Bro went too far !!
      </h1>
      <Button type="button" path="/">
        Return home
      </Button>
    </div>
  );
};

export default NotFoundPage;
