import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import images
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';
import f4 from '../assets/f4.jpg';
import f5 from '../assets/f5.jpg';
import m1 from '../assets/m1.jpg';
import m2 from '../assets/m2.jpg';
import m3 from '../assets/m3.jpg';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import mb1 from '../assets/mb1.jpg';
import mb2 from '../assets/mb2.jpg';
import mb3 from '../assets/mb3.jpg';

const AllProducts = () => {
  const products = [
    { id: 1, name: "Product 1", description: "This is a description for Product 1", price: 19.99, image: f1, category: "Female" },
    { id: 2, name: "Product 2", description: "This is a description for Product 2", price: 29.99, image: m1, category: "Male" },
    { id: 3, name: "Product 3", description: "This is a description for Product 3", price: 39.99, image: f2, category: "Female" },
    { id: 4, name: "Product 4", description: "This is a description for Product 4", price: 49.99, image: m2, category: "Male" },
    { id: 5, name: "Product 5", description: "This is a description for Product 5", price: 59.99, image: f3, category: "Female" },
    { id: 6, name: "Product 6", description: "This is a description for Product 6", price: 69.99, image: m3, category: "Male" },
    { id: 7, name: "Product 7", description: "This is a description for Product 7", price: 79.99, image: f4, category: "Female" },
    { id: 8, name: "Product 8", description: "This is a description for Product 8", price: 89.99, image: m2, category: "Male" },
    { id: 9, name: "Product 9", description: "This is a description for Product 9", price: 99.99, image: f5, category: "Female" },
    { id: 10, name: "Product 10", description: "This is a description for Product 10", price: 109.99, image: m3, category: "Male" },
    { id: 11, name: "Laptop", description: "This is a description for Laptop", price: 799.99, image: p1, category: "Electronic Material" },
    { id: 12, name: "Headphones", description: "This is a description for Headphones", price: 199.99, image: p2, category: "Electronic Material" },
    { id: 13, name: "Smartphone", description: "This is a description for Smartphone", price: 599.99, image: mb1, category: "Electronic Material" },
    { id: 14, name: "Tablet", description: "This is a description for Tablet", price: 399.99, image: mb2, category: "Electronic Material" },
    { id: 15, name: "Smartwatch", description: "This is a description for Smartwatch", price: 199.99, image: mb3, category: "Electronic Material" }
  ];

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  const goToCart = () => {
    navigate("/cart");
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div style={styles.container}>
      <h1>All Products</h1>

      <div style={styles.dropdownContainer}>
        <label htmlFor="category">Filter by Category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={styles.dropdown}
        >
          <option value="">All</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Electronic Material">Electronic Material</option>
        </select>
      </div>

      <div style={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price.toFixed(2)}</strong></p>
            <button onClick={() => addToCart(product)} style={styles.addButton}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div>
        <h3>Cart: {cart.length} item(s)</h3>
        <button onClick={goToCart} style={styles.viewCartButton}>Go to Cart</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  dropdownContainer: {
    marginBottom: "20px",
  },
  dropdown: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginTop: "20px",
  },
  productCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
  },
  productCardHover: {
    transform: "scale(1.05)",
  },
  productImage: {
    width: "100%",
    height: "auto",
    marginBottom: "10px",
  },
  addButton: {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  addButtonHover: {
    backgroundColor: "#0056b3",
  },
  viewCartButton: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "20px",
  },

  // Media Queries for Responsiveness
  "@media (max-width: 1200px)": {
    productsGrid: {
      gridTemplateColumns: "repeat(3, 1fr)", // 3 columns for medium screens
    },
  },
  "@media (max-width: 900px)": {
    productsGrid: {
      gridTemplateColumns: "repeat(2, 1fr)", // 2 columns for smaller screens
    },
  },
  "@media (max-width: 600px)": {
    productsGrid: {
      gridTemplateColumns: "1fr", // 1 column for mobile screens
    },
    addButton: {
      fontSize: "14px",
    },
    viewCartButton: {
      fontSize: "14px",
    },
  },
};

export default AllProducts;
