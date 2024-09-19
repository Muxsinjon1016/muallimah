import React from "react";
import { motion } from "framer-motion";
import { useBlogCategories } from "../../services/useBlogCategory";
import BlogPosts from "../../../../components/blogPosts";

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const Blog = () => {
  const { data } = useBlogCategories();

  return (
    <div id="blog" className="container mb-12">
      <h2 className="font-secondFamily text-red-600 text-3xl md:text-7xl mb-7">
        Blog
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
        {data?.categories?.map((category) => (
          <motion.div
            key={category.id}
            variants={cardVariants}
            transition={{ duration: 0.5 }}
          >
            <div className="py-2 px-10 rounded-[64px] border-2 text-blue-900 border-blue-900 cursor-pointer transition-all duration-300 font-bold hover:text-white hover:bg-blue-900">
              {category.name}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <BlogPosts />
    </div>
  );
};

export default Blog;
