import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();
  if (!user) {
    alert(
      "Please log in to access the shopping cart. Have you already logged in?"
    );
    return (
      <>
        <Navigate to="/" />
      </>
    );
  }
  return children;
};

export default PrivateRoute;
