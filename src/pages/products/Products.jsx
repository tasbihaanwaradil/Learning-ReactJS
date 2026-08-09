import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response);
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    getAllProducts();
  }, []);

  console.log(products);
  return (
    <>
      <div className="container text-center">
        <h1>Products</h1>
      </div>

      <div className="container">
        <div className="row g-5">
          {products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <div className="card">
                <img src={product.images[0]} alt="" />
                <p>
                  {product.title} <span>{product.category}</span>
                </p>
                <p>$ {product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;

//CRUD
