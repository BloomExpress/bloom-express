import { useUserContext } from "../contexts/user_context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaUserPlus, FaShoppingCart, FaUserMinus } from "react-icons/fa";
import { useContext } from "react";
import { dataCard } from "../contexts/CartContextProvider";

const Login = () => {
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const { state } = useContext(dataCard);

  const handleLogout = () => {
    const defaultReturnUrl =
      process.env.NODE_ENV === "development"
        ? window.location.origin + "/"
        : "https://bloom-express.onrender.com/";

    let returnUrl;

    try {
      const path = state.purchaseSuccess
        ? "/success?session_id=" + state.sessionId
        : "/cancel";

      returnUrl = "https://bloom-express.onrender.com" + path;
    } catch (error) {
      console.error("Error constructing logout URL", error);
      returnUrl = defaultReturnUrl;
    }

    console.log("Logout: returnUrl", returnUrl);

    logout({ returnTo: returnUrl })
      .then(() => console.log("Logout success"))
      .catch((error) => console.error("Logout error", error));
  };

  return (
    <Wrapper>
      {myUser && (
        <Link to="/cart" aria-label="Go to cart page" className="cart-btn">
          Cart
          <span className="cart-container">
            <FaShoppingCart />
            {state.cart.length > 0 ? (
              <span className="cart-value">{state.cart.length}</span>
            ) : (
              <span></span>
            )}
          </span>
        </Link>
      )}

      {myUser ? (
        <button type="button" className="auth-btn" onClick={handleLogout}>
          Logout <FaUserMinus />
        </button>
      ) : (
        <button type="button" className="auth-btn" onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    justify-items: center;

    .cart-btn {
      font-size: 1rem;
      align-items: flex-start;
    }

    .cart-container {
      svg {
        height: 1rem;
      }
    }

    .auth-btn {
      font-size: 1rem;
    }
  }
`;

export default Login;
