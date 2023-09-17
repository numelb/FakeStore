import { useEffect, useState } from "react";
import "../App.css";
export default function AllProducts() {
  const [products, setProducts] = useState([]);

  const URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetchProducts();
    console.log(products);
  });

  async function fetchProducts() {
    const response = await fetch(URL);
    const result = await response.json();

    setProducts(result);
  }
  return (
    <div className="container">
      {products.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />s<p>{item.title}</p>
          <div>
            <button className="btn btn-outline-dark">Add</button>
          </div>
        </div>
      ))}
    </div>
  );
}
