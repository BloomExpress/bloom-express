import styled from "styled-components";
import aboutImg from "../assets/bouquet.avif";
import {Link} from 'react-router-dom'


const About = () => {
  return (
    <main>
     <PageHero title="about"/>
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="bouquet" />
        <article>
          <div className="title">
            <h2>our story</h2>
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
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
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


const PageHero = ({title}) => {
  return (
    <WrapperHero>
      <div className="section-center">
        <h3>
          <Link to='/'>Home</Link>/ {title}
        </h3>
      </div>
    </WrapperHero>
  )
}


const WrapperHero = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;



