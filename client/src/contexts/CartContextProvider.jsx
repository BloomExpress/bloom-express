import { createContext, useReducer } from "react";

import { cartReducer } from "../reducers/cartReducer";

export const dataCard = createContext(null);
const initialValue = {
  cart: [],
};

function CartContextProvider({ children }) {
  const [state, dispatch1] = useReducer(cartReducer, initialValue);
  return (
    <dataCard.Provider value={{ state, dispatch1 }}>
      {children}
    </dataCard.Provider>
  );
}
export default CartContextProvider;