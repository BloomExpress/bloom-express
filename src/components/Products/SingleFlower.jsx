import { useLoaderData } from "react-router-dom";
import flowers from "../../utils/flowers";

const SingleFlower = () => {
  const flower = useLoaderData();

  return (
    <div className="container">
      <div className="row">
        
      </div>
    </div>
  );
};

export const singleProductLoader = ({ params }) => {
  const { fid } = params;
  const singleFlower = flowers.filter((flower) => flower.id === Number(fid));
  return singleFlower;
};

export default SingleFlower;
