import styled from "styled-components";
import { useEffect, useState } from "react";
import GreetingCard from "./GreetingCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "react-router-dom";
import axios from "../../utils/axiosInstance";

function Success() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("session_id"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState(
    "Your payment has been successfully processed."
  );
  const [payment, setPayment] = useState();

  const openModal = () => {
    setIsModalOpen(true);
    setMessage(
      "Greeting Card added successfully. Thank you for purchasing, we hope to see you again soon!"
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const getData = async (session_id) => {
    try {
      const response = await axios.get(
        `/api/payments/success?session_id=${session_id}`
      );
      console.log(response.data);
      setPayment(response.data.paymentSessionId);
    } catch (error) {
      console.error("Error retrieving payment data:", error);
    }
  };
  useEffect(() => {
    const stripePaymentId = searchParams.get("session_id");

    if (!stripePaymentId) return;
    console.log(stripePaymentId);

    //http://localhost:5000/api/payments/success?session_id=
    // retrieve details from API

    getData(stripePaymentId);
  }, [searchParams]);

  return (
    <Wrapper>
      <section>
        <div>
          <h3>
            {message.split(".").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </h3>
        </div>

        <div>
          <FontAwesomeIcon
            icon={faEnvelope}
            className="btn"
            onClick={openModal}
          />{" "}
          Personalize Your Greeting Card
          {isModalOpen && (
            <GreetingCard onClose={closeModal} paymentSessionId={payment} />
          )}
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
