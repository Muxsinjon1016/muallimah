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
    <div className='relative bg-[#00235a] h-[559px] flex items-center justify-center'>
      <p className="absolute top-0 left-0 w-full text-5xl text-center font-secondFamily text-white pt-[35px]">
        Free Online Language Courses
      </p>

      <button onClick={prevSlide} className="absolute left-0 z-10 p-2 text-white">{"<"}</button>

      <div className="relative w-full h-auto overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={bannerData[index].id}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center w-full"
          >
            <div className="w-[1100px] ml-auto mr-auto h-auto rounded-[10px] bg-white flex flex-col-reverse items-center justify-between text-center md:flex-row md:text-left p-6">
              <div className='p-[44px]'>
                <h1 className="text-4xl text-[#ff4756]">{bannerData[index].title}</h1>
                <p className="w-[499px] md:h-24 h-auto text-base mt-[26px] mb-[26px] text-[#00235a]">
                  {bannerData[index].text}
                </p>
                <div className="flex justify-center md:justify-start items-center w-[182px] relative gap-2.5 px-10 py-2 rounded-md bg-[#00235a] mx-auto md:mx-0">
                  <button className="text-base font-medium text-center text-white">Learn free</button>
                </div>
              </div>
              <div className='flex items-center justify-center mb-4 md:mb-0'>
                <img src={bannerData[index].img} alt="banner" className='w-[300px] md:w-[600px] h-auto' />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button onClick={nextSlide} className="absolute right-0 z-10 p-2 text-white">{">"}</button>
    </div>
  );
};

export default Banner;
