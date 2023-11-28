import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useUserContext } from "../contexts/user_context";

const PrivateRoute = ({ children }) => {
  const { myUser } = useUserContext();
  if (!myUser) {
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
