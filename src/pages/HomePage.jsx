import Services from "../components/Home/Services";
import "./home.css";
import Intro from "../components/Home/Intro";
import NewsLetter from "../components/Home/NewsLetter";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FeaturedProducts from "../components/Home/FeaturedProducts";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
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
