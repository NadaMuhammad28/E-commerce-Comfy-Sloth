import Services from "./Services";
import "./home.css";
import Intro from "./Intro";
const Home = () => {
  return (
    <>
      <Intro />
      <section className="sec-2"></section>

      <Services />

      <section className="sec-4"></section>
      <section className="sec-5"></section>
    </>
  );
};

export default Home;
