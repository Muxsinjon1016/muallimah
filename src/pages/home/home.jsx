import React from "react";
import Banner from "./components/banner/banner";
import { Amount } from "./components/amout/amout";
import Coursess from "./components/courses/courses";
import { About } from "./components/about/about";
import Blog from "./components/blog/blog";
import { Book } from "./components/book/book";
import { Shop_clouth } from "./components/shop/clouth_shop";
import Feedback from "./components/feedback/feedback";

const Home = () => {
  return (
    <>
      <Banner />
      <Amount />
      <Coursess />
      <About/>
      <Blog />
      <Book/>
      <Shop_clouth/>
      <Feedback />
    </>
  );
};

export default Home;
