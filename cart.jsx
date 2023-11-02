import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

//const [cartItems, setCartItems] = useState([]);

export const CartProvider = ({ children }) => {
  //Update initial state of cart items
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  //Add items to cart
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id); //check if item is in the cart
    if (isItemInCart) {
      setCartItems(
        cartItems.map(
          (cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem //otherwise return the cart item)
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]); //if the item is not in the cart add the item in the cart
    }
  };
  //Remove Items from cart
  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItems) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id != item.id)); //if the quantity of the item is 1, remove the item from the cart
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  //Clear the cart
  const clearCart = () => {
    setCartItems([]); //set the cart toan empty array
  };

  //Set cart total
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  //Persist items in the cart
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  //pass Cart state to components
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
