import React, { useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const saveUserToSessionStorage = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  const readUserFromSessionStorage = () => {
    const user = sessionStorage.getItem("user");

    return user ? JSON.parse(user) : null;
  };

  const { loginWithRedirect, logout, user } = useAuth0();

  const [myUser, setMyUser] = useState(readUserFromSessionStorage());

  useEffect(() => {
    if (typeof user === "object" && !Array.isArray(user) && user !== null) {
      setMyUser(user);
      saveUserToSessionStorage(user);
    } else {
      sessionStorage.removeItem("user");
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
