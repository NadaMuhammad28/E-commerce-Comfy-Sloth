import { useEffect } from "react";
import { useNavigate } from "react-router";
import Loader from "../shared/Loade";

const ORderDone = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <section className="sec-wrapper">
      <div className="container">
        <article
          className="d-flex-col"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <h2 style={{ textTransform: "capitalize" }}> order Placed!</h2>
          <span style={{ textTransform: "capitalize" }}>
            you're being redirected to HomePage
          </span>
          <span style={{ width: "50%" }}>
            <Loader />
          </span>
        </article>
      </div>
    </section>
  );
};

export default ORderDone;
