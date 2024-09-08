import React from "react";
import Banner from "./components/banner/banner";
import { Amount } from "./components/amout/amout";
import { Courses } from "./components/courses/courses";
import Blog from "./components/blog/blog";

const Home = () => {
  return (
    <>
      <Banner />
      <Amount />
      <Courses />
      <Blog />
    </>
  );
};

export default Home;
