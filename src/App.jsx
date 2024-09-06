import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/mainLayout/mainLayout";
import Home from "./pages/home/home";
import Blog from "./pages/blog/blog";
import About from "./pages/about/about-page";
import Courses from "./pages/courses/courses-page";
import Books from "./pages/books/books-page";
import Shop from "./pages/shop/shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="/" component={<Home/>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/books" element={<Books />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
