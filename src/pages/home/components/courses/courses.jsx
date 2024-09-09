import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const cardData = [
  { id: 3, title: "Conversational English", lessons: "120 lessons in total" },
  { id: 3, title: "Conversational English", lessons: "120 lessons in total" },
  { id: 3, title: "Conversational English", lessons: "120 lessons in total" },
  { id: 3, title: "Conversational English", lessons: "120 lessons in total" },
  { id: 3, title: "Conversational English", lessons: "120 lessons in total" },
  { id: 4, title: "Conversational English", lessons: "120 lessons in total" },
  { id: 5, title: "Conversational English", lessons: "120 lessons in total" },
  { id: 7, title: "Conversational English", lessons: "120 lessons in total" },
];

export const Coursess = () => {
  return (
    <div className="container mb-12">
      <h2 className="text-3xl text-red-600 font-secondFamily md:text-7xl mb-7">
        Courses
      </h2>
      <motion.div
        className="flex items-center gap-5 overflow-x-auto slider custom-scrollbar"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 100 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            className="w-[220px] shadow-lg hover:shadow-2xl transition-all duration-300 md:w-[288px] md:h-[400px] h-[339px] rounded-6 border-2 relative mb-10"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <img
              className="w-[220px] md:w-[288px] md:h-[162px] h-[130px]"
              src="bannerImg.png"
              alt="img"
            />
            <div className="p-[15px] md:p-[25px]">
              <h3 className="mb-2 text-xl font-semibold text-blue-900 md:text-2xl line-clamp-2">
                {card.title}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-4 md:text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus molestias eaque suscipit obcaecati voluptas enim
                iste quia hic, recusandae dolorum ipsa distinctio quae facilis
                itaque, voluptate vel, laborum unde quisquam!
              </p>
              <div className="absolute bottom-3 left-2 right-2">
                <div className="flex items-center justify-between">
                  <p className="text-red-500 hover:text-red-600">
                    {card.lessons}
                  </p>
                  <FaArrowRightLong className="text-gray-500 cursor-pointer hover:text-black" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Coursess;
