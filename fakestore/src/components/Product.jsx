import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cart";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const URL = `https://fakestoreapi.com/products/${id}`;
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProduct();
  }, []);
  async function fetchProduct() {
    const response = await fetch(URL);
    const result = await response.json();
    setProduct(result);
  }

  return (
    <>
      <div className="container">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="50px"
            width="50px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercae text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addToCart(product)}
          >
            +
          </button>

          <NavLink to="/cart" className="btn btn-dark">
            Go to Cart
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Product;
