import React, { useState } from 'react';
import styled from 'styled-components';

function GreetingCard() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && message) {
      const personalizedGreeting = `Dear, ${name}! ${message}`;
      setGreeting(personalizedGreeting);
    } else {
      setGreeting('Please fill in your name and message.');
    }
  };

  return (
    <CardWrapper>
      <h3>Greeting Card</h3>
      <h5>Let's create the message for your gift</h5>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Generate Greeting</button>
      </form>
      <div id="greeting-output">{greeting}</div>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  .card {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

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

export default GreetingCard;
