import { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
export default function AllProducts() {
  const [products, setProducts] = useState([]);

  const URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);

  async function fetchProducts() {
    const response = await fetch(URL);
    const result = await response.json();

    setProducts(result);
  }
  return (
    <div className="container">
      {products.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <div>
            <p className="productTitle">
              {item.title} <h6>{`Category: ${item.category}`}</h6>
              <Link
                className="btn btn-outline-dark"
                to={`/Products/${item.id}`}
              >
                Buy Now
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
