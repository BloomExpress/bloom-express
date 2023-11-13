import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./contexts/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
import CartContextProvider from "./contexts/CartContextProvider.jsx";
import CounterContextProvider from "./contexts/CounterContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-ezirzi43py2t1ip3.us.auth0.com"
    clientId="BSzR1PyS4JC6950ej4qaWBky1xRYGQ1F"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <React.StrictMode>
        <CartContextProvider>
          <CounterContextProvider>
            <App />
          </CounterContextProvider>
        </CartContextProvider>
      </React.StrictMode>
    </UserProvider>
  </Auth0Provider>
);
