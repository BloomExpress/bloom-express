import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const Newsletter = () => {
  const [state, handleSubmit] = useForm("xeqbokjw");
  if (state.succeeded) {
    return <p>Thank you for joining our magical flower family!</p>;
  }
  return (
    <Wrapper className="section">
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            We understand that arranging flowers can be a daunting task,
            especially if you're new to it. That's why we're here to help! If
            you have no idea how to arrange the flowers in your vase, don't
            worry. We provide a comprehensive guideline and step-by-step example
            pictures to help you manage your flower vase like a pro.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="enter your email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: 10vh;
  padding: 15rem 1rem;
  background-color: var(--clr-primary-lightpink);

  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 50rem;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 100%;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
    width: 100%;
    box-sizing: border-box;
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-button);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
    background-color: var(--clr-primary-hover);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Newsletter;
