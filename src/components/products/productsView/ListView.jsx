import Grid2 from "@mui/material/Unstable_Grid2";
import { Link } from "react-router-dom";
import { formatPrice } from "../../../utils/helpers";

const ListView = ({ products }) => {
  return (
    <section>
      <Grid2 container spacing={{ xs: 2, md: 3 }} direction="column">
        {products &&
          products.map((p) => {
            return (
              <Grid2
                item
                xs={12}
                paddingLeft={{ xs: 0 }}
                paddingRight={{ xs: 0 }}
              >
                <article key={p.id} className="featured-p-card listview-p-card">
                  <div className="p-card-img-container">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="p-card-list-img"
                    />
                    <div className="featured-p-overlay"></div>
                  </div>
                  <div className="featured-p-details">
                    <h5>{p.name} </h5>
                    <div className="featured-p-price">
                      <strong> {formatPrice(p.price)} </strong>
                    </div>
                    <p>{p.description.substring(0, 150)}...</p>
                    <Link
                      to={`/products/${p.id}`}
                      target="_blank"
                      // className="btn"
                    >
                      Details
                    </Link>
                  </div>
                </article>
              </Grid2>
            );
          })}
      </Grid2>
    </section>
  );
};

export default ListView;
