
import { Link } from "react-router-dom";
import styled from "styled-components";


const PageHero = ({ title }) => {
    return (
      <WrapperHero>
        <div className="section-center">
          <h4>
            <Link to="/">Home</Link> {title}
          </h4>
        </div>
      </WrapperHero>
    );
  };
  
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
  `;


  export default PageHero;