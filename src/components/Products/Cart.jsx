import { useContext } from "react";
import { dataCard } from "../../contexts/CartContextProvider";
import Counter from "./Counter";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const headerStyle = {
    height: "3rem",
    verticalAlign: "middle",
    padding: "1rem",
    fontSize: "2rem",
  };

  const imgStyle = {
    width: "150px",
    height: "110px",
    objectFit: "center",
  };

  const dividerStyle = {
    height: "7rem",
    marginTop: "1.1rem",
  };

  const trashIconStyle = {
    color: "#B20001",
    fontSize: "1.4rem",
  };
  const { state, dispatch1 } = useContext(dataCard);
  return (
    <div className="container">
      <h2 style={headerStyle}>Flower Details</h2>
      <hr />
      total:1
      <hr />
      {console.log("state: ", state.cart)}
      {state.cart.length > 0 ? (
        state.cart.map((item, index) => (
          <div key={index}>
            <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
              <figure className="figure">
                <figcaption className="figure-caption text-center">
                  {item.name}
                </figcaption>
                <img
                  src={item.image}
                  style={imgStyle}
                  className="figure-img rounded"
                  alt={item.category + "/" + item.name}
                />
              </figure>
              <div className="vr" style={dividerStyle}></div>
              <div>
                <Counter />
              </div>
              <div className="vr" style={dividerStyle}></div>
              <div>
                <FaTrash style={trashIconStyle} />
              </div>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <div>item not found</div>
      )}
    </div>
  );
};
export default Cart;
