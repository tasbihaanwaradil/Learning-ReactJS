import React from "react";
import "./Menu.css";
import { products } from "../../data";
import ProductCard from "../ProductCard";

const Menu = () => {
  return (
    <div>
      <div className="product mt-5">
        <div className="container">
          <div className="row mb-5">
            {products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
