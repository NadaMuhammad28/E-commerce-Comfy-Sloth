import {
  loadStripe,
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
  CardElement,
  axios,
  useUserContext,
  useCartContext,
  formatPrice,
  Elements,
} from "./index";
const promise = loadStripe(import.meta.VITE_REACT_APP_STRIPE_PUBLIC_KEY);
const CheckOutForm = () => {
  return <h1>hello check out</h1>;
};
const StripeCheckOut = () => {
  return (
    <main>
      <Elements stripe={promise}>
        <CheckOutForm />
      </Elements>
    </main>
  );
};

export default StripeCheckOut;
