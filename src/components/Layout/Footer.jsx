import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Container>
      <section className="section-large">
        <h5>About Us</h5>
        <ul>
          <li>
            <a href="#">Company Information</a>
          </li>
          <li>
            <a href="#">History</a>
          </li>
          <li>
            <a href="#">Delivery Methods</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
        </ul>
      </section>
      <section className="section-large">
        <h5>Contact</h5>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Customer Support</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </section>
      <section className="section-small">
        <h5>Follow Us</h5>
        <ul className="social-icons">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </section>
      <section className="section-large">
        <h5>Customer Service</h5>
        <ul>
          <li>
            <a href="#">Track Order</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </section>
      <section className="section-large">
        <h5>
          &copy; {new Date().getFullYear()} Bloom-Express. All rights reserved
        </h5>
      </section>
    </Container>
  );
};

const Container = styled.footer`
  min-height: 10rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--clr-navbar);
  padding: 3rem;

  .section-large {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    h5 {
      color: var(--clr-white);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          color: var(--clr-white);
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: var(--clr-grey-6);
          }
        }
      }
    }
  }

  .section-small {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    h5 {
      color: var(--clr-white);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      margin-top: 0.5rem;

      li {
        margin-right: 1rem;

        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--clr-white);
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: var(--clr-black);
          text-decoration: none;
          transition: background-color 0.3s;

          &:hover {
            background-color: var(--clr-grey-6);
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;

    .section-large,
    .section-small {
      width: 100%;
      max-width: 30rem;
    }

    .newsletter-form {
      flex-direction: column;

      input {
        border-radius: 0.25rem 0.25rem 0 0;
      }

      button {
        border-radius: 0 0 0.25rem 0.25rem;
      }
    }
  }
`;

export default Footer;
