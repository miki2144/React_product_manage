import React from "react";
import { Link } from "react-router-dom";

// Import images
import f1 from "../assets/f1.jpg";
import m2 from "../assets/m2.jpg";
import mb1 from "../assets/mb1.jpg";
import p1 from "../assets/p1.jpg";

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>Welcome to Our E-Commerce Store</h1>
        <p style={styles.heroSubtitle}>Browse our amazing products and enjoy great deals!</p>
        <Link to="/products" style={styles.shopNowButton}>Shop Now</Link>
      </div>

      {/* Featured Products Section */}
      <div style={styles.featuredSection}>
        <h2>Featured Products</h2>
        <div style={styles.productsGrid}>
          {/* Product Card 1 */}
          <div style={styles.productCard}>
            <img src={f1} alt="Product 1" style={styles.productImage} />
            <h3>Product 1</h3>
            <p>$19.99</p>
            <Link to="/#" style={styles.productLink}>View Details</Link>
          </div>
          {/* Product Card 2 */}
          <div style={styles.productCard}>
            <img src={m2} alt="Product 2" style={styles.productImage} />
            <h3>Product 2</h3>
            <p>$29.99</p>
            <Link to="/#" style={styles.productLink}>View Details</Link>
          </div>
          {/* Product Card 3 */}
          <div style={styles.productCard}>
            <img src={mb1} alt="Product 3" style={styles.productImage} />
            <h3>Product 3</h3>
            <p>$39.99</p>
            <Link to="/#" style={styles.productLink}>View Details</Link>
          </div>
          {/* Product Card 4 */}
          <div style={styles.productCard}>
            <img src={p1} alt="Product 4" style={styles.productImage} />
            <h3>Product 4</h3>
            <p>$49.99</p>
            <Link to="/#" style={styles.productLink}>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  heroSection: {
    textAlign: "center",
    marginTop: "40px",
    backgroundColor: "#3e8e41",
    color: "#fff",
    padding: "50px 20px",
    borderRadius: "8px",
  },
  heroTitle: {
    fontSize: "3.5em",
    marginBottom: "15px",
  },
  heroSubtitle: {
    fontSize: "1.2em",
    marginBottom: "20px",
  },
  shopNowButton: {
    textDecoration: "none",
    backgroundColor: "#ff6347",
    padding: "10px 20px",
    color: "#fff",
    fontSize: "1.2em",
    borderRadius: "5px",
  },
  featuredSection: {
    textAlign: "center",
    marginTop: "40px",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginTop: "20px",
  },
  productCard: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  productImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  },
  productLink: {
    textDecoration: "none",
    color: "#ff6347",
    fontWeight: "bold",
    marginTop: "10px",
    display: "block",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#282c34",
    color: "#fff",
  },

  // Media Queries for Mobile Responsiveness
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
    heroTitle: {
      fontSize: "2.5em", // Adjust hero title size for smaller screens
    },
    heroSubtitle: {
      fontSize: "1em", // Adjust subtitle for smaller screens
    },
    shopNowButton: {
      fontSize: "1em", // Adjust button font size for mobile
      padding: "8px 16px",
    },
  },
};

export default Home;
