import styled from "styled-components";
import { Link } from "react-router-dom";
import heroImg1 from "../assets/flower-power.avif";
import heroImg2 from "../assets/flower-power2.avif";

const Home = () => {
  return (
    <main>
      <Hero />
    </main>
  );
};

export default Home;

const Hero = () => {
  return (             
    <Wrapper className="section-center">
      <article className="content">
        <h1>Bloom  <br/>
         Express</h1>
        <p>
          Welcome to our online flower store, where we bring the beauty of
          nature directly to your doorstep. At our store, we offer a unique
          service of delivering freshly cut flowers to our valued customers on a
          schedule that suits their needs. With us, you don't have to worry
          about limited space for growing flowers or maintaining a garden. Our
          mission is to provide you with the joy and vibrancy of seasonal
          flowers throughout the year.
        </p>
      <Link to="products" className="btn hero-btn">shop now</Link>
      </article>
      <article className="img-container">
        <img src={heroImg1} alt="bike with a basket of flowers" className="main-img" />
        <img src={heroImg2} alt="heart made with flowers" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 600px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 200px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;
