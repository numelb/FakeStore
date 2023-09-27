import React, { useState } from "react";
//import { products } from "./AllProducts";

export default function Cart({ cartItems }) {
  return (
    <div>
      {cartItems &&
        cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <p className="productTitle">
                {item.title} <h6>{`Category: ${item.category}`}</h6>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
