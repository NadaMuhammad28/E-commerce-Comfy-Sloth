import { useCartContext } from "../../context/CartContext";
import { formatPrice } from "../../utils/helpers";

const OrderSummary = () => {
  const { cart, totalPrice, shipping_fee } = useCartContext();
  console.log(cart);
  return (
    <aside className="order-summary-wrapper ">
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
                    <p className="order-item-price">
                      <p> {formatPrice(item.price)} </p>
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
        <div>
          <div className="reatil-price">
            <span>retail price</span>
            <h5> {formatPrice(totalPrice)}</h5>
          </div>
          <div className="shipping-fee">
            <span>Shipping fees</span>
            <h5> {formatPrice(shipping_fee)}</h5>
          </div>

          <hr className="p-bottom-border " />

          <div className="order-total">
            <span>order total</span>
            <h5> {formatPrice(shipping_fee + totalPrice)}</h5>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default OrderSummary;
