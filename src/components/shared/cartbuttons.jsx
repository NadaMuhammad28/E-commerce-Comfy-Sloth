import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useUserContext } from "../../context/userContext";
const NavBtns = () => {
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
      <Link to="cart">{totalAmount}</Link>
      <button onClick={loginWithRedirect}>login</button>

      <button onClick={() => logout({ returnTo: window.location.origin })}>
        logout
      </button>
    </div>
  );
};

export default NavBtns;
