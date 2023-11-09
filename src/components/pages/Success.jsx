import styled from "styled-components";
import { useState } from "react";
import GreetingCard from "./GreetingCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome here
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Success() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState(
    "Your payment has been successfully processed."
  );
  const openModal = () => {
    setIsModalOpen(true);
    setMessage("Thank you for purchasing, we hope to see you again soon!");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Wrapper>
      <section>
        <h3>{message}</h3>

        <div>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="btn"
            onClick={openModal}
          />{" "}
          Personalize Your Greeting Card
          {isModalOpen && <GreetingCard onClose={closeModal} />}
        </div>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.main`
  height: 80vh;
  width: 100%;
  background: var(--clr-primary-background);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    background-color: var(--clr-primary-button);
    color: var(--clr-grey-1);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
  }
  .btn:hover {
    background-color: #397f84;
    color: var(--clr-white);
  }
  .link-container {
    margin-top: 20px; /* Add margin to separate the button and link */
  }
`;

export default Success;
