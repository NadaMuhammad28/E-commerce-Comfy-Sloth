import { useState } from "react";
import { validate } from "react-email-validator";
import { BiErrorCircle } from "react-icons/bi";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Grid2 from "@mui/material/Unstable_Grid2";

const NewsLetter = () => {
  const [state, handleSubmit] = useForm("xyyazlar");

  // if (state.succeeded) setValidatorMsg("thanks for joining!");
  const [validatorMsg, setValidatorMsg] = useState(null);
  const handlevalidation = (e) => {
    e.preventDefault();
    const isValid = validate(e.target[0].value);
    isValid ? setValidatorMsg(null) : setValidatorMsg("invalid email");
    if (isValid) return handleSubmit(e);
  };
  return (
    <section className="contact-section ">
      <div className="container">
        <div className="contact-section-wrapper">
          <h3> Join our newsletter and get 20% off</h3>
          <div className="contact-form-wrapper">
            <Grid2
              container
              spacing={2}
              direction={{ xs: "column", md: "row" }}
            >
              <Grid2 item md={6}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat sint unde quaerat ratione soluta veniam provident
                  adipisci cumque eveniet tempore?
                </p>
              </Grid2>
              <Grid2 item md={6}>
                <form onSubmit={handlevalidation}>
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
            <span className="email-validator-msg">{validatorMsg}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
