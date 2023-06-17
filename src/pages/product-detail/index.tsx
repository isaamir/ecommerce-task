import React from "react";
import ProductDetailHeader from "./components/ProductDetailHeader";
import ProductDetailDesc from "./components/ProductDetailDesc";
import ProductImages from "./components/ProductImages";
import RelatedProducts from "./components/RelatedProducts";
const ProductDetail = () => {
  return (
    <>
      <ProductDetailHeader />
      <div className="wrapper">
        <ProductImages />
        <ProductDetailDesc />
        <RelatedProducts />
      </div>
    </>
  );
};

export default ProductDetail;
