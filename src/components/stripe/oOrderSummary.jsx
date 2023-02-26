import { useCartContext } from "../../context/CartContext";
import { formatPrice } from "../../utils/helpers";

const OrderSummary = () => {
  const { cart, totalPrice, shipping_fee } = useCartContext();
  console.log(cart);
  return (
    <div className="order-summary-wrapper ">
      <header className="checkout-header">
        <h5>order summary</h5>
      </header>

      <div className="order-wrapper">
        {cart &&
          cart.map((item) => {
            return (
              <div className="d-flex-col order-item-container" key={item.id}>
                <article className="d-flex ">
                  <img src={item.image} alt={item.name} className="order-img" />

                  <div className="order-item-info">
                    <h6>{item.name}</h6>
                    <p className="d-flex">
                      <span>color:</span>
                      <span
                        className="order-item-clr"
                        style={{ backgroundColor: item.color }}
                      ></span>
                    </p>
                    <p>
                      {formatPrice(item.price)}
                      <span>
                        <small>{" x"} </small>
                        <strong>{item.amount}</strong>
                      </span>
                    </p>
                  </div>
                </article>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default OrderSummary;
