// import { useState } from "react";
import { useReducer } from "react";
import doReduce from "../../reducers/doReducer";
import { FaPlus, FaMinus } from "react-icons/fa";

const Counter = () => {
  //   const [data, setData] = useState(0);
  const [state, dispatch] = useReducer(doReduce, { count: 1 });
  console.log(state.count);
  const increment = () => {
    // setData(data + 1);
    dispatch({ type: "inc" });
  };

  const decrement = () => {
    // setData(data - 1);
    dispatch({ type: "dec" });
  };

  const reset = () => {
    // setData(0);
    dispatch({ type: "res" });
  };

  const btnStyle = {
    padding: "0.2rem 1rem",
    verticalAlign: "middle",
    border: "none",
    backgroundColor: "white",
  };
  return (
    <>
      <button style={btnStyle} onClick={increment}>
        <FaPlus />
      </button>
      <p style={{ margin: "1rem" }}> {state.count}</p>
      <button style={btnStyle} onClick={decrement}>
        <FaMinus />
      </button>
      {/* <button onClick={reset}>Reset</button> */}
    </>
  );
};

export default Counter;
