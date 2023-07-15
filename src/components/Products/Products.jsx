import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEllipsisV, FaShoppingCart } from "react-icons/fa";

const Products = () => {
  const [plants, setPlants] = useState([]);

  const cardContainer = {
    paddingBottom: "6rem",
  };

  const card = {
    width: "100%",
    textAlign: "left",
  };

  const links = {
    display: "flex",
    flexFlow: "row no-wrap",
    justifyContent: "space-between",
  };
  const proxyUrl = "https://corsproxy.io/?";
  const apiUrl =
    "https://trefle.io/api/v1/plants?token=B8rfAvBOfhSdMC6SENJFVSgcEnThvnHm6lKV-euxf-A";

  // const apiUrl =
  //   "https://perenual.com/api/species-list?page=1&key=sk-taE064b1d4d3ae8921564";
  /*
    The Plant Encyclopedia API:
    token=B8rfAvBOfhSdMC6SENJFVSgcEnThvnHm6lKV-euxf-A
    This API provides information about various plants, including flowers.
    It offers details such as scientific names, common names, descriptions, images, and more.
      API Endpoint: https://trefle.io/api/plants
      Documentation: https://trefle.io/

    The OpenFarm API:

    OpenFarm is a community-driven platform that offers information about farming and gardening.
    It includes details about different types of plants, including flowers.

      API Endpoint: https://openfarm.cc/api/v1/crops
      Documentation: https://openfarm.cc/api/#introduction

    3- perenual.com
    sk-taE064b1d4d3ae8921564
    */
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
      const data = await response.json();
      console.log(data.data);
      setPlants(data.data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="row pt-4">
              <div className="form-floating ">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Select Category"
                >
                  <option selected value="s">
                    Spring
                  </option>
                  <option value="1">Summer</option>
                  <option value="2">Winter</option>
                  <option value="3">Falls</option>
                </select>
                <label htmlFor="floatingSelect" className="">
                  Select Category
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="row mt-3">
              {plants.map((plant) => (
                <div className="col-md-6" style={cardContainer} key={plant.id}>
                  <div className="card" style={card}>
                    <img
                      src={plant.image_url}
                      // src={plant.default_image.original_url}
                      className="card-img-top"
                      alt="Card Image"
                      style={{
                        width: "100%",
                        height: "21rem",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body p-4">
                      <h5 className="card-title fs-3">{plant.common_name}</h5>
                      <p className="card-text fs-4">{plant.genus}</p>
                      <div style={links}>
                        <NavLink to="/">
                          <span
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <FaEllipsisV />{" "}
                            <span style={{ fontSize: "1.2rem" }}>
                              See Details
                            </span>
                          </span>
                        </NavLink>
                        <NavLink to="/">
                          <span>
                            <FaShoppingCart /> Add to Cart
                          </span>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
