import { useContext } from "react";
import { numberOfItems } from "../../contexts/CounterContextProvider";
import { FaPlus, FaMinus } from "react-icons/fa";

const Counter = ({ isActive }) => {
  const { number, handleDispatch } = useContext(numberOfItems);
  const increment = () => {
    handleDispatch({ type: "inc" });
  };

  const decrement = () => {
    handleDispatch({ type: "dec" });
  };

  const btnStyle = {
    padding: "0.2rem 1rem",
    verticalAlign: "middle",
    border: "none",
    backgroundColor: "white",
  };
  return (
    <>
      <button
        style={btnStyle}
        onClick={decrement}
        className={!isActive ? "btn disabled" : ""}
      >
        <FaMinus />
      </button>
      <p style={{ margin: "1rem" }}> {isActive ? number.count : 0}</p>
      <button
        style={btnStyle}
        className={!isActive ? "btn disabled" : ""}
        onClick={increment}
      >
        <FaPlus />
      </button>
      {/* <button onClick={reset}>Reset</button> */}
    </>
  );
};

export default Counter;
