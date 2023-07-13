import styled from "styled-components";
import { Link } from "react-router-dom";
import error from "../assets/error.png";

const NotFound = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <img src={error} alt="error404" />
        <h3>Sorry, look like we sent you to the wrong way</h3>
        <Link to="/" className="btn">
          Let us guide you back!
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
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
`;

export default NotFound;
