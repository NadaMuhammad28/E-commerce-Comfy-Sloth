import { useState } from "react";
import TextField from "@mui/material/TextField";
import StripeCheckOut from "./StripeCheckOut";
import OrderSummary from "./oOrderSummary";

const AddressDetails = () => {
  const [details, setDetails] = useState({
    name: "",
    mobileNumber: "",
    city: "",
    email: "",
    address: "",
    floornumber: "",
    flatnumber: "",
  });

  const [isFilled, setIsfilled] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    details.email &&
    details.name &&
    details.city &&
    details.flatnumber &&
    details.floornumber &&
    details.mobileNumber &&
    details.address
      ? setIsfilled(false)
      : setIsfilled(true);
    console.log(details);
  };

  return (
    <section className="sec-wrapper ">
      <div className="container ">
        <div className="d-flex wrapper aside-form">
          <div className=" d-flex-col checkout-wrapper">
            <article className="del-info-wrapper">
              <header className="checkout-header">
                <h5>delivery information</h5>
              </header>
              <form
                onSubmit={handleSubmit}
                className="del-info-form"
                onChange={handleChange}
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  size="small"
                  name="name"
                  value={details.name}
                  // //onChange={(e) => handleChange(e)}
                  className="del-input"
                />

                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  size="small"
                  name="email"
                  value={details.email}
                  // onChange={(e) => handleChange(e)}
                  className="del-input"
                />

                <TextField
                  id="outlined-basic"
                  label="Mobile Number"
                  variant="outlined"
                  size="small"
                  name="mobileNumber"
                  value={details.mobileNumber}
                  // onChange={(e) => handleChange(e)}
                  className="del-input"
                />

                <TextField
                  id="outlined-basic"
                  label="City"
                  variant="outlined"
                  size="small"
                  name="city"
                  value={details.city}
                  // onChange={(e) => handleChange(e)}
                  className="del-input"
                />

                <TextField
                  id="outlined-basic"
                  label="Address"
                  variant="outlined"
                  size="small"
                  name="address"
                  value={details.address}
                  //onChange={(e) => handleChange(e)}
                  className="del-input"
                />

                <TextField
                  id="outlined-basic"
                  label="Floor Number"
                  variant="outlined"
                  size="small"
                  name="floornumber"
                  value={details.floornumber}
                  //onChange={(e) => handleChange(e)}
                  className="del-input"
                />

                <TextField
                  id="outlined-basic"
                  label="Flat Number"
                  variant="outlined"
                  size="small"
                  name="flatnumber"
                  value={details.flatnumber}
                  //onChange={(e) => handleChange(e)}
                  className="del-input"
                />
                <div>
                  {/* <button className="" disabled={isFilled}>
                  k
                </button> */}
                </div>
              </form>
            </article>
            <StripeCheckOut isAddress={!isFilled} />
          </div>

          <OrderSummary />
        </div>
      </div>
    </section>
  );
};

export default AddressDetails;
