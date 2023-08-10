import { useContext } from "react";
import { dataCard } from "../../contexts/CartContextProvider";
// import Counter from "./Counter";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import PageHero from "../PageHero";

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
  // const headerStyle = {
  //   height: "3rem",
  //   verticalAlign: "middle",
  //   padding: "1rem",
  //   fontSize: "2rem",
  // };

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

  return (
    <>
      <PageHero title="Cart Details" />
      <div className="container">
        {state.cart.length > 0 ? (
          <div className="hstack gap-3 p-3 d-flex justify-content-center">
            <span className="d-flex">
              ({state.cart.length})&nbsp;
              <h2 className="display-6 fs-5">items,</h2>
            </span>
            <span className="d-flex">
              <h2 className="display-6 fs-5">total amount = </h2>&nbsp;{" "}
              {totalCost}€
            </span>
            <span></span>
          </div>
        ) : (
          <div></div>
        )}

        <div className="w-100 d-flex justify-content-center align-items-center">
          <div
            style={{
              width: "30%",
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
            <span>Ok, Flower was deleted from cart!</span>
          </div>
        </div>

        {state.cart.length > 0 ? (
          state.cart.map((item, index) => (
            <div key={index} className="m-4 d-flex justify-content-center">
              <span
                style={{ width: "fit-content" }}
                className="d-flex justify-content-center align-items-center gap-3 flex-wrap p-4 shadow"
              >
                <h2 className="display-6 fs-5">
                  {index + 1}.&nbsp;&nbsp;&nbsp;
                </h2>
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
                <div className="bg-secondary-subtle p-2 d-flex justify-content-center align-items-center">
                  &nbsp;&nbsp;
                  <span>
                    {item.count}&nbsp;&nbsp;x&nbsp;&nbsp;{item.item.price}€
                  </span>
                  <span className="vr ms-3 me-3"></span>&nbsp;
                  <span
                    style={{
                      backgroundColor: `${item.selectedColor}`,
                      color: `${item.selectedColor}`,
                      verticalAlign: "middle",
                      paddingTop: "2px",
                      paddingLeft: "6px",
                      paddingRight: "6px",
                      paddingBottom: "1px",
                    }}
                  >
                    m
                  </span>
                  {/* <Counter isActive={item.item.isAvailable}/> */}
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
          <button className="btn btn-primary">continue checkout</button>
        </span>
        <br />
        <br />
      </div>
    </>
  );
};
export default Cart;
