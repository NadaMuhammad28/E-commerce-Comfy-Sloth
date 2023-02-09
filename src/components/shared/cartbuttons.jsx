import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useUserContext } from "../../context/userContext";
import { FiLogOut } from "react-icons/fi";
import { FaUser, FaShoppingCart, FaUserPlus } from "react-icons/fa";
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
    <div className="nav-btns d-flex ">
      <Link to="cart" className="nav-cart-btn">
        <FaShoppingCart /> <span>{totalAmount}</span>
      </Link>

      {isAuthenticated ? (
        <button
          className="acc-btn d-flex"
          onClick={() =>
            authOptions === "auth-options-wrapper"
              ? setAuthOptions(
                  "auth-options-wrapper auth-options-wrapper-clicked"
                )
              : setAuthOptions("auth-options-wrapper")
          }
        >
          <FaUser />
          <span className="nav-auth-btn-log">
            {user.given_name && user.given_name}
          </span>
        </button>
      ) : (
        <button className="acc-btn d-flex" onClick={loginWithRedirect}>
          <span className="nav-auth-btn-log"> sign in </span>
          <FaUserPlus />
        </button>
      )}
      <div className={authOptions}>
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className="d-flex nav-logout-btn"
        >
          <FiLogOut /> logout
        </button>
      </div>
    </div>
  );
};

export default NavBtns;
