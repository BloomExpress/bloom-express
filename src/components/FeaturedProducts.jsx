import { Link } from "react-router-dom";
import styled from "styled-components";
import bouquet1 from "../assets/bouquet1.png";
import bouquet2 from "../assets/bouquet2.png";
import bouquet3 from "../assets/bouquet3.png";
import bouquet4 from "../assets/bouquet4.png";
import bouquet5 from "../assets/bouquet5.png";
import bouquet6 from "../assets/bouquet6.png";

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
        <div>
          <img src={bouquet5} alt="..." />
          <p>19 Aug</p>
        </div>
        <div>
          <img src={bouquet6} alt="..." />
          <p>20 Aug</p>
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

  img:hover {
    opacity: 1;
    transform: scale(1.1);
  }

  p {
    margin-top: 2rem;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
