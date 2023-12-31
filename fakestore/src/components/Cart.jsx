import { useContext } from "react";
import { CartContext } from "../context/cart";
export default function Cart() {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    <div className="cartItems">
      {cartItems &&
        cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <p className="productTitle">
                {item.title} <h6>{`Category: ${item.category}`}</h6>$
                {(item.price * item.quantity).toFixed(2)}
                <button onClick={() => removeFromCart(item)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => addToCart(item)}>+</button>
              </p>
            </div>
          </div>
        ))}
      <div>
        <div>
          {cartItems.length > 0 ? (
            <h1> Total: ${getCartTotal().toFixed(2)}</h1>
          ) : (
            <button
              onClick={() => {
                clearCart();
              }}
            >
              Clear cart
            </button>
          )}
        </div>

        <button
          onClick={() => {
            clearCart();
            alert("Thanx for your purchase");
          }}
          className="btn btn-dark"
        >
          CheckOut
        </button>
      </div>
    </div>
  );
}
