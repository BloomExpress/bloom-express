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
import { useState } from "react";

const SingleFlower = () => {
  const [addedToCart, setAddedToCart] = useState(false);
  const flower = useLoaderData();
  const flObj = flower.reduce((acc, currentValue) => {
    acc = currentValue;
    return acc;
  }, {});
  console.log("FLG:", flObj);
  const { state, dispatch1 } = useContext(dataCard);

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
    dispatch1({ type: "ADD_TO_CART", flowerItem: flObj });
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  return (
    <section className="container">
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
                    <span key={c}>
                      <span
                        style={{
                          backgroundColor: `${c}`,
                          verticalAlign: "middle",
                          paddingTop: "3px",
                          paddingLeft: "4px",
                          paddingRight: "4px",
                          paddingBottom: "1px",
                          borderRadius: "100%",
                        }}
                      >
                        <input type="radio" value={c} required name="color" />
                      </span>
                      <span className="vr ms-2 me-2 mt-2"></span>
                    </span>
                  ))}
                </p>
                <p></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </symbol>
      </svg>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <div
          style={{
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={
            addedToCart
              ? "alert alert-success alert-dismissible fade show"
              : "alert-dismissible fade"
          }
          role="alert"
        >
          <svg
            className="bi flex-shrink-0 me-2"
            width="16"
            height="16"
            role="img"
            aria-label="Success:"
          >
            <use xlinkHref="#check-circle-fill" />
          </svg>
          <span>Success, Flower was added to the cart!</span>
        </div>
      </div>

      <div className="pb-5 d-flex justify-content-center align-items-center gap-5">
        <div className="d-flex">
          <Counter isActive={flObj.isAvailable} />
        </div>
        <button
          type="button"
          style={addToBasket}
          className={
            flObj.isAvailable ? "btn btn-sm btn-info" : "btn btn-sm disabled"
          }
          onClick={addToCart}
          id="liveAlertBtn"
        >
          <FaPlusCircle /> <FaShoppingCart />
        </button>
      </div>
    </section>
  );
};

export const singleProductLoader = ({ params }) => {
  const { fid } = params;
  const singleFlower = flowers.filter((flower) => flower.id === Number(fid));
  return singleFlower;
};

export default SingleFlower;
