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
      domain="dev-8wlw1wgabp88xudf.us.auth0.com"
      clientId="Yywiuh57jsMuag7kVf2IlEXK4pG6HDDY"
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
