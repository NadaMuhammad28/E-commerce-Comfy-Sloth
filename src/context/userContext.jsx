import React, { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const USerCon = React.createContext();
const UserContext = ({ children }) => {
  const { logout, user, isAuthenticated, isLoading, loginWithRedirect } =
    useAuth0();
  const [myUSer, setMyUSer] = useState(null);
  console.log(("loding", isLoading));
  return (
    <USerCon.Provider
      value={{
        logout,
        user,
        isAuthenticated,
        isLoading,
        loginWithRedirect,
        myUSer,
      }}
    >
      {children}
    </USerCon.Provider>
  );
};

const useUserContext = () => {
  return useContext(USerCon);
};

export { UserContext, USerCon, useUserContext };
