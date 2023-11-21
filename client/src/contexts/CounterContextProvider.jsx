import { createContext, useReducer } from "react";
import countReduce from "../reducers/countReducer";

export const numberOfItems = createContext(1);
const initialState = {
  count: 1,
};

const CounterContextProvider = ({ children }) => {
  const [number, handleDispatch] = useReducer(countReduce, initialState);
  return (
    <numberOfItems.Provider value={{ number, handleDispatch }}>
      {children}
    </numberOfItems.Provider>
  );
};
export default CounterContextProvider;
