// src/pages/ManageOrders.js
import React, { useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, product: "Product A", status: "Pending", date: "2024-12-01" },
    { id: 2, product: "Product B", status: "Shipped", date: "2024-12-02" },
    // Add more sample orders
  ]);

  const handleUpdateStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Manage Orders</h2>
      <ul style={styles.orderList}>
        {orders.map((order) => (
          <li key={order.id} style={styles.orderItem}>
            <div style={styles.orderDetails}>
              <p style={styles.orderText}><strong>Order ID:</strong> {order.id}</p>
              <p style={styles.orderText}><strong>Product:</strong> {order.product}</p>
              <p style={styles.orderText}><strong>Date:</strong> {order.date}</p>
              <p style={styles.orderText}><strong>Status:</strong> {order.status}</p>
              <div style={styles.buttonContainer}>
                <button
                  onClick={() => handleUpdateStatus(order.id, "Shipped")}
                  style={styles.button}
                >
                  Mark as Shipped
                </button>
                <button
                  onClick={() => handleUpdateStatus(order.id, "Completed")}
                  style={styles.button}
                >
                  Mark as Completed
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
  },
  title: {
    fontSize: "2em",
    marginBottom: "20px",
    textAlign: "center",
  },
  orderList: {
    listStyleType: "none",
    padding: 0,
  },
  orderItem: {
    backgroundColor: "#f9f9f9",
    marginBottom: "15px",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  orderDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  orderText: {
    fontSize: "1em",
    margin: "5px 0",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#2980b9",
  },
};

export default ManageOrders;
