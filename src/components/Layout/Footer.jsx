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
      <section>
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
        </ul>
      </section>
      <section>
        <h5>Contact</h5>
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
          <li>
            <a href="#">Feedback</a>
          </li>
        </ul>
      </section>
      <section>
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
      <section>
        <h5>
          &copy; {new Date().getFullYear()}
          <span>Bloom-Expert.All rights reserved </span>
        </h5>
      </section>
    </Container>
  );
};

const Container = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;

    h5 {
      color: var(--clr-white);
      margin: 0.1rem;
      font-weight: 400;
      text-transform: none;
      line-height: 1.25;
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

          &:hover {
            color: var(--clr-primary-5);
          }
        }
      }
    }

    .social-icons {
      display: flex;

      li {
        margin: 0 0.5rem;

        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--clr-white);
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: var(--clr-primary-5);
          text-decoration: none;

          &:hover {
            background: var(--clr-primary-6);
          }

          i {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media (min-width: 776px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Footer;
