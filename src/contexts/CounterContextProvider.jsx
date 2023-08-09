import { createContext, useReducer } from "react";
import countReduce from "../reducers/countReducer";

export const numberOfItems = createContext(1);
const count = 0;

const CounterContextProvider = ({ children }) => {
  const [number, handleDispatch] = useReducer(countReduce, count);
  return (
    <numberOfItems.Provider value={{ number, handleDispatch }}>
      {children}
    </numberOfItems.Provider>
  );
};
export default CounterContextProvider;
