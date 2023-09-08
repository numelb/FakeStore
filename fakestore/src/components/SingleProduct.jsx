import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AllProducts from "./AllProducts";

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([]);
  const { id } = useParams();
  const URL = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    SingleProduct();
  }, []);

  async function SingleProduct() {
    const response = await fetch(URL);
    const result = await response.json();
    setSingleProduct(result);
  }

  return (
    <div key={singleProduct.id}>
      <img
        key={singleProduct.id}
        src={singleProduct.image}
        alt={singleProduct.title}
      />
      <h3>
        {singleProduct.name} ${singleProduct.price}
      </h3>
      {/* <h5>{product.description}</h5> */}
      <button>Add to order</button>
    </div>
  );
}
