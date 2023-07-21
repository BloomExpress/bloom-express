import { useLoaderData } from "react-router-dom";
import {
  FaEuroSign,
  FaStar,
  FaPlusCircle,
  FaShoppingCart,
} from "react-icons/fa";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import flowers from "../../utils/flowers";
import Counter from "./Counter";
import { dataCard } from "../../contexts/CartContextProvider";
import { useContext } from "react";

const SingleFlower = () => {
  const flower = useLoaderData();
  const { state, dispatch } = useContext(dataCard);

  const headerStyle = {
    height: "3rem",
    verticalAlign: "middle",
    padding: "1rem",
    fontSize: "2rem",
  };
  const imgStyle = {
    width: "100%",
    height: "50vh",
    borderRadius: "0.25rem",
    objectFit: "cover",
  };
  const details = {
    textAlign: "left",
    margin: "auto",
  };

  const addToBasket = {
    padding: "0.2rem 1rem",
    verticalAlign: "middle",
  };
  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", flowerItem: flower });
  };

  return (
    <div className="container">
      <h2 style={headerStyle}>Flower Details</h2>
      <div className="pt-5 pb-5">
        {flower.map((fl) => (
          <div className="row" key={fl.id}>
            <div className="col-md-6">
              <figure
                className="figure shadow-lg mb-5 bg-white"
                style={imgStyle}
              >
                <img src={fl.image} alt="Img" className="" style={imgStyle} />
                <figcaption className="figure-caption bg-white p-2">
                  {fl.name}
                </figcaption>
              </figure>
            </div>
            <div className="col-md-6">
              <div
                className="p-4 shadow-sm bg-white rounded w-100"
                style={details}
              >
                <h3>{fl.name}</h3>
                <span style={{ display: "flex", marginBottom: "0.7rem" }}>
                  <FaStar style={{ fontSize: "1.2rem", color: "orange" }} />
                  <h6 style={{ marginBottom: "0px", fontSize: "1.2rem" }}>
                    &nbsp;{fl.customerReviews[0].rating}
                  </h6>
                  <span style={{ color: "darkgray" }}>
                    &nbsp;&nbsp;({fl.customerReviews[0].review})
                  </span>
                </span>

                <h4>
                  <span>{fl.price}</span>
                  <FaEuroSign
                    style={{ fontSize: "1.1rem", verticalAlign: "baseline" }}
                  />
                </h4>
                <p style={{ textAlign: "justify" }}>{fl.description}</p>
                <hr />
                <h6 style={{ marginBottom: "1rem" }}>
                  <span>Occasion:</span>
                  <span style={{ color: "darkgray" }}>&nbsp;{fl.category}</span>
                </h6>
                <p>
                  {fl.isAvailable ? (
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <FaCircleCheck
                        style={{ fontSize: "1.2rem", color: "lightgreen" }}
                      />
                      <span>&nbsp;available in stock</span>
                    </span>
                  ) : (
                    <span>
                      <FaCircleXmark
                        style={{ fontSize: "1.2rem", color: "red" }}
                      />
                      <span>&nbsp;not available in stock</span>
                    </span>
                  )}
                </p>
                <hr />
                <p className="p-3 bg-secondary-subtle rounded">
                  COLORS &nbsp;
                  {fl.color.map((c) => (
                    <span
                      key={c}
                      style={{
                        backgroundColor: `${c}`,
                        width: "1rem",
                        height: ".1rem",
                        padding: "0rem .5rem",
                        marginRight: "0.2rem",
                        borderRadius: "100%",
                      }}
                    ></span>
                  ))}
                </p>
                <p></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pb-5 d-flex justify-content-center align-items-center gap-5">
        <div className="d-flex">
          <Counter />
        </div>
        <div>
          <button
            style={addToBasket}
            className="btn btn-sm btn-info"
            onClick={addToCart}
          >
            <FaPlusCircle /> <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export const singleProductLoader = ({ params }) => {
  const { fid } = params;
  const singleFlower = flowers.filter((flower) => flower.id === Number(fid));
  return singleFlower;
};

export default SingleFlower;
