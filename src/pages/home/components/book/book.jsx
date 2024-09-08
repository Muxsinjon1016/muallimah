import React from "react";

export const Book = () => {
  return (
    <div className="container mt-[87px]">
      <p className="text-4xl md:text-6xl text-left font-secondFamily text-[#ff4756] mb-20">
        The Muallimah’s Books
        The Muallimah’s Books
      </p>
      <div className="w-full ml-auto mr-auto lg:flex gap-28 mb-">
        <div className="w-[394px] h-[523px] rounded-2xl bg-white">
          <div className="w-[394px] h-[357px] rounded-2xl bg-[#f9f8f8] border-[0.5px] border-[#d1d1d1]">
            <img
              className="w-[293px] ml-auto mr-auto"
              src="book.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
