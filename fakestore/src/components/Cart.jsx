/* eslint-disable react/prop-types */
export default function Cart({ cartItems, setCartItems }) {
  function removeFromCart(item) {
    // removes all items with same id
    const updatedItems = cartItems.filter(({ id }) => id !== item.id);
    setCartItems(updatedItems);
    // const newItems = [];
    // //{
    // cartItems.map((id) => {
    //   if (item.id === id) {
    //     item.qty !== 1 && newItems.push({ ...item, qty: item.qty - 1 });
    //   } else {
    //     setCartItems(newItems.push(item));
    //   }
    // });
  }

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
