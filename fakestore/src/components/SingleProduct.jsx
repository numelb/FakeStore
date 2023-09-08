import React, { useState } from "react";
import { useEffect } from "react";
import AllProducts from "./AllProducts";

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([]);
  const URL = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    SingleProduct();
  }, []);

  async function SingleProduct(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await response.json();
    console.log(result);
    setSingleProduct(result);
  }

  return (
    <>
      <div key={product.id}>
        {singleProduct.map((product) => (
          <>
            <div>
              if ({product.id === singleProduct.id})
              <img
                key={singleProduct.id}
                src={singleProduct.image}
                alt={singleProduct.title}
              />
              <h3>
                {product.name} ${product.price}
              </h3>
              {/* <h5>{product.description}</h5> */}
              <button>Add to order</button>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
