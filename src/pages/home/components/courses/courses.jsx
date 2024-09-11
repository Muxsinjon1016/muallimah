import React from "react";
import { motion } from "framer-motion";
import { useCources } from "../../services/useCources";
import { useCourceCategory } from "../../services/useCourceCategory";

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const Coursess = () => {
  const { data: coursesData } = useCources();
  const { data: categoryData } = useCourceCategory(); // Fixed line here

  console.log(categoryData);

  return (
    <div id="cources" className="container mb-12">
      <h2 className="text-3xl text-red-600 font-secondFamily md:text-7xl mb-7">
        Courses
      </h2>

      {/* categories */}
      <motion.div
        className="slider-custom custom-scrollbar mb-10 flex items-center gap-5 overflow-x-auto whitespace-nowrap"
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
        {categoryData?.categories?.map((category) => (
          <motion.div
            key={category.id}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="py-2 px-10 rounded-[64px] border-2 text-blue-900 border-blue-900 cursor-pointer transition-all duration-300 font-bold hover:text-white hover:bg-blue-900">
              <h3 className="text-xl font-semibold md:text-2xl line-clamp-2">
                {category.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Cource cards */}
      <motion.div
        className="flex items-center gap-5 overflow-x-auto slider custom-scrollbar"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={cardVariants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {coursesData?.courses?.map((card) => (
          <motion.div
            key={card.id}
            className="w-[220px] shadow-lg hover:shadow-2xl transition-all duration-300 md:w-[288px] md:h-[400px] h-[339px] rounded-6 border-2 relative mb-10"
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <img
              className="w-[220px] md:w-[288px] md:h-[162px] h-[130px]"
              src={card.image_url}
              alt="img"
            />
            <div className="p-[15px] md:p-[25px]">
              <h3 className="mb-2 text-xl font-semibold text-blue-900 md:text-2xl line-clamp-2">
                {card.name}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-4 md:text-sm">
                {card.description}
              </p>
              <div className="absolute bottom-3 left-2 right-2">
                <div className="">
                  <p className="text-red-500 font-medium hover:text-red-600">
                    <span className="text-blue-900 font-bold mr-1">Type: </span>
                    {card.category.name}
                  </p>
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
