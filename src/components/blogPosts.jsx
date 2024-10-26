import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import React from "react";
import useBlogPosts from "../pages/home/services/useBlogPosts";

export const BlogPosts = () => {
  const { data } = useBlogPosts();

  return (
    <>
      <div>
        <motion.div
          className="slider custom-scrollbar flex items-center gap-5 overflow-x-auto whitespace-nowrap"
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
          {data?.map((card) => (
            <motion.div
              key={card.id}
              className="inline-block w-[220px] shadow-lg hover:shadow-2xl transition-all duration-300 md:w-[258px] md:h-[400px] h-[339px] rounded-6 border-2 relative mb-10"
              variants={cardVariants}
              transition={{ duration: 0.5 }}
            >
              <img
                className="w-[220px] md:w-[288px] md:h-[162px] h-[130px]"
                src="bannerImg.png"
                alt="img"
              />
              <div className="p-[15px] md:p-[25px]">
                <h3 className="text-blue-900 font-semibold text-xl md:text-2xl line-clamp-2 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 line-clamp-4 text-xs md:text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Necessitatibus molestias eaque suscipit obcaecati voluptas
                  enim iste quia hic, recusandae dolorum ipsa distinctio quae
                  facilis itaque, voluptate vel, laborum unde quisquam!
                </p>
                <div className="absolute bottom-3 left-2 right-2">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-500 hover:text-black">
                      {card.lessons}
                    </p>
                    <FaArrowRightLong className="text-gray-500 hover:text-black cursor-pointer" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default BlogPosts;
