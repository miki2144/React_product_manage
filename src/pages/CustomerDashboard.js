import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaReceipt, FaSignOutAlt } from "react-icons/fa";

const CustomerDashboard = () => {
  const handleLogout = () => {
    // Add logout logic (e.g., clearing session or token)
    alert("Logged out successfully");
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Customer Dashboard</h2>
        <nav style={styles.nav}>
          <Link style={styles.link} to="/customer/cart">
            <FaShoppingCart style={styles.icon} /> View Cart
          </Link>
          <Link style={styles.link} to="/customer/profile">
            <FaUserCircle style={styles.icon} /> Manage Profile
          </Link>
          <Link style={styles.link} to="/customer/orders">
            <FaReceipt style={styles.icon} /> View Orders
          </Link>
          <button style={styles.logoutButton} onClick={handleLogout}>
            <FaSignOutAlt style={styles.icon} /> Logout
          </button>
        </nav>
      </aside>
      <main style={styles.mainContent}>
        <h1 style={styles.pageTitle}>Welcome to Your Dashboard</h1>
        <Outlet />
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f4f4f4",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
  },
  sidebarTitle: {
    fontSize: "1.5em",
    marginBottom: "20px",
    textAlign: "center",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  link: {
    color: "#ecf0f1",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#34495e",
    transition: "background 0.3s",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  icon: {
    fontSize: "1.2em",
  },
  logoutButton: {
    color: "#ecf0f1",
    textDecoration: "none",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "#e74c3c",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  mainContent: {
    flex: 1,
    marginLeft: "260px", // Adjusted to leave space for the sidebar
    padding: "20px",
    backgroundColor: "#fff",
  },
  pageTitle: {
    fontSize: "2em",
    marginBottom: "20px",
  },
};

export default CustomerDashboard;
