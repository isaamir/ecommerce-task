import React from "react";
import ProductDetailHeader from "./components/ProductDetailHeader";
import ProductDetailDesc from "./components/ProductDetailDesc";
const ProductDetail = () => {
  return (
    <>
      <ProductDetailHeader />
      <div className="wrapper">
        <ProductDetailDesc />
      </div>
    </>
  );
};

export default ProductDetail;
