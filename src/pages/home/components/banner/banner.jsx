import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bannerData = [
  {
    id: 1,
    title: "250+ Free online courses",
    text: "This course is for self-disciplined, hard-working and ambitious students. Learn English with the Muallimah any time, anywhere and become fluent in English.",
    img: "bannerImg.png",
  },
  {
    id: 2,
    title: "100+ Language Programs",
    text: "Join our diverse language programs to improve your skills. Learn from the best instructors globally.",
    img: "bannerImg.png",
  },
  {
    id: 3,
    title: "50+ Free eBooks",
    text: "Explore our collection of free eBooks to enhance your learning experience.",
    img: "bannerImg.png",
  },
];

const Banner = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  return (
    <div className="relative bg-[#00235a] py-14 flex items-center justify-center">
      <p className="absolute top-0 left-0 w-full text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-secondFamily text-white pt-[20px] md:pt-[30px] lg:pt-[35px]">
        Free Online Language Courses
      </p>

      <button
        onClick={prevSlide}
        className="absolute z-10 p-2 text-2xl text-white left-2 md:text-3xl lg:text-4xl"
      >
        {"<"}
      </button>

      <div className="relative w-full h-auto px-4 -mt-3 overflow-hidden md:mt-10 md:px-8 lg:px-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={bannerData[index].id}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-full"
          >
            <div className="max-w-[1100px] mx-auto h-auto rounded-[10px] mt-10 bg-gray-50 flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left p-6">
              <div className="p-[20px] md:px-[44px] md:py-[30px]">
                <h1 className="text-2xl md:text-3xl -mt-10 font-bold lg:text-5xl text-[#ff4756]">
                  {bannerData[index].title}
                </h1>
                <p className="w-full md:w-[450px] lg:w-[499px] text-sm md:text-base mt-[15px] md:mt-[26px] mb-[18px] md:mb-[56px] text-[#00235a]">
                  {bannerData[index].text}
                </p>
                <div className="flex justify-center md:justify-start items-center w-full md:w-[182px] relative gap-2.5 px-6 py-2 rounded-md bg-[#00235a] mx-auto md:mx-0">
                  <button className="block mx-auto text-sm font-medium text-white md:text-base">
                    Learn free
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center mb-4 md:mb-0">
                <img
                  src={bannerData[index].img}
                  alt="banner"
                  className="w-[200px] md:w-[300px] lg:w-[600px] h-auto"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={nextSlide}
        className="absolute z-10 p-2 text-2xl text-white right-2 md:text-3xl lg:text-4xl"
      >
        {">"}
      </button>
    </div>
  );
};

export default Banner;
