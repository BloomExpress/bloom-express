import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEllipsisV, FaShoppingCart } from "react-icons/fa";
import flowers from "../../utils/flowers";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = flowers.reduce((accu, flower) => {
    if (!accu.includes(flower.category)) {
      accu.push(flower.category);
    }
    return accu;
  }, []);

  const changeCategory = (e) => {
    let category = e.target.value;
    setSelectedCategory(category);
  };

  const filteredFlower = selectedCategory
    ? flowers.filter((flower) => flower.category === selectedCategory)
    : flowers;

  const cardBody = {
    padding: "1rem 0.1rem",
  };
  const cardContainer = {
    paddingBottom: "6rem",
  };

  const card = {
    width: "100%",
    textAlign: "left",
    borderColor: "none !important",
  };

  const links = {
    display: "flex",
    flexFlow: "row no-wrap",
    justifyContent: "space-between",
  };

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
                  onChange={changeCategory}
                >
                  <option value="all">all</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <label htmlFor="floatingSelect" className="">
                  Select Category
                </label>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="row mt-3">
              {filteredFlower.map((f) => (
                <div className=" col-md-4" style={cardContainer} key={f.id}>
                  <NavLink to={`/product/${f.id}`}>
                    <div style={card}>
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
                      <div style={cardBody}>
                        <div style={links}>
                          <h5 className="card-title fs-5 text-black">
                            {f.name}
                          </h5>
                          <p className="card-text fs-6">{f.price}$</p>
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
    </>
  );
};

export default Products;
