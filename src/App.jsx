import { React } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { MainLayout } from "./layout/mainLayout/mainLayout";
import Home from "./pages/home/home";
import Blog from "./pages/blog/blog";
import About from "./pages/about/about-page";
import Courses from "./pages/courses/courses-page";
import Books from "./pages/books/books-page";
import Shop from "./pages/shop/shop";
import { AnimatePresence, motion } from "framer-motion"; // <-- motion va AnimatePresence ni import qilish

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<PageWithAnimation><Home /></PageWithAnimation>} />
            <Route path="/blog" element={<PageWithAnimation><Blog /></PageWithAnimation>} />
            <Route path="/about" element={<PageWithAnimation><About /></PageWithAnimation>} />
            <Route path="/courses" element={<PageWithAnimation><Courses /></PageWithAnimation>} />
            <Route path="/books" element={<PageWithAnimation><Books /></PageWithAnimation>} />
            <Route path="/shop" element={<PageWithAnimation><Shop /></PageWithAnimation>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

const PageWithAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default App;
