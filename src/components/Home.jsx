import styled from "styled-components";
import { Link } from "react-router-dom";
import heroImg1 from "../assets/flower-power.avif";
import heroImg2 from "../assets/flower-power2.avif";
import NewsletterModal from "./NewsletterModal";
import FeaturedProducts from "./FeaturedProducts";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <NewsletterModal />
    </main>
  );
};

export default Home;

const Hero = () => {
  return (
    <Wrapper className="section-center mt-5">
      <article className="content mt-3">
        <h1>
          Nurture Moments, Inspire with
          <br />
          Blooms.
        </h1>
        <p>
          Welcome to our online flower store, where we bring the beauty of
          nature directly to your doorstep. At our store, we offer a unique
          service of delivering freshly cut flowers to our valued customers on a
          schedule that suits their needs. With us, you don't have to worry
          about limited space for growing flowers or maintaining a garden. Our
          mission is to provide you with the joy and vibrancy of seasonal
          flowers throughout the year.
        </p>
        <Link to="products" className="btn hero-btn">
          Shop Now
        </Link>
      </article>
      <article className="img-container">
        <img
          src={heroImg1}
          alt="A bicycle with a basket of different flower bouquets on the back."
          className="main-img"
        />
        <img
          src={heroImg2}
          alt="Two hands holding up a flowers bouquet in the shape of a heart on a light pink background"
          className="accent-img"
        />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100%;
  min-height: 100vh;
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
      background-color: var(--clr-primary-button);
      color: var(--clr-grey-1);
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      cursor: pointer;
      transition: var(--transition);
    }

    .hero-btn:hover {
      background-color: #397f84;
      color: var(--clr-white);
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
      width: 250px;
      transform: translateX(-60%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 25%;
      height: 80%;
      background: var(--clr-primary-darkpink);
      bottom: 0%;
      left: -25%;
      border-radius: var(--radius);
    }
  }
`;
