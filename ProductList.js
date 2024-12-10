import React from "react";

const products = [
  { id: 1, name: "Chicken Breast", price: 200, image: "cknbreast.jpeg" },
  { id: 2, name: "Lamb Chops", price: 400, image: "lambchops.jpeg" },
  { id: 3, name: "Pork Belly", price: 350, image: "porkbelly.jpeg" },
];

const ProductList = ({ addToCart }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Products</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                marginRight: "20px",
              }}
            />
            <div style={{ flex: 1 }}>
              <strong>{product.name}</strong> - ₹{product.price}
            </div>
            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "5px 10px",
                background: "green",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
