import React from "react";
import Banner from "./components/banner/banner";
import { Amount } from "./components/amout/amout";
import { Courses } from "./components/courses/courses";

const Home = () => {
  return (
    <>
      <Banner />
      <Amount />
      <Courses />
    </>
  );
};

export default Home;
