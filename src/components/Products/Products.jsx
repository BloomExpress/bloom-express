import { useEffect, useState } from "react";

const Products = () => {
  const proxyUrl = "https://corsproxy.io/?";
  const apiUrl = "https://www.floristone.com/api/content/";
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
      const data = await response.json();
      console.log(data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="row">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>

      </div>
    </>
  );
};

export default Products;
