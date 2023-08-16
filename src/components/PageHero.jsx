import { Link } from "react-router-dom";
import styled from "styled-components";

const PageHero = ({ title }) => {
  return (
    <WrapperHero>
      <Container>
        <h4>
          <Link to="/">Home </Link> > {title}
        </h4>
      </Container>
    </WrapperHero>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: 2rem;
  padding: 0 2rem;
`;

const WrapperHero = styled.section`
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-grey-8);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-grey-5);
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`;

export default PageHero;
