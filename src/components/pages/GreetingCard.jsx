import React, { useState } from "react";
import styled from "styled-components";
import flowers from "../../utils/flowers";

function GreetingCardModal({ onClose }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [from, setFrom] = useState("");
  const [bouquet, setBouquet] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && message && from && bouquet) {
      const personalizedGreeting = `To: ${name}\nMessage: ${message}\nFrom: ${from}\nSelected Bouquet: ${bouquet}`;
      setGreeting(personalizedGreeting);
    } else {
      setGreeting("Please fill in all the fields.");
    }
  };

  // Create an array of bouquet names for the dropdown
  const bouquetOptions = flowers.map((flower) => flower.name);

  return (
    <ModalWrapper>
      <ModalContent>
        <h3>Greeting Card</h3>
        <h5>Let's create the message for your gift</h5>
        <form onSubmit={handleSubmit}>
          <label htmlFor="bouquet">Select a Bouquet:</label>
          <select
            id="bouquet"
            value={bouquet}
            onChange={(e) => setBouquet(e.target.value)}
            required
          >
            <option value="">Select a bouquet</option>
            {bouquetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <label htmlFor="name">To:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <label htmlFor="from">From:</label>
          <input
            type="text"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />

          <button type="submit">Generate Greeting</button>
        </form>
        <div id="greeting-output">
          {greeting.split("\n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <button onClick={onClose}>Close</button>
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
`;

const ModalContent = styled.div`
  max-width: 400px;
  padding: 20px;
  text-align: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;

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

  #greeting-output {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
  }
`;

export default GreetingCardModal;
