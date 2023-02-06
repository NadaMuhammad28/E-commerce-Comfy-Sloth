// import { Children } from "react";
import { useUserContext } from "../context/userContext";

const PrivateRoute = ({ children }) => {
  const {
    logout,
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    myUser,
  } = useUserContext();
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return children;
  } else {
    loginWithRedirect();
  }

  return <section className="private-redirect"></section>;
};

export default PrivateRoute;
