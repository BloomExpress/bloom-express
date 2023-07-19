import { useLoaderData } from "react-router-dom";
import { FaEuroSign, FaShoppingCart } from "react-icons/fa";
import flowers from "../../utils/flowers";

const SingleFlower = () => {
  const flower = useLoaderData();

  const imgStyle = {
    width: "27rem",
    height: "30rem",
    borderRadius: "0.25rem",
  };

  const headerStyle = {
    height: "3rem",
    verticalAlign: "middle",
    padding: "1rem",
    fontSize: "2rem",
  };

  console.log(flower);
  return (
    <div className="container">
      <h5 style={headerStyle}>Flower Details</h5>
      {flower.map((fl) => (
        <div className="row p-5" key={fl.id}>
          <div className="col-md-6">
            <img
              src={fl.image}
              alt="Img"
              className="shadow-lg mb-5 bg-white"
              style={imgStyle}
            />
          </div>
          <div className="col-md-6" style={{ textAlign: "left" }}>
            {fl.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export const singleProductLoader = ({ params }) => {
  const { fid } = params;
  const singleFlower = flowers.filter((flower) => flower.id === Number(fid));
  return singleFlower;
};

export default SingleFlower;
