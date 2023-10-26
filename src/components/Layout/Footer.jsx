import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebook,
  faTiktok,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TermsAndConditionsModal from "../TermsAndConditions";
import FaqModal from "../Faq";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFaqModal, setShowFaqModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleFaqModal = () => {
    setShowFaqModal(!showFaqModal);
  };

  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container>
      <FooterContent>
        <section className="section-large">
          <h5>Products</h5>
          <ul>
            <li>
              <Link to="/products">Our Products</Link>
            </li>
            <li>
              <Link to="/cart">Your Cart</Link>
            </li>
          </ul>
        </section>
        <section className="section-large">
          <h5>About Us</h5>
          <ul>
            <Link to="/about">Our History</Link>
            <li>
              <a href="#" onClick={toggleModal}>
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleFaqModal}>
                FAQs
              </a>
            </li>
          </ul>
        </section>

        <section className="section-large">
          <h5>Contact</h5>
          <ul>
            <Link to="/contact">Contact Us</Link>
            <li>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                Customer Support
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "#ffffff" }}
                />
              </a>
            </li>
          </ul>
        </section>
        <section className="section-small">
          <h5>Follow Us</h5>
          <ul className="social-icons">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTiktok} style={{ color: "#ffffff" }} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </section>

        {showBackToTop && (
          <section>
            <BackToTopLink href="#top" onClick={handleBackToTop}>
              Back to Top
              <FontAwesomeIcon icon={faArrowUpFromBracket} size="lg" />
            </BackToTopLink>
          </section>
        )}
        <TermsAndConditionsModal
          isOpen={showModal}
          onRequestClose={toggleModal}
        />

        {showBackToTop && (
          <section>
            <BackToTopLink href="#top" onClick={handleBackToTop}>
              Back to Top
              <FontAwesomeIcon icon={faArrowUpFromBracket} size="lg" />
            </BackToTopLink>
          </section>
        )}
        <FaqModal isOpen={showFaqModal} onRequestClose={toggleFaqModal} />
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} Bloom-Express. All rights reserved
      </Copyright>
    </Container>
  );
};

const Container = styled.footer`
  min-height: 10rem;
  background: var(--clr-primary-navbar);
  padding: 3rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;

  .section-large {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    text-align: center;
    border-left: 2px solid var(--clr-white);
    padding-left: 2rem;
    margin-left: 3em;

    h5 {
      color: var(--clr-white);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

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

  .section-small {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    text-align: center;
    border-left: 2px solid var(--clr-black);
    padding-left: 2rem;
    margin-left: 5rem;
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

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    text-align: center;

    .section-large,
    .section-small {
      width: 100%;
      max-width: 30rem;
      margin-left: 0;
      padding-left: 0;
    }

    .section-large:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const BackToTopLink = styled.a`
  color: white;
  padding: 8px 15px;
  font-size: 1rem;
  text-decoration: none;
  display: flex;
  align-items: flex-end;
  gap: 5px;
  transition: transform 0.3s;
  position: fixed;
  bottom: 30px;
  right: 30px;

  &:hover {
    color: #397f84;
    transform: scale(1.05);
  }

  svg {
    color: white;

    &:hover {
      color: #397f84;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    bottom: 10px;
    transform: translateX(-50%);
  }
`;

const Copyright = styled.p`
  color: var(--clr-white);
  text-align: center;
  margin: 2rem 0;

  @media (max-width: 768px) {
    order: 1;
  }
`;

export default Footer;
