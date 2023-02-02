import Services from "./Services";
import "./home.css";
import Intro from "./Intro";
import NewsLetter from "./NewsLetter";
import React from "react";
import FeaturedProducts from "./featuredProducts";
const Home = () => {
  return (
    <>
      <Intro />
      <FeaturedProducts />
      {/* <Services /> */}
      <NewsLetter />
    </>
  );
};

export default Home;
