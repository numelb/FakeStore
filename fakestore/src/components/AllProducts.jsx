import { useEffect, useState } from "react";
import "../App.css";
import { Link, useSearchParams } from "react-router-dom";
export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  const URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const response = await fetch(URL);
    const result = await response.json();

    setProducts(result);
  }

  const filterParam = searchParams.get("filter");
  const filteredProducts = products.filter(({ category }) => {
    return category === filterParam || !filterParam;
  });
  return (
    <div className="container">
      {filteredProducts.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <div>
            <p className="productTitle">
              {item.title} <h6>{`Category: ${item.category}`}</h6>
              <Link
                className="btn btn-outline-dark buynow"
                to={`/Products/${item.id}`}
              >
                More Details
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
