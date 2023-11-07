import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from "../utils/axiosInstance";
const Newsletter = () => {
  const [state, handleSubmit] = useForm("xeqbokjw");
  const [showPopup, setShowPopup] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);
  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("hasSeenPopup", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const subscribe = async (email) => {
    try {
      const response = await axios.post("/api/users/subscribe", {
        email,
      });
      if (response.status === 200) {
        setSubscriptionStatus("success");
        console.log("Subscription successful");
      } else {
        setSubscriptionStatus("error");
        console.error("Subscription failed");
      }
    } catch (error) {
      setSubscriptionStatus("error");
      console.error(
        "Error occurred while making the subscription request",
        error
      );
    }
  };
  return (
    <>
      {showPopup && (
        <PopupWrapper>
          <Wrapper className="section">
            <CloseButton onClick={handleClosePopup}>
              <FontAwesomeIcon icon={faTimes} />
              <CloseText>Close</CloseText>
            </CloseButton>
            <div className="section-center">
              {subscriptionStatus === "success" ? (
                <ThankYouMessage>
                  <h3>Thank you for joining our magical flower family!</h3>
                </ThankYouMessage>
              ) : subscriptionStatus === "error" ? (
                <ErrorMessage>
                  User not found. You are not registered yet.
                </ErrorMessage>
              ) : (
                <>
                  <h3>Join our newsletter and get 20% off</h3>
                  <div className="content">
                    <p>
                      Our newsletter opens the door to a world of floral wonder.
                      <ul>
                        <li>
                          🌸 <strong>Bouquet of the Month:</strong> Be the first
                          to discover our stunning, love-crafted bouquets.
                        </li>
                        <li>
                          🌻 <strong>Exclusive Discounts:</strong> Enjoy special
                          offers and seasonal savings.
                        </li>
                        <li>
                          🌺 <strong>Floral Tips:</strong> Learn the secrets of
                          vibrant, lasting flowers.
                        </li>
                      </ul>
                      Don't miss out—subscribe today! 🌼
                    </p>
                    <form
                      className="contact-form"
                      onSubmit={(e) => {
                        e.preventDefault(); // Prevent default form submission
                        subscribe(e.target.email.value); // Call subscribe function with the entered email
                      }}
                    >
                      <input
                        type="email"
                        name="email" // Change name to "email"
                        className="form-input"
                        placeholder="enter your email"
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                      <button type="submit" className="submit-btn">
                        subscribe
                      </button>
                      {state.submitting && <div>Submitting...</div>}
                    </form>
                  </div>
                </>
              )}
            </div>
          </Wrapper>
        </PopupWrapper>
      )}
    </>
  );
};
const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.section`
  min-height: 10vh;
  padding: 15rem 1rem;
  background-color: var(--clr-primary-lightpink);
  border: 10px double white;
  position: relative;
  max-width: 1200px;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 50rem;
    margin-left: 1.5rem;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 100%;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
    width: 100%;
    box-sizing: border-box;
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-button);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
    background-color: var(--clr-primary-hover);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--clr-black);
  display: flex;
  flex-direction: column;
  align-items: center;
  &:focus {
    outline: none;
  }
  /* Position at the bottom on mobile screens */
  @media (max-width: 480px) {
    right: 50px;
    top: 150px;
  }
  @media (max-width: 320px) {
    max-width: 80%;
    right: 40px;
    top: 180px;
    padding: 0.75rem;
    font-size: 0.9rem;
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
    }
    .form-input,
    .submit-btn {
      font-size: 0.9rem;
    }
  }
`;
const CloseText = styled.span`
  font-size: 0.75rem;
  margin-top: 0.25rem;
  &:hover {
    color: var(--clr-primary-hover);
  }
`;
const ThankYouMessage = styled.span`
  font-size: 1rem;
  color: white;
  background-color: black;
  text-align: center;
  margin-top: 2rem;
`;
const ErrorMessage = styled.span`
  font-size: 1rem;
  color: red;
  text-align: center;
  margin-top: 2rem;
`;
export default Newsletter;
