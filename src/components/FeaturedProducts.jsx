import { Link } from "react-router-dom";
import styled from "styled-components";
import bouquet1 from "../assets/bouquet1.png";
import bouquet2 from "../assets/bouquet2.png";
import bouquet3 from "../assets/bouquet3.png";
import bouquet4 from "../assets/bouquet4.png";

const FeaturedProducts = () => {
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        <div>
          <img src={bouquet1} alt="..." />
          <p>16 Aug</p>
        </div>
        <div>
          <img src={bouquet2} alt="..." />
          <p>16 Aug</p>
        </div>
        <div>
          <img src={bouquet3} alt="..." />
          <p>17 Aug</p>
        </div>
        <div>
          <img src={bouquet4} alt="..." />
          <p>18 Aug</p>
        </div>
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2rem;
    img {
      width: 220px;
      height: 300px;
      object-fit: cover;
      border-radius: var(--radius);
      transition: var(--transition);
      opacity: 0.7;
    }
  }
  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    background-color: var(--clr-button);
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

  img:hover {
    opacity: 1;
  }

  .underline {
    width: 6rem;
    height: 0.25rem;
    background: #49a6e9;
    background: var(--clr-primary-hover);
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
