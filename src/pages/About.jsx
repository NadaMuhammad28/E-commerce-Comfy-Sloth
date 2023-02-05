import about from "../assets/hero-bcg.jpeg";
import bg from "../assets/aboutBG.jpg";
import Loader from "../components/shared/Loade";
const About = () => {
  if (!bg) return <Loader />;
  return (
    <main className="about-sec">
      <header
        className="about-header"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="abt-overlay">
          <h2>About us</h2>
          <hr className="title-header-underline" />
        </div>
      </header>
      <article className="about-content">
        <div className="container">
          <div className="our-story">
            <img src={about} alt="" />

            <article className="abt-story-content">
              <div className="about-sec2-title">
                <h2>our story</h2>
                <hr className="underline" />
              </div>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                accusantium sapiente tempora sed dolore esse deserunt eaque
                excepturi, delectus error accusamus vel eligendi, omnis beatae.
                Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                dolore, obcaecati incidunt sequi blanditiis est exercitationem
                molestiae delectus saepe odio eligendi modi porro eaque in
                libero minus unde sapiente consectetur architecto. Ullam rerum,
                nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed
                quos similique amet. Ex, voluptate accusamus nesciunt totam
                vitae esse iste.
              </p>
            </article>
          </div>
        </div>
      </article>
    </main>
  );
};

export default About;
