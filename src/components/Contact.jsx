import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Contact = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    telephone: '',
    message: '',
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <form className="contact" onSubmit={handleSubmit}>
        <h4>Contact Form</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={user.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={user.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        {/* telephone */}
        <div className="form-row">
          <label htmlFor="telephone" className="form-label">
            Telephone
          </label>
          <input
            type="telephone"
            className="form-input"
            id="telephone"
            value={user.telephone}
            onChange={handleChange}
            name="telephone"
          />
        </div>

        {/* message */}
        <div className="form-row">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <input
            type="textarea"
            className="form-input"
            id="message"
            value={user.message}
            onChange={handleChange}
            name="message"
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
