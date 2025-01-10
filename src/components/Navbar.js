import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cartItems.length);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>
        <Link style={styles.link} to="/">Home</Link>
      </div>
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`} style={styles.navLinks}>
        <Link style={styles.link} to="/products">All Products</Link>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/login">
          Login
        </Link>
       
      </div>
      <div style={styles.hamburgerMenu} onClick={toggleMenu}>
        <FaBars style={styles.hamburgerIcon} />
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    padding: "10px 20px",
    backgroundColor: "#282c34",
    color: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  brand: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  link: {
    margin: "0 15px",
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "color 0.3s",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
  },
  cartIcon: {
    fontSize: "1.6em",
    position: "relative",
    transition: "color 0.3s ease-in-out",
  },
  cartCount: {
    position: "absolute",
    top: "-5px",
    right: "-8px",
    backgroundColor: "#ff6347",
    color: "white",
    borderRadius: "50%",
    padding: "5px 10px",
    fontSize: "0.9em",
    fontWeight: "bold",
    minWidth: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hamburgerMenu: {
    display: "none",
    cursor: "pointer",
  },
  hamburgerIcon: {
    fontSize: "1.8em",
    color: "white",
  },
};

export default Navbar;
