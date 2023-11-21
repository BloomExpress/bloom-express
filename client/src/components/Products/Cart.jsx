import { useContext } from "react";
import { dataCard } from "../../contexts/CartContextProvider";
import { PiFlowerFill } from "react-icons/pi";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import PageHero from "../PageHero";
import flowers from "../../utils/flowers.js";
import styled from "styled-components";

const Cart = () => {
  const { state, dispatch1 } = useContext(dataCard);
  const [deletedFromCart, setDeletedFromCart] = useState(false);
  const handleDeleteClick = (itemId) => {
    dispatch1({ type: "REMOVE_FROM_CART", flowerItem: itemId });
    setDeletedFromCart(true);
    setTimeout(() => {
      setDeletedFromCart(false);
    }, 1000);
  };
  const totalCost = state.cart.reduce((acc, cartItem) => {
    acc += cartItem.count * cartItem.item.price;
    return acc;
  }, 0);

  const imgStyle = {
    width: "150px",
    height: "110px",
    objectFit: "center",
  };
  items: flowers.items;
  const dividerStyle = {
    height: "7rem",
    marginTop: "1.1rem",
  };

  const trashIconStyle = {
    color: "#B20001",
    fontSize: "1.4rem",
  };

  const checkout = async () => {
    const line_items = state.cart.map((item) => ({
      price: item.item.sid,
      quantity: item.count,
    }));
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/payments/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ line_items }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.url) {
          window.location.assign(responseData.url); // Forwarding user to Stripe
        }
      } else {
        console.error("Failed to create payment session:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating payment session:", error);
    }
  };

  return (
    <Wrapper>
      <PageHero title="Cart Details" />
      <div className="container">
        {state.cart.length > 0 ? (
          <div className="gap-3 p-3 d-flex justify-content-center">
            <span className="d-flex">
              ({state.cart.length})&nbsp;
              <h2 className="display-6 fs-5">items,</h2>
            </span>
            <span className="d-flex">
              <h2 className="display-6 fs-5">total amount = </h2>&nbsp; €
              {totalCost.toFixed(2)}
            </span>
            <span></span>
          </div>
        ) : (
          <div></div>
        )}

        <div className="w-100 d-flex justify-content-center align-items-center">
          <div
            style={{
              width: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={
              deletedFromCart
                ? "alert alert-danger alert-dismissible fade show"
                : "alert-dismissible fade"
            }
            role="alert"
          >
            <svg
              className="bi flex-shrink-0 me-2"
              width="16"
              height="16"
              role="img"
              aria-label="Danger:"
            >
              <use xlinkHref="#check-circle-fill" />
            </svg>
            <span>item deleted from cart!</span>
          </div>
        </div>

        {state.cart.length > 0 ? (
          state.cart.map((item, index) => (
            <div key={index} className="m-4 d-flex justify-content-center">
              <span
                style={{ width: "fit-content" }}
                className="d-flex justify-content-center align-items-center gap-3 flex-wrap p-4 shadow"
              >
                <figure className="figure">
                  <figcaption className="figure-caption text-center">
                    {item.item.name}
                  </figcaption>
                  <img
                    src={item.item.image}
                    style={imgStyle}
                    className="figure-img rounded"
                    alt={item.category + "/" + item.name}
                  />
                </figure>
                <div className="vr" style={dividerStyle}></div>
                <div className="bg-secondary-subtle p-3 d-flex flex-column justify-content-center">
                  <span>
                    &nbsp;&nbsp;{item.count}&nbsp;&nbsp;x&nbsp;&nbsp; €
                    {item.item.price}&nbsp;
                  </span>
                  <hr />
                  <span>
                    {item.item.color.map((c) => (
                      <span key={c}>
                        <span className="ms-2 me-2"></span>
                        <PiFlowerFill
                          style={{ color: `${c}`, fontSize: "1.9rem" }}
                        />
                      </span>
                    ))}
                  </span>
                </div>
                <div className="vr" style={dividerStyle}></div>
                <div>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => handleDeleteClick(item.id)}
                  >
                    <FaTrash style={trashIconStyle} />
                  </button>
                </div>
              </span>
            </div>
          ))
        ) : (
          <div>Cart is empty!</div>
        )}
        <hr />
        <span>
          <button
            variant="success"
            onClick={checkout}
            className="btn btn-primary"
          >
            continue checkout
          </button>
        </span>
        <br />
        <br />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  background: var(--clr-primary-background);
`;
export default Cart;
