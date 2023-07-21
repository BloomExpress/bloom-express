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
              <p
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <span>{flower.name}</span>
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
    justify-content: center;
    align-items: center;

    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
      border-radius: var(--radius);
      transition: filter 0.3s ease, transform 0.3s ease;
    }
  }

  img:hover {
    filter: brightness(1.2);
    transform: scale(1.1);
  }

  p {
    margin-top: 2rem;
  }

  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
`;

export default FeaturedProducts;
