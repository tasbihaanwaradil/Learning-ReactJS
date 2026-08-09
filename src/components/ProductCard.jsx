import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 product-card">
      <img src={product.image} alt="" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;
