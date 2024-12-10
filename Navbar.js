import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <nav
      style={{
        padding: "10px",
        background: "#333",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>Meatly.</h1>
      <h4>meet your needs</h4>
      <span>Cart: {cartCount} items</span>
    </nav>
  );
};

export default Navbar;
