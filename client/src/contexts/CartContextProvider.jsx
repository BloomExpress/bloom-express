import { createContext, useReducer, useEffect } from "react";

import { cartReducer } from "../reducers/cartReducer";

export const dataCard = createContext(null);
const initialValue = {
  cart: [],
};

// const getCartFromSessionStorage = () => {
//   const cart = sessionStorage.getItem("cart");

//   return cart ? JSON.parse(cart) : initialValue;
// };

function CartContextProvider({ children }) {
  const [state, dispatch1] = useReducer(cartReducer, initialValue);

  // useEffect(()=>{
  //   sessionStorage.setItem("cart", JSON.stringify(state));
  // },[state])
  return (
    <dataCard.Provider value={{ state, dispatch1 }}>
      {children}
    </dataCard.Provider>
  );
}
export default CartContextProvider;
