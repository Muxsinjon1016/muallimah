import React from "react";

export const NotFount = () => {
  return (
    <>
      <div className="container max-h-screen">
        <img className="w-full h-screen opacity-20" src="mainBg.svg" alt="img" />
        <h1 className="text-7xl absolute top-60 font-secondFamily right-80 font-medium opacity-100">
          Sorry, this page is not valuable
        </h1>
      </div>
    </>
  );
};

export default NotFount;
