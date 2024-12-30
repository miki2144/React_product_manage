import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [productsInCart, setProductsInCart] = useState([]);
  const navigate = useNavigate();

  // Load the cart items from localStorage
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setProductsInCart(cartItems);
  }, []);

  const handlePayment = () => {
    // Redirect to the payment form (you can implement this as a new route)
    navigate("/payment");
  };

  return (
    <div style={styles.container}>
      <h1>Your Cart</h1>
      {productsInCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={styles.cartGrid}>
          {productsInCart.map((product) => (
            <div key={product.id} style={styles.cartCard}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <h3>{product.name}</h3>
              <p><strong>${product.price.toFixed(2)}</strong></p>
              <p>Quantity: {product.quantity}</p>
            </div>
          ))}
        </div>
      )}

      {productsInCart.length > 0 && (
        <div>
          <button onClick={handlePayment} style={styles.paymentButton}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  cartGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "20px",
  },
  cartCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  productImage: {
    width: "100%",
    height: "auto",
    marginBottom: "10px",
  },
  paymentButton: {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "20px",
  },

  // Media Queries for Responsiveness
  "@media (max-width: 1200px)": {
    cartGrid: {
      gridTemplateColumns: "repeat(2, 1fr)", // 2 columns for medium screens
    },
  },
  "@media (max-width: 768px)": {
    cartGrid: {
      gridTemplateColumns: "1fr", // 1 column for smaller screens (tablets and phones)
    },
    paymentButton: {
      width: "100%", // Make payment button full width on small screens
      padding: "15px",
    },
  },
};

export default Cart;
