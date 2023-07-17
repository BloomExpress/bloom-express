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
        <br />
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
      <section className="section-large">
        <h5>Contact</h5>
        <br />
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
      <section className="section-small">
        <h5>Follow Us</h5>
        <br />
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
        <br />
        <h5>
          &copy; {new Date().getFullYear()}
          <span>Bloom-Express. All rights reserved</span>
        </h5>
      </section>
    </Container>
  );
};

const Container = styled.footer`
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-navbar);
  text-align: center;

  .section-large {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;

    h5 {
      color: var(--clr-black);
      margin: 0.1rem;
      font-weight: 800;
      font-size: 1rem;
      margin-top: 2rem;
      text-transform: none;
      line-height: 1.25;

      &:last-child {
        margin-bottom: 0;
      }
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;

        &:before {
          content: "•";
          display: inline-block;
          color: var(--clr-white);
          margin-right: 0.5rem;
        }

        a {
          color: var(--clr-black);
          text-decoration: none;

          &:hover {
            color: var(--clr-black);
          }
        }
      }
    }
  }

  .section-small {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 1rem;

    h5 {
      color: var(--clr-white);
      margin: 0.1rem;
      font-weight: 600;
      text-transform: none;
      line-height: 1.25;
    }

    .social-icons {
      display: flex;

      li {
        margin: 0 0.5rem;

        a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--clr-black);
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: var(--clr-white);
          text-decoration: none;

          &:hover {
            background: var(--clr-grey-6);
          }

          i {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media (min-width: 776px) {
    flex-direction: column;
    justify-content: space-between;

    .section-large {
      margin-bottom: 1;
      justify-content: center;
      align-items: center;

      h5 {
        text-align: center;
      }
    }

    .section-small {
      align-items: center;
      margin-bottom: 0;
      h5 {
        font-size: 2rem;
      }
    }
  }
`;
export default Footer;
