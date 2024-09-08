import React from "react";
import Banner from "./components/banner/banner";
import { Amount } from "./components/amout/amout";
import { Courses } from "./components/courses/courses";
import { About } from "./components/about/about";
import { Book } from "./components/book/book";

const Home = () => {
  return (
    <>
      <Banner />
      <Amount />
      <Courses />
      <About/>
      <Book/>
    </>
  );
};

export default Home;
