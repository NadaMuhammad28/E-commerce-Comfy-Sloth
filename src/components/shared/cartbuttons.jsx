import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useUserContext } from "../../context/userContext";
import { BsFillCartFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { useState } from "react";

const NavBtns = () => {
  const [authOptions, setAuthOptions] = useState("auth-options-wrapper");
  const {
    logout,
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    myUser,
  } = useUserContext();
  const { totalAmount } = useCartContext();
  return (
    <div className="nav-btns">
      <Link to="cart">
        <BsFillCartFill /> <span>{totalAmount}</span>
      </Link>

      {isAuthenticated ? (
        <button
          className="acc-btn"
          onClick={() =>
            authOptions === "auth-options-wrapper"
              ? setAuthOptions(
                  "auth-options-wrapper auth-options-wrapper-clicked"
                )
              : setAuthOptions("auth-options-wrapper")
          }
        >
          <FaUserAlt /> <span> {user.given_name} </span>
        </button>
      ) : (
        <button onClick={loginWithRedirect}>login</button>
      )}

      <ul className={authOptions}>
        <li>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            <FiLogOut /> logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NavBtns;
