import { useEffect } from "react";
import { useNavigate } from "react-router";
import Loader from "../components/shared/Loade";
const Error = () => {
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
    <section className="sec-wrapper" style={{ minHeight: "100vh" }}>
      <div className="container">
        <article
          className="d-flex-col"
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <h2
            style={{
              textTransform: "capitalize",
              fontWeight: "900",
              fontSize: "5rem",
            }}
          >
            {" "}
            404
          </h2>
          <span style={{ textTransform: "capitalize" }}>
            this page is not found, You're being redirected to home.
          </span>
          <span>
            <Loader style={{ width: "50%", height: "10vh !important" }} />
          </span>
        </article>
      </div>
    </section>
  );
};

export default Error;
