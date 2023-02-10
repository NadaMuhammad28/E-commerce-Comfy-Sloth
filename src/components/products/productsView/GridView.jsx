import Grid2 from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/helpers";

const GridView = ({ products }) => {
  return (
    <section>
      <Grid2 container spacing={{ xs: 2 }}>
        {products &&
          products.map((p) => {
            return (
              <Grid2 item sm={6} md={4}>
                <article key={p.id} className="featured-p-card gridview-p-card">
                  <Link to={`/products/${p.id}`} target="_blank">
                    <div className="p-card-img-container">
                      <img src={p.image} alt={p.name} />
                      <div className="featured-p-overlay"></div>
                    </div>
                  </Link>
                  <div className="featured-p-details">
                    <h6>{p.name} </h6>
                    <div className="featured-p-price">
                      <strong> {formatPrice(p.price)} </strong>
                    </div>
                  </div>
                </article>
              </Grid2>
            );
          })}
      </Grid2>
    </section>
  );
};

export default GridView;
