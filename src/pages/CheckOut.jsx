import EmptyCart from "../components/Cart/emptyCart";
import StripeCheckOut from "../components/stripe/StripeCheckOut";
import { useCartContext } from "../context/CartContext";
import "../components/stripe/checkout.css";
const CheckOut = () => {
  const { cart } = useCartContext();

  return (
    <main>{cart && cart.length < 1 ? <EmptyCart /> : <StripeCheckOut />}</main>
  );
};

export default CheckOut;
