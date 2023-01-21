import Services from "./Services";
import "./home.css";
import Intro from "./Intro";
import NewsLetter from "./NewsLetter";
import FeaturedProducts from "./featuredProducts";
const Home = () => {
  return (
    <>
      <Intro />
      <FeaturedProducts />
      {/* <Services /> */}
      <NewsLetter />

      <section className="sec-4"></section>
      <section className="sec-5"></section>
    </>
  );
};

export default Home;
