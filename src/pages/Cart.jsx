import { useCartContext } from "../context/CartContext";
import empty from "../assets/empty-bag.png";
import { Link } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2";
import "./cart.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// import FormatPrice from "../components/products/FormatPrice";
import { formatPrice } from "../utils/helpers";
const Cart = () => {
  const { cart, toggleAmount, totalPrice, shipping } = useCartContext();

  const increaseAmount = (id) => {
    toggleAmount(id, "INCREMENT");
  };
  const decreaseAmount = (id) => {
    toggleAmount(id, "DECREMENT");
  };
  const columns = [{ field: "name", width: 150, editable: false }];
  if (cart && cart.length < 1)
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

  return (
    <main className="sec-wrapper cart-pg-wrapper">
      <div className="container">
        <Grid2
          container
          spacing={{ xs: 3, sm: 1, md: 2 }}
          padding="0"
          direction={{ xs: "column", sm: "column", md: "row" }}
        >
          <Grid2 item md={8}>
            <div className="cart-list-wrapper">
              <Grid2
                container
                spacing={{ xs: 1, sm: 2 }}
                direction="column"
                padding={0}
              >
                {cart &&
                  cart.map((product) => {
                    return (
                      <Grid2 item xs={12}>
                        <div className="cart-item-wrapper">
                          <Grid2 container>
                            {/* image */}
                            <Grid2 item xs={3} lg={2}>
                              <Link to={`/products/${product.id}`}>
                                <img
                                  src={product.image}
                                  className="p-img-cart"
                                />
                              </Link>
                            </Grid2>
                            {/* name */}
                            <Grid2 item xs={4} sm={3} md={4}>
                              <div className="p-title-cart">
                                <h6>{product.name}</h6>
                                <p>
                                  {"color: "}
                                  <span
                                    style={{ background: product.color }}
                                  ></span>
                                </p>
                              </div>
                            </Grid2>
                            {/* amount */}
                            <Grid2 item xs={2}>
                              <div className="p-amount-container">
                                <div className="p-amount">
                                  <button
                                    onClick={() =>
                                      decreaseAmount(product.idColor)
                                    }
                                  >
                                    <AiOutlineMinus />
                                  </button>
                                  <span>{product.amount} </span>
                                  <button
                                    onClick={() =>
                                      increaseAmount(product.idColor)
                                    }
                                  >
                                    <AiOutlinePlus />
                                  </button>
                                </div>
                              </div>
                            </Grid2>
                            {/* subtotal */}
                            <Grid2 item xs={3}>
                              <small className="p-subtotal">
                                {formatPrice(product.price * product.amount)}
                              </small>
                            </Grid2>
                          </Grid2>
                        </div>
                        <hr className="p-bottom-border" />
                      </Grid2>
                    );
                  })}
              </Grid2>
            </div>
          </Grid2>

          {/* TOTAL */}
          <Grid2 item md={4} justifyContent={"center"} justifyItems={"center"}>
            <aside className="cart-price-details">
              <div className="reatil-price">
                <span>retail price</span>
                <h5> {formatPrice(totalPrice)}</h5>
              </div>
              <div className="shipping-fee">
                <span>Shipping fees</span>
                <h5> {formatPrice(shipping)}</h5>
              </div>

              <hr className="p-bottom-border " />

              <div className="order-total">
                <span>order total</span>
                <h5> {formatPrice(shipping + totalPrice)}</h5>
              </div>

              <Link className="btn shop-btn checkout-btn">to checkout</Link>
            </aside>
          </Grid2>
        </Grid2>
      </div>
    </main>
  );
};

export default Cart;
