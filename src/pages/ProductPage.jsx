import React from "react";
import Menu from "../component/Menu";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  let { productID, productName } = useParams();

  return (
    <div>
      <h2>{productID}</h2>
      <h2>{productName}</h2>
      <Menu />
      <h1>This is the prodcut page</h1>
    </div>
  );
};

export default ProductPage;
