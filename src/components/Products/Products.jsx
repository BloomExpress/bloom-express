import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { FaEuroSign } from "react-icons/fa";
import flowers from "../../utils/flowers";
import PageHero from "../PageHero";

const Products = () => {
  const [filteredFlowers, setFilteredFlowers] = useState(flowers);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imgCount, setImgCount] = useState(0);
  const [sortFlower, setSortFlower] = useState("asc");
  const flowerProducts = useLoaderData();

  useEffect(() => {
    console.log("triggered!");
    const f = selectedCategory
      ? flowerProducts.filter((flower) => flower.category === selectedCategory)
      : flowerProducts;

    sortFlower === "asc"
      ? setFilteredFlowers(f.sort((a, b) => a.price - b.price))
      : setFilteredFlowers(f.sort((a, b) => b.price - a.price));

    setImgCount(f.length);
  }, [selectedCategory, sortFlower]);

  const categories = flowers.reduce((acc, flower) => {
    if (!acc.includes(flower.category)) {
      acc.push(flower.category);
    }
    return acc;
  }, []);

  const changeCategory = (e) => {
    let category = e.target.value;
    setSelectedCategory(category);
  };

  const sortByPrice = (e) => {
    let val = e.target.value;
    setSortFlower(val);
  };

  const cardBody = {
    padding: "1rem 0.1rem",
  };
  const cardContainer = {
    paddingBottom: "3rem",
  };

  const card = {
    width: "100%",
    textAlign: "left",
    borderColor: "none !important",
  };

  const links = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const dropDownLabel = {
    transform: "scale(.85) translateY(-0.5rem) translateX(1rem)",
  };

  const headerFlowers = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    padding: "1rem 0rem 0rem 0rem",
    alignItems: "center",
  };

  const foundItems = {
    marginBottom: "none",
  };

  return (
    <main>
      <PageHero title="Products" />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="row pt-3">
              <div className="form-floating ">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Select Category"
                  onChange={changeCategory}
                >
                  <option value="">all</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <label htmlFor="floatingSelect" style={dropDownLabel}>
                  Select Category
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div style={headerFlowers}>
              <span style={foundItems}>
                <span style={{ color: "darkgray" }}>Products were found</span>
                <span style={{ color: "#397f84", fontWeight: "600" }}>
                  &nbsp;(&nbsp;{imgCount}&nbsp;)
                </span>
              </span>
              <span style={{ display: "flex", marginBottom: "none" }}>
                <div
                  style={{
                    width: "fit-content",
                    textAlign: "center",
                    verticalAlign: "center",
                    padding: "0.2rem",
                    color: "darkgray",
                  }}
                >
                  <span>Sort by Price&nbsp;:&nbsp;</span>
                </div>
                <div>
                  <select
                    className="form-select form-select-sm"
                    onChange={sortByPrice}
                  >
                    <option value="asc">Lowest</option>
                    <option value="des">Highest</option>
                  </select>
                </div>
              </span>
            </div>
            <hr />

            <div className="row">
              {filteredFlowers.map((f) => (
                <div className="col-md-4" style={cardContainer} key={f.id}>
                  <NavLink to={`${f.id}`}>
                    <div style={card} className="shadow mb-1 bg-white">
                      <img
                        src={f.image}
                        className="card-img-top"
                        alt="Card Image"
                        style={{
                          width: "100%",
                          height: "13rem",
                          objectFit: "cover",
                        }}
                      />

                      <div style={cardBody} className="p-3">
                        <div style={links}>
                          <span className="fs-5 text-dark-emphasis">
                            {f.name}
                          </span>
                          <p
                            className="card-text fs-6 text-dark-emphasis"
                            style={{
                              display: "flex",
                              flexFlow: "row",
                              alignItems: "center",
                            }}
                          >
                            <span style={{ fontSize: "1.1rem" }}>
                              {f.price}
                            </span>
                            <FaEuroSign style={{ fontSize: "0.9rem" }} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export const productsLoader = async () => {
  return flowers;
};

export default Products;
