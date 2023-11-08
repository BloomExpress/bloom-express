import React, { useState } from "react";
import styled from "styled-components";
import flowers from "../../utils/flowers";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function GreetingCard({ onClose }) {
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [bouquet, setBouquet] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message && from && bouquet) {
      const personalizedGreeting = `${message}\n ${from}\n`;
      setGreeting(personalizedGreeting);
    } else {
      setGreeting("Please fill in all the fields.");
    }
  };

  // Create an array of bouquet names for the dropdown
  const bouquetOptions = flowers.map((flower) => flower.name);

  return (
    <ModalWrapper>
      <ModalContent className="container p-0">
        <FormSection className="col-lg-6 col-md-8 col-sm-12 mx-auto p-4">
          <h4 className="text-center">Greeting Card</h4>
          <h5 className="text-center">
            Let's create the message for your gift
          </h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="bouquet" className="form-label">
                Select a Bouquet:
              </label>
              <select
                id="bouquet"
                className="form-select"
                value={bouquet}
                onChange={(e) => setBouquet(e.target.value)}
                required
                size={3}
              >
                <option value="">Select a bouquet</option>
                {bouquetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="message">Gift Message:</label>
              <textarea
                id="message"
                value={message}
                placeholder="Dear [Name],
                [Your Message]
                Love,"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="from" className="form-label">
                From:
              </label>
              <input
                type="text"
                id="from"
                className="form-control"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
              />
            </div>

            <button className="hero-btn" type="submit">
              Generate Greeting
            </button>
          </form>
        </FormSection>

        <MessageOutput className="col-lg-6 col-md-4 col-sm-12 text-center p-4">
          <img src={logo} alt="Bloom Express" />
          {greeting.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </MessageOutput>
        <CloseButton onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
          <CloseText>Close</CloseText>
        </CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 175px;
    margin-left: -15px;
    max-width: 100%;
    margin-top: 20px;
  }
  .hero-btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    background-color: var(--clr-primary-button);
    color: var(--clr-grey-1);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
  }

  .hero-btn:hover {
    background-color: #397f84;
    color: var(--clr-white);
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  max-width: 800px;
  background-color: var(--clr-primary-navbar);
  border: 1px solid #ccc;
  border-radius: 5px;
  @media (min-width: 300px) and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    max-height: 100vh;
  }
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  background-color: #f0f0f0;
  label {
    display: block;
    margin-top: 10px;
  }
  textarea {
    width: 100%;
    height: 100px;
  }
  button {
    margin-top: 10px;
  }
  @media (max-width: 376px) {
    padding: 5px;
    label {
      margin-top: 5px;
    }
    textarea {
      height: 80px;
    }
    button {
      margin-top: 5px;
    }
  }
  @media (max-width: 320px) {
    padding: 2px;
    label {
      margin-top: 2px;
    }
    textarea {
      height: 70px;
    }
    button {
      margin-top: 2px;
    }
  }
`;
const MessageOutput = styled.div`
  flex: 1;
  margin: 20px;
  padding: 30px;
  font-size: 15px;
  font-weight: bold;
  @media (max-width: 576px) {
    justify-content: center;
    align-items: center;
  }
`;
const CloseButton = styled.div`
  position: relative;
  top: 15px;
  right: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  font-size: 12px;
  svg {
    font-size: 18px;
  }
`;

const CloseText = styled.span`
  font-size: 0.75rem;
  margin-top: 0.25rem;
  &:hover {
    color: var(--clr-primary-hover);
  }
`;

export default GreetingCard;
