import React from "react";
import { motion } from "framer-motion";
import { useBooks } from "../../services/useBooks";

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const Book = () => {
  const { data } = useBooks();

  return (
    <div id="shop" className="container mb-12">
      <h2 className="text-3xl text-red-600 font-secondFamily md:text-7xl mb-7">
        The Muallimah Books
      </h2>
      <motion.div
        className="flex items-center gap-5 overflow-x-auto justify-evenly justi slider custom-scrollbar whitespace-nowrap"
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
        {data?.Books?.map((card) => (
          <motion.div
            key={card.Id}
            className="inline-block w-[220px] bg-white shadow-lg hover:shadow-2xl transition-all duration-300 md:w-[258px] rounded-6 border-2 relative mb-10"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <img
              className="w-[220px] md:w-[288px]"
              src={card.PictureUrls[0]}
              alt={card.Title}
            />
            <div className="p-[15px] md:p-[25px]">
              <h3 className="mb-2 text-xl font-semibold text-blue-900 md:text-2xl line-clamp-2">
                {card.Title}
              </h3>
              <p className="text-sm text-center text-gray-500 line-clamp-4 md:text-sm">
                {card.Price} sum
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
