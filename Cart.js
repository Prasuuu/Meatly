import React from "react";

const Cart = ({
  cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
}) => {
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div style={{ padding: "20px", background: "#f1f1f1", marginTop: "20px" }}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((product, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                  alignItems: "center",
                }}
              >
                <span>
                  {product.name} - ₹{product.price} x {product.quantity}
                </span>
                <div>
                  <button
                    onClick={() => increaseQuantity(index)}
                    style={{
                      padding: "5px 10px",
                      background: "lightblue",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => decreaseQuantity(index)}
                    style={{
                      padding: "5px 10px",
                      background: "lightcoral",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeFromCart(index)}
                    style={{
                      padding: "5px 10px",
                      background: "red",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ₹{totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
