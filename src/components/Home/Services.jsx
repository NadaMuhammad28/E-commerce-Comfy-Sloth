import Grid2 from "@mui/material/Unstable_Grid2";
import { services } from "../../utils/constants";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <section className="services-sec ">
      <div className="container ">
        <div className="serv-sec-wrapper">
          <header>
            <Grid2 container spacing={{ xs: 3 }}>
              <Grid2 item md={6}>
                <h3>
                  custom furniture <br />
                  built only for you
                </h3>
              </Grid2>
              <Grid2
                item
                md={6}
                container
                alignItems="center"
                justifyContent="center"
              >
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  quisquam saepe id reiciendis sunt, repudiandae libero amet rem
                  quia quod?
                </p>
              </Grid2>
            </Grid2>
          </header>

          <div className="serv-cards-wrapper">
            <Grid2 container spacing={{ xs: 3, md: 4 }}>
              {services &&
                services.map((card, index) => {
                  let { Icon, title, text, id } = card;
                  return (
                    <Grid2 item md={4} key={id}>
                      <article
                        className="serv-card"
                        data-aos="fade-up"
                        data-aos-delay={index * 10 + 100}
                      >
                        <span className="serv-icon">
                          <Icon />
                        </span>
                        <h4>{title}</h4>
                        <p>{text}</p>
                      </article>
                    </Grid2>
                  );
                })}
            </Grid2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
