import { useEffect, useState } from "react";
import "../App.css";
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
    <>
      {products.map((item) => (
        <div className="container">
          <div className="box">
            <div className="content">
              <h6>{item.title}</h6>
            </div>
            <img key={item.id} src={item.image} alt={item.title} />
            <div>
              <button>Edit</button>
            </div>
            <div>
              <button>Add</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
