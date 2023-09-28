import React, { useState } from "react";
//import { products } from "./AllProducts";

function removeFromCart(id) {
  const newItems = [];
  {
    cartItems.map((item) => {
      if (item.id === id) {
        item.qty !== 1 && newItems.push({ ...item, qty: item.qty - 1 });
      } else {
        newItems.push(item);
      }
    });
  }
}

export default function Cart({ cartItems }) {
  return (
    <div className="cartItems">
      {cartItems &&
        cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <p className="productTitle">
                {item.title} <h6>{`Category: ${item.category}`}</h6>$
                {item.price}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
