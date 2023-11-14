import "bootstrap/dist/css/bootstrap.min.css";
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

const AboutGridGallery = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <h3 className="text-center my-5">
          "Embrace the Magic of Blooms in our Picturesque Garden."
        </h3>
        <div className="col-4">
          <div className="row mb-3">
            <img
              src={gridImg1}
              alt="Clara Osbourne, owner and farmer of Pasture Song Farm in Chester County, PA, harvests organic ranunculus for spring bouquets."
            />
          </div>
          <div className="row mt-5">
            <img
              src={gridImg2}
              alt="Women holding a bouquet of flowers on her left shoulder."
            />
          </div>
          <div className="row mt-5">
            <img
              src={gridImg6}
              alt="Three colorful flower buckets of ranunculus harvest, in front of a wooden background, at Pasture Song Farm in Pottstown, PA. "
            />
          </div>
          <div className="row mt-3">
            <img
              src={gridImg11}
              alt="A meadow of different blooming flowers next to a forest."
            />
          </div>
        </div>
        <div className="col-4">
          <div className="row mt-5">
            <img
              src={gridImg5}
              alt="A lady florist taking care of hanging pots of flowers in a garden glasshouse."
            />
          </div>
          <div className="row mt-5">
            <img
              src={gridImg7}
              alt="Potting up lisianthus seedlings in the greenhouse in early spring at Pasture Song Farm in Pottstown, PA."
            />
          </div>
          <div className="row mt-3">
            <img
              src={gridImg10}
              alt="Linda's Baby dahlias in a bucket just after harvest."
            />
          </div>
          <div className="row mt-5 mb-5">
            <img
              src={gridImg12}
              alt="A crate of freshly harvested tulips awaits processing and arranging on the porch of the flower workshop at Pasture Song Farm, Pottstown, PA."
            />
          </div>
        </div>
        <div className="col-4">
          <div className="row mb-3">
            <img
              src={gridImg4}
              alt="Magical close up of pink flowers in a field with bubble."
            />
          </div>
          <div className="row mb-3">
            <img
              src={gridImg3}
              alt="A girl in a blue jacket, smiling and holding a pot of flowers on her left shoulder."
            />
          </div>
          <div className="row mb-3">
            <img
              src={gridImg9}
              alt="A girl, with a white hat in a sunflower field, holding a sunflower in front of her face."
            />
          </div>
        </div>
      </div>
      <Link to="/products" className="btn hero-btn">
        Let's go buy us some flowers!
      </Link>
    </div>
  );
};

export default AboutGridGallery;
