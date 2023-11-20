import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { FaEuroSign } from "react-icons/fa";
import { PiFlowerFill } from "react-icons/pi";
import flowers from "../../utils/flowers";
import PageHero from "../PageHero";
import styled from "styled-components";

const Products = () => {
  const flowerProducts = useLoaderData();

  const [filteredFlowers, setFilteredFlowers] = useState(flowerProducts);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imgCount, setImgCount] = useState(0);
  const [sortFlower, setSortFlower] = useState("asc");
  const [colorChecked, setColorChecked] = useState({});
  const distinctColors = [];

  const getDistinctColors = () => {
    flowerProducts.filter((flower) => {
      flower.color.forEach((color) => {
        color = color[0].toLowerCase() + color.slice(1, color.length);
        distinctColors.includes(color) ? "" : distinctColors.push(color);
      });
    });
  };
  getDistinctColors();

  useEffect(() => {
    const f = selectedCategory
      ? flowerProducts.filter((flower) => flower.category === selectedCategory)
      : flowerProducts.filter((flower) => flower);

    const filteredByColors = Object.keys(colorChecked).length
      ? f.filter((flower) =>
          flower.color.some((color) => colorChecked[color.toLowerCase()])
        )
      : f.filter((flower) => flower);

    sortFlower === "des"
      ? setFilteredFlowers(filteredByColors.sort((a, b) => b.price - a.price))
      : setFilteredFlowers(filteredByColors.sort((a, b) => a.price - b.price));
    setImgCount(filteredByColors.length);
  }, [selectedCategory, sortFlower, flowerProducts, colorChecked]);

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
    setSortFlower(e.target.value);
  };

  const handleColorSelectChange = (e) => {
    console.log("Name", e.target.name);
    const name = e.target.name;
    const isChecked = e.target.checked;
    setColorChecked((prevColorChecked) => ({
      ...prevColorChecked,
      [name]: isChecked,
    }));
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
    transform: "scale(.85) translateY(-0.5rem) translateX(0.7rem)",
  };

  const headerFlowers = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    padding: "1rem 0rem 0rem 0rem",
    alignItems: "center",
    marginBottom: "1rem",
  };

  const foundItems = {
    marginBottom: "none",
  };

  return (
    <Wrapper>
      <PageHero title="Products" />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div style={headerFlowers}>
              <span
                style={{
                  paddingTop: "0.7rem",
                  paddingBottom: "0",
                  color: "darkgray",
                }}
              >
                Filter by :
              </span>
            </div>
            <div className="row">
              <div className="form-floating w-100 ps-2">
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
            <div className="row mt-3">
              <h6 className="form-floating p-2 d-flex flex-column align-items-start">
                {distinctColors.map((c) => (
                  <div
                    key={c}
                    className="bg-secondary-subtle w-100 ps-2 pt-1 pb-1 rounded mb-1"
                  >
                    <label className="m-1 d-flex gap-1 align-items-center">
                      <input
                        type="checkbox"
                        onChange={handleColorSelectChange}
                        style={{ width: "1rem", height: "1.3rem" }}
                        name={c}
                        checked={colorChecked[c]}
                      />
                      <PiFlowerFill
                        style={{ color: `${c}`, fontSize: "1.3rem" }}
                      />
                      <span style={{ color: `#397f84`, fontWeight: "normal" }}>
                        {c}
                      </span>
                      <br />
                    </label>
                  </div>
                ))}
              </h6>
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
            {/* <hr /> */}

            <div className="row">
              {filteredFlowers.map((f) => (
                <div className="col-md-4" style={cardContainer} key={f.id}>
                  <NavLink to={`${f.id}`}>
                    <div style={card} className="shadow mb-1 bg-white">
                      <Image
                        src={f.image}
                        className="card-img-top"
                        alt="Card Image"
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
                            <FaEuroSign style={{ fontSize: "0.9rem" }} />
                            <span style={{ fontSize: "1.1rem" }}>
                              {f.price}
                            </span>
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
    </Wrapper>
  );
};
export const productsLoader = async () => {
  return flowers;
};

const Wrapper = styled.section`
  position: relative;
  z-index: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 13rem;
  object-fit: cover;
  transition: filter 0.3s ease, transform 0.3s ease;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.05);
  }
`;

export default Products;
