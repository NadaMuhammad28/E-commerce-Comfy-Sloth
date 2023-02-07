import empty from "../../assets/empty-bag.png";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <main className="sec-wrapper empty-cart-wrapper">
      <div className="container">
        <div className="wrapper empty-cart">
          <img src={empty} />
          <h4>your cart is empty</h4>
          <p>Get yourself some new comfy furniture.</p>

          <Link className="btn shop-btn" to="/products">
            start shopping now
          </Link>
        </div>
      </div>
    </main>
  );
};

export default EmptyCart;
