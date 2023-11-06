import styled from "styled-components";
import { Link } from "react-router-dom";

function Cancel() {
  return (
    <Wrapper>
      <section>
        <h3>Sorry to see you cancelled your Stripe payment!</h3>
        <Link to="/" className="btn">
          Continue shopping on our website
        </Link>
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
`;
export default Cancel;
