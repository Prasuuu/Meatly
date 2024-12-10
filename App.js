import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

// Import the logo

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Chicken Breast", price: 200, image: "cknbreast.jpeg" },
    { id: 2, name: "Lamb Chops", price: 400, image: "mutton.jpg" },
    { id: 3, name: "Pork Belly", price: 350, image: "porkbelly.jpeg" },
  ];

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  };

  return (
    <div>
      {/* Include the logo here */}
      <header>
      <img src="/meatlylogo.png" alt="Meatly Logo" style={{ width: 150, height: "auto" }} />

      </header>

      <Navbar cartCount={cart.length} />
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </div>
  );
};

export default App;
