import { useLoaderData } from "react-router-dom";
import { FaEuroSign, FaStar, FaShoppingCart } from "react-icons/fa";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import flowers from "../../utils/flowers";

const SingleFlower = () => {
  const flower = useLoaderData();

  const headerStyle = {
    height: "3rem",
    verticalAlign: "middle",
    padding: "1rem",
    fontSize: "2rem",
  };
  const imgStyle = {
    width: "100%",
    height: "50vh",
    borderRadius: "0.25rem",
    objectFit: "cover",
  };
  const details = {
    textAlign: "left",
    margin: "auto",
  };

  return (
    <div className="container">
      <h2 style={headerStyle}>Flower Details</h2>
      <div className="pt-5 pb-5">
        {flower.map((fl) => (
          <div className="row" key={fl.id}>
            <div className="col-md-6">
              <img
                src={fl.image}
                alt="Img"
                className="shadow-lg mb-5 bg-white"
                style={imgStyle}
              />
            </div>
            <div className="col-md-6">
              <div
                className="p-4 shadow-sm bg-white rounded w-100"
                style={details}
              >
                <h3>{fl.name}</h3>
                <span style={{ display: "flex", marginBottom: "0.7rem" }}>
                  <FaStar style={{ fontSize: "1.2rem", color: "orange" }} />
                  <h6 style={{ marginBottom: "0px", fontSize: "1.2rem" }}>
                    &nbsp;{fl.customerReviews[0].rating}
                  </h6>
                  <span style={{ color: "darkgray" }}>
                    &nbsp;&nbsp;({fl.customerReviews[0].review})
                  </span>
                </span>

                <h4>
                  <span>{fl.price}</span>
                  <FaEuroSign
                    style={{ fontSize: "1.1rem", verticalAlign: "baseline" }}
                  />
                </h4>
                <p style={{ textAlign: "justify" }}>{fl.description}</p>
                <p>
                  {fl.isAvailable ? (
                    <span style={{ display: "flex", alignItems: "center" }}>
                      <FaCircleCheck
                        style={{ fontSize: "1.2rem", color: "lightgreen" }}
                      />
                      <span>&nbsp;Available in Stock</span>
                    </span>
                  ) : (
                    <span>
                      <FaCircleXmark
                        style={{ fontSize: "1.2rem", color: "red" }}
                      />
                      <span>&nbsp;Not Available in Stock</span>
                    </span>
                  )}
                </p>
                <p className="p-3 bg-secondary-subtle rounded">
                  Colors &nbsp;
                  {fl.color.map((c) => (
                    <span
                      key={c}
                      style={{
                        backgroundColor: `${c}`,
                        width: "1rem",
                        height: ".1rem",
                        padding: "0rem .5rem",
                        marginRight: "0.2rem",
                        borderRadius: "100%",
                      }}
                    ></span>
                  ))}
                </p>
                <p>Category {fl.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>jlkjflks</p>
    </div>
  );
};

export const singleProductLoader = ({ params }) => {
  const { fid } = params;
  const singleFlower = flowers.filter((flower) => flower.id === Number(fid));
  return singleFlower;
};

export default SingleFlower;
