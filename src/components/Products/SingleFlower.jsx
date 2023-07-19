import { useLoaderData } from "react-router-dom";
import { FaEuroSign, FaShoppingCart } from "react-icons/fa";
import flowers from "../../utils/flowers";

const SingleFlower = () => {
  const flower = useLoaderData();
  console.log(flower);
  return (
    <div className="container">
      {flower.map((fl) => (
        <div className="row p-5" key={fl.id}>
          <div className="col-md-6">
            <img
              src={fl.image}
              alt="Img"
              style={{ width: "90%", height: "70%" }}
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
