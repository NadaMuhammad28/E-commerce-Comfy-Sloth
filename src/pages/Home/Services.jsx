import ServicesSlider from "../../components/feturesSlider/ServicesSlider";
import "../../components/feturesSlider/slider.css";
const Services = () => {
  return (
    <section className="services-sec">
      <div className="container">
        <div className="services-sec-center">
          Our servieces
          <ServicesSlider />
        </div>
      </div>
    </section>
  );
};

export default Services;
