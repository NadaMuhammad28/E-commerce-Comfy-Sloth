import React from "react";
//Toast msg
import { ToastContainer, toast, Flip } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
//email validator
import { validate } from "react-email-validator";
//form service
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import Grid2 from "@mui/material/Unstable_Grid2";

const NewsLetter = () => {
  const [state, handleSubmit] = useForm("xyyazlar");
  const [validatorMsg, setValidatorMsg] = useState(null);
  //Subscribed toast
  const notify = () =>
    toast.success("Subscribed!", {
      position: "top-right",
      autoClose: 4000,
      transition: Flip,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  //handle email validation and form submit
  const handlevalidation = (e) => {
    e.preventDefault();
    const isValid = validate(e.target[0].value);
    if (isValid) {
      setValidatorMsg(null);
      notify();
      return handleSubmit(e);
    } else {
      setValidatorMsg("invalid email");
    }
  };

  return (
    <section className="contact-section ">
      <div className="container">
        <div className="contact-section-wrapper">
          <h3 data-aos="fade-right"> Join our newsletter and get 20% off</h3>
          <div className="contact-form-wrapper">
            <Grid2
              container
              spacing={{ xs: 5, sm: 4, md: 2 }}
              direction={{ xs: "column", md: "row" }}
            >
              <Grid2 item md={6}>
                <p data-aos="fade-right">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat sint unde quaerat ratione soluta veniam provident
                  adipisci cumque eveniet tempore?
                </p>
              </Grid2>
              <Grid2 item md={6}>
                <form onSubmit={handlevalidation} data-aos="fade-left">
                  <input
                    type="text"
                    placeholder="enter email"
                    name="email"
                    id="email"
                  />
                  <button disabled={state.submitting}> subscribe</button>
                </form>
              </Grid2>
            </Grid2>
            <span
              className={
                validatorMsg
                  ? "email-validator-msg"
                  : "email-validator-msg email-validator-msg-none"
              }
            >
              <BiErrorCircle />
              {validatorMsg}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
