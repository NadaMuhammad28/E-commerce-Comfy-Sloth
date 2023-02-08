import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

import { ProductsContext } from "./context/ProductsContect";
import { NavContext } from "./context/NavContext";
import { CartContext } from "./context/CartContext";
import { UserContext } from "./context/userContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_REACT_APP_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_REACT_APP_AUTH_CLIENT_ID}
      cacheLocation="localstorage"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <UserContext>
        <ProductsContext>
          <CartContext>
            <NavContext>
              <App />
            </NavContext>
          </CartContext>
        </ProductsContext>
      </UserContext>
    </Auth0Provider>
  </React.StrictMode>
);
