import { useEffect, useState } from "react";
import "../App.css";
export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const response = await fetch(URL);
    const result = await response.json();

    setProducts(result);
  }
  return (
    <>
      {products.map((item) => (
        <div className="container">
          <div className="box">
            <div className="content">
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
            <img key={item.id} src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
    </>
  );
}
