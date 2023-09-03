import { useEffect, useState } from "react";
//import pizzaData from "../data";
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
      <div>
        {products.map((product) => (
          <>
            <div>
              <img key={product.id} src={product.image} alt={product.title} />
              <h4>
                {product.name} ${product.price}
              </h4>

              {/* <h5>{product.description}</h5> */}

              <button>Add to order</button>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
