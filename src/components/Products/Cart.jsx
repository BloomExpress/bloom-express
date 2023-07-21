import { useContext } from "react";
import { dataCard } from "../../contexts/CartContextProvider";

const Cart = () => {
  const headerStyle = {
    height: "3rem",
    verticalAlign: "middle",
    padding: "1rem",
    fontSize: "2rem",
  };

  const imgStyle = {
    width: "300px",
    height: "200px",
  };
  const { state, dispatch } = useContext(dataCard);
  return (
    <div className="container">
      <h2 style={headerStyle}>Flower Details</h2>
      {console.log("state: ", state.cart)}
      {state.cart.length > 0 ? (
        state.cart.map((item, index) => (
          <div className="row" key={index}>
            <div className="col-md-3">
              <figure className="figure">
                <img
                  src={item.image}
                  style={imgStyle}
                  className="figure-img img-fluid rounded"
                  alt={item.category + "/" + item.name}
                />
                <figcaption className="figure-caption text-center">
                  {item.name}
                </figcaption>
              </figure>
            </div>
            <div className="col-md-3"></div>
            <div className="col-md-3"></div>
          </div>
        ))
      ) : (
        <div>item not found</div>
      )}
    </div>
  );
};
export default Cart;
