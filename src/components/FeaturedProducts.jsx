import { Link } from "react-router-dom";
import styled from "styled-components";
import flowers from "../utils/flowers.js";
import { FaEuroSign } from "react-icons/fa";

const FeaturedProducts = () => {
  const featuredFlowers = flowers.filter((flower) => flower.isFeatured);

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featuredFlowers.map((flower) => (
          <Link to={`/products/${flower.id}`} key={flower.id}>
            <div>
              <img src={flower.image} alt={flower.name} />
              <p>
                {flower.name}
                <span>
                  <FaEuroSign />
                  {flower.price}
                </span>
              </p>
            </div>
          </Link>
        ))}
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
