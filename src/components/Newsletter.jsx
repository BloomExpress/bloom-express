import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
  const [state, handleSubmit] = useForm("xeqbokjw");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem("hasSeenPopup", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
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
              {state.succeeded ? (
                <ThankYouMessage>
                  <h3>Thank you for joining our magical flower family!</h3>
                </ThankYouMessage>
              ) : (
                <>
                  <h3>Join our newsletter and get 20% off</h3>
                  <div className="content">
                    <p>
                      We understand that arranging flowers can be a daunting
                      task, especially if you're new to it. That's why we're
                      here to help! If you have no idea how to arrange the
                      flowers in your vase, don't worry. We provide a
                      comprehensive guideline and step-by-step example pictures
                      to help you manage your flower vase like a pro.
                    </p>
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <input
                        type="email"
                        name="name"
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
                      {state.errors.length > 0 && (
                        <ThankYouMessage>
                          Error occurred while submitting the form.
                        </ThankYouMessage>
                      )}
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

export default Newsletter;
