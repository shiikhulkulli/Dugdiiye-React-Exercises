import React, { useState } from "react";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const addToCart = () => {
    if (productName === "" || productPrice === "") return;
    const newProduct = {
      id: Date.now(),
      name: productName,
      price: Number(productPrice),
      quantity: 1,
    };

    setCart([...cart, newProduct]);

    setProductName("");
    setProductPrice("");
  };
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);
  };
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCart(updatedCart);
  };

  const removeProduct = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
  };
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px", maxWidth: "600px" }}>
      <h2>Shopping Cart</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />

      <button onClick={addToCart}>Add to Cart</button>

      <hr />

      {cart.length === 0 && <p>cart-ga hadda waxba kuma jiraan.</p>}

      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <strong>{item.name}</strong> - ${item.price}

          <div>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span style={{ margin: "0 10px" }}> Qty: {item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
          </div>

          <button onClick={() => removeProduct(item.id)}>Remove</button>
        </div>
      ))}

      <hr />

      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default ShoppingCart;
