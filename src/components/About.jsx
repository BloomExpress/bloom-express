import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import aboutImg from "../assets/bouquet.avif";
import { Link } from "react-router-dom";
import gridImg1 from "../assets/about-grid1.avif";
import gridImg2 from "../assets/about-grid2.avif";
import gridImg3 from "../assets/about-grid3.avif";
import gridImg4 from "../assets/about-grid4.avif";
import gridImg5 from "../assets/about-grid5.avif";
import gridImg6 from "../assets/about-grid6.avif";
import gridImg7 from "../assets/about-grid7.avif";
import gridImg9 from "../assets/about-grid9.avif";
import gridImg10 from "../assets/about-grid10.avif";
import gridImg11 from "../assets/about-grid11.avif";
import gridImg12 from "../assets/about-grid12.avif";

const About = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="bouquet" />
        <article>
          <div className="title">
            <h2>About Us</h2>
            <div className="underline"></div>
          </div>
          <p>
            In the ever-evolving world of technology and convenience, Lily and
            Rose realized that their love for flowers could touch the lives of
            people beyond the boundaries of their town. They decided to embark
            on a new venture by opening an online flower shop called "Bloom
            Express."
          </p>
          <p>
            With their expertise and passion, Lily and Rose meticulously curated
            an online collection of exquisite bouquets, elegant floral
            arrangements, and thoughtful gift packages. Their aim was to create
            an immersive virtual experience, where customers could explore the
            vast array of blooms from the comfort of their homes.
          </p>
          <p>
            The website boasted an intuitive interface, allowing visitors to
            effortlessly browse through different categories, occasions, and
            flower types. Each product was accompanied by stunning photographs
            that captured the essence of its beauty. To ensure the highest
            quality, Lily and Rose partnered with local flower growers,
            personally selecting the finest and freshest blooms for every order.
          </p>
        </article>
      </Wrapper>
      <AboutGridGallery />
    </main>
  );
};

const Wrapper = styled.section`
  height: auto;
  display: grid;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default About;

const PageHero = ({ title }) => {
  return (
    <WrapperHero>
      <div className="section-center">
        <h4>
          <Link to="/">Home</Link> > {title}
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

const AboutGridGallery = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <h3 className="text-center my-5">
          "Embrace the Magic of Blooms in our Picturesque Garden."
        </h3>
        <div className="col-md-6 col-lg-4">
          <div className="row mb-3">
            <img src={gridImg1} alt="grid1" className="img-fluid" />
          </div>
          <div className="row mt-3">
            <img src={gridImg2} alt="grid2" className="img-fluid" />
          </div>
          <div className="row mt-5">
            <img src={gridImg6} alt="grid6" className="img-fluid" />
          </div>
          <div className="row mt-3">
            <img src={gridImg11} alt="grid11" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="row mt-5">
            <img src={gridImg5} alt="grid5" className="img-fluid" />
          </div>
          <div className="row mt-5">
            <img src={gridImg7} alt="grid7" className="img-fluid" />
          </div>
          <div className="row mt-3">
            <img src={gridImg10} alt="grid10" className="img-fluid" />
          </div>
          <div className="row mt-5 mb-5">
            <img src={gridImg12} alt="grid12" className="img-fluid" />
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="row mb-3">
            <img src={gridImg4} alt="grid4" className="img-fluid" />
          </div>
          <div className="row mb-3">
            <img src={gridImg3} alt="grid3" className="img-fluid" />
          </div>
          <div className="row mb-3">
            <img src={gridImg9} alt="grid9" className="img-fluid" />
          </div>
        </div>
      </div>
      <Link to="products" className="btn hero-btn">
        Let's go buy us some flowers!
      </Link>
    </div>
  );
};
