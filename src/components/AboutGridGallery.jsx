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
            <img src={gridImg1} alt="grid1" />
          </div>
          <div className="row mt-5">
            <img src={gridImg2} alt="grid2" />
          </div>
          <div className="row mt-5">
            <img src={gridImg6} alt="grid6" />
          </div>
          <div className="row mt-3">
            <img src={gridImg11} alt="grid11" />
          </div>
        </div>
        <div className="col-4">
          <div className="row mt-5">
            <img src={gridImg5} alt="grid5" />
          </div>
          <div className="row mt-5">
            <img src={gridImg7} alt="grid7" />
          </div>
          <div className="row mt-3">
            <img src={gridImg10} alt="grid10" />
          </div>
          <div className="row mt-5 mb-5">
            <img src={gridImg12} alt="grid12" />
          </div>
        </div>
        <div className="col-4">
          <div className="row mb-3">
            <img src={gridImg4} alt="grid4" />
          </div>
          <div className="row mb-3">
            <img src={gridImg3} alt="grid3" />
          </div>
          <div className="row mb-3">
            <img src={gridImg9} alt="grid9" />
          </div>
        </div>
      </div>
      <Link to="products" className="btn hero-btn">
        Let's go buy us some flowers!
      </Link>
    </div>
  );
};

export default AboutGridGallery;
