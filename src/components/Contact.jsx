import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTiktok,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import contactbg1 from "../assets/contactbg1.png";
import PageHero from "./PageHero";
import jamal from "../assets/jamal.png";
import jime from "../assets/jime.jpeg";
import marko from "../assets/marko.jpeg";
import manolo from "../assets/manolo.jpeg";
import apiradee from "../assets/apiradee.jpeg";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a data object to send to the server
    const data = {
      firstName,
      lastName,
      email,
      message,
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/contacts/createContact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        // Contact created successfully, you can handle this accordingly
        alert(
          "Thank you for reaching out. We'll be in touch with you shortly."
        );
      } else {
        // Handle error here
        alert(
          "Oops! Something went wrong. We're on it and will fix the error. Thank you for bringing it to our attention."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle the error here
    }

    // Reset the form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main>
      <PageHero title="Contact" />
      <Wrapper>
        <div className="container py-5 gap-5">
          <div className="row">
            <div className="contact border col-md-6 d-flex flex-column justify-content-center align-items-center">
              <h1>Contact Us</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn">
                  Submit
                </button>
              </form>

              <div className="mt-4 py-4">
                <h2>Address</h2>
                <p>123 Main Street, City, Country</p>
                <p>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find us on Google Maps
                  </a>
                </p>
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d833115.1421612562!2d12.512323121739673!3d52.33392027009569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sen!2sde!4v1689325445609!5m2!1sen!2sde"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center">
              <div className="business border py-5">
                <h2>Bloom Express</h2>
                <p>
                  <a
                    href="mailto:bloomexpress2023@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Email: bloomexpress2023@gmail.com
                  </a>
                </p>
                <p>Telephone: +1 123-456-7890</p>
                <p>
                  <FontAwesomeIcon icon={faWhatsapp} />
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp: +1 123-456-7890
                  </a>
                </p>
                <div className="social-icons">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a
                    href="https://www.tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTiktok} size="2x" />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <h2>Our Team</h2>
                <div className="team-grid">
                  {/* Team Member 1 */}

                  <div className="team-member">
                    <TeamMemberCard>
                      <div className="team-member-image">
                        <img src={jime} alt="Jime's Photo" />
                      </div>
                      <h4>Jime Rowe</h4>
                      <p>Ingolstadt Store Manager</p>
                      <a
                        href="https://github.com/JimeRowe"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                      </a>
                    </TeamMemberCard>
                  </div>

                  {/* Team Member 2 */}
                  <div className="team-member">
                    <TeamMemberCard>
                      <div className="team-member-image">
                        <img src={apiradee} alt="Apiradee's Photo" />
                      </div>
                      <h4>Apiradee Haeusler</h4>
                      <p>Muldestausee</p>
                      <a
                        href="https://github.com/ApiradeeH"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                      </a>
                    </TeamMemberCard>
                  </div>

                  {/* Team Member 3 */}
                  <div className="team-member">
                    <TeamMemberCard>
                      <div className="team-member-image">
                        <img src={marko} alt="Marko's Photo" />
                      </div>
                      <h4>Marko Tertinek</h4>
                      <p>Leipzig Store Manager</p>
                      <a
                        href="https://github.com/MarkoTertinek"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                      </a>
                    </TeamMemberCard>
                  </div>

                  {/* Team Member 4 */}
                  <div className="team-member">
                    <TeamMemberCard>
                      <div className="team-member-image">
                        <img src={manolo} alt="Manolo's Photo" />
                      </div>
                      <h4>Manolos Cipi</h4>
                      <p>Berlin Store Manager</p>
                      <a
                        href="https://github.com/manoloscipi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                      </a>
                    </TeamMemberCard>
                  </div>

                  {/* Team Member 5 */}
                  {/* <div className="team-member">
                    <TeamMemberCard>
                      <div className="team-member-image">
                        <img src={jamal} alt="Jamal's Photo" />
                      </div>
                      <h4>Sayed Jamal Hussain Ahmadi</h4>
                      <p>Berlin Store Manager(A)</p>
                      <a
                        href="https://github.com/coderahmadi"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                      </a>
                    </TeamMemberCard>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;

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

  a {
    color: #397f84;
  }

  a:hover {
    color: var(--clr-red-light);
  }

  .social-icons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
  }

  .social-icons a {
    transition: transform 0.3s;
  }

  .social-icons a:hover {
    transform: scale(1.1);
  }

  .contact {
    background-color: var(--clr-primary-navbar);
  }

  .business {
    background-image: url(${contactbg1});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media screen and (max-width: 768px) {
    .business {
      margin-top: 2rem;
    }
  }
`;

const TeamMemberCard = styled.div`
  background-color: var(--clr-white);
  padding: 1.5rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);

  &:hover {
    box-shadow: var(--dark-shadow);
    transform: translateY(-5px);
  }

  img {
    height: 120px;
    width: 120px;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 70%;
  }

  h4 {
    margin-top: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
  }

  p {
    margin-top: 0.5rem;
    color: var(--clr-grey-3);
  }

  @media screen and (max-width: 768px) {
    padding: 1rem;
    text-align: center;

    img {
      height: 80px;
      width: 80px;
    }

    h4 {
      font-size: 1rem;
      margin-top: 0.5rem;
    }

    p {
      font-size: 0.8rem;
      margin-top: 0.3rem;
    }
  }

  @media screen and (max-width: 600px) {
    img {
      height: 60px;
      width: 60px;
    }

    h4 {
      font-size: 0.8rem;
      margin-top: 0.3rem;
    }

    p {
      font-size: 0.7rem;
      margin-top: 0.2rem;
    }
  }
`;

export default Contact;
