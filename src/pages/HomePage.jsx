import Services from "../components/Home/Services";
import "./home.css";
import Intro from "../components/Home/Intro";
import NewsLetter from "../components/Home/NewsLetter";
import React from "react";
import FeaturedProducts from "../components/Home/featuredProducts";
const Home = () => {
  return (
    <>
      <Intro />
      <FeaturedProducts />
      <Services />
      <NewsLetter />
    </>
  );
};

export default Home;
