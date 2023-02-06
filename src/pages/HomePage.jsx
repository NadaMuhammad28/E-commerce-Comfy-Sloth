import Services from "../components/Home/Services";
import "./home.css";
import Intro from "../components/Home/Intro";
import NewsLetter from "../components/Home/NewsLetter";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import Featured from "../components/Home/featuredProducts";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <>
      <Intro />
      {/* <Temp /> */}
      {/* <Featured /> */}
      <Services />
      <NewsLetter />
    </>
  );
};

export default Home;
