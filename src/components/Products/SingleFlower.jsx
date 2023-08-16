import { NavLink, useLoaderData } from "react-router-dom";
import {
  FaEuroSign,
  FaStar,
  FaPlusCircle,
  FaShoppingCart,
} from "react-icons/fa";
import { FaCircleCheck, FaCircleXmark, FaArrowLeftLong } from "react-icons/fa6";
import { PiFlowerFill } from "react-icons/pi";

import flowers from "../../utils/flowers";
import Counter from "./Counter";
import { dataCard } from "../../contexts/CartContextProvider";
import { numberOfItems } from "../../contexts/CounterContextProvider";
import { useContext } from "react";
import { useState } from "react";
import PageHero from "../PageHero";

const SingleFlower = () => {
  const flower = useLoaderData();
  const flObj = flower.reduce((acc, currentValue) => {
    acc = currentValue;
    return acc;
  }, {});

  const [addedToCart, setAddedToCart] = useState(false);
  const itemDetail = {};
  const { dispatch1 } = useContext(dataCard);
  const { number, handleDispatch } = useContext(numberOfItems);

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
  const alertStyle = {
    width: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const randomStr = () => {
    let str = "abcdefghijklmnopqrstuvwxyz";
    let newStr = "";
    for (let i = 0; i < str.length - 20; i++) {
      let index = Math.floor(Math.random() * str.length);
      newStr += str[index];
    }
    return newStr;
  };
  const addToBasket = {
    padding: "0.2rem 1rem",
    verticalAlign: "middle",
  };
  const addToCart = () => {
    try {
      itemDetail.id =
        Math.round(Math.random() * 919) + number.count + "_" + randomStr();
      itemDetail.item = flObj;
      itemDetail.count = number.count;
      dispatch1({ type: "ADD_TO_CART", flowerItem: itemDetail });
      setAddedToCart(true);
      setTimeout(() => {
        setAddedToCart(false);
      }, 1000);
      handleDispatch({ type: "res" });
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <PageHero title={"Flower Details"}></PageHero>
      <section className="container">
        <span className="d-flex justify-content-between align-items-center">
          <NavLink
            className="d-flex justify-content-center align-items-center"
            to="/products"
            style={{
              color: "hsl(210, 22%, 49%)",
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            <FaArrowLeftLong />
            <span>&nbsp;&nbsp;back to products</span>
          </NavLink>
          <NavLink
            className="d-flex justify-content-center align-items-center"
            to="/cart"
            style={{
              color: "hsl(210, 22%, 49%)",
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            <span>Check the Cart&nbsp;&nbsp;</span> <FaShoppingCart />
          </NavLink>
        </span>

        <div className="pt-5 pb-1">
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
                    <span style={{ color: "darkgray" }}>
                      &nbsp;{fl.category}
                    </span>
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
                  <h6 className="p-3 d-flex align-items-center bg-secondary-subtle rounded">
                    <span> COLORS &nbsp;&nbsp;</span>
                    {fl.color.map((c) => (
                      <span key={c}>
                        <span className="vr ms-2 me-2"></span>
                        <PiFlowerFill
                          style={{ color: `${c}`, fontSize: "1.9rem" }}
                        />
                      </span>
                    ))}
                  </h6>
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
        <div className="d-flex justify-content-center align-items-center">
          <span
            style={alertStyle}
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
            <span>item added to the cart!</span>
          </span>
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
    </>
  );
};

export const singleProductLoader = ({ params }) => {
  const { fid } = params;
  const singleFlower = flowers.filter((flower) => flower.id === Number(fid));
  return singleFlower;
};

export default SingleFlower;
