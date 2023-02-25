import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  loadStripe,
  // PaymentElement,
  // LinkAuthenticationElement,
  useStripe,
  useElements,
  CardElement,
  useUserContext,
  useCartContext,
  formatPrice,
  Elements,
} from "./index";
console.log(import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY);
const promise = loadStripe(import.meta.env.VITE_REACT_APP_STRIPE_PUBLIC_KEY);

//form
const CheckOutForm = () => {
  const { myUser } = useUserContext();
  const { cart, shipping_fee, totalPrice } = useCartContext();
  const navigate = useNavigate();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const createPaymentIntent = async () => {
    console.log("yarab");
    try {
      const body = JSON.stringify({ cart, totalPrice, shipping_fee });

      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",

        body,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      setClientSecret(data.clientSecret);
    } catch (error) {
      // console.log(error.response)
      console.error(error.message.response);
    }
  };
  ////////////////////////////////////////////////////////////////////

  useEffect(() => {
    createPaymentIntent();
    // eslint-disable-next-line
  }, []);

  const handleChange = async (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };
  const cardStyle = {
    layout: "tabs",
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  //
  return (
    <div>
      {succeeded ? (
        <article>
          <h4>Thank you</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirecting to home page shortly</h4>
        </article>
      ) : (
        <article>
          <h4>Hello, {myUser && myUser.name}</h4>
          <p>Your total is {formatPrice(totalPrice)}</p>
          <p>Test Card Number: 4242 4242 4242 4242</p>
        </article>
      )}
      <form id="payment-form" onSubmit={handleSubmit}>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button
          className="pay-stripe-checkout-btn"
          disabled={processing || disabled || succeeded}
          id="submit"
        >
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}
        {/* Show a success message upon completion */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            Stripe dashboard.
          </a>
          Refresh the page to pay again.
        </p>
      </form>
    </div>
  );
};
const StripeCheckOut = () => {
  const appearance = {
    theme: "stripe",
  };
  const options = {
    // clientSecret,
    appearance,
  };
  return (
    <section className="sec-wrapper checkout-wrapper">
      {/* <Elements stripe={promise} options={options}>
        <CheckOutForm />
      </Elements> */}
    </section>
  );
};

export default StripeCheckOut;
