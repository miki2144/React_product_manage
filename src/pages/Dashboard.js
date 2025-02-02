import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBox, FaUsers, FaUser, FaClipboardList, FaChartLine, FaCreditCard, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
  const handleLogout = () => {
    // Clear session storage or token (simulation)
    sessionStorage.removeItem('userToken');
    alert("Logged out successfully");
    // Redirect to login or home page (if needed)
    window.location.href = "/login"; // Change as necessary
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Admin Dashboard</h2>
        <nav style={styles.nav}>
          <Link style={styles.link} to="/dashboard/products">
            <FaBox style={styles.icon} /> Manage Products
          </Link>
          <Link style={styles.link} to="/dashboard/users">
            <FaUsers style={styles.icon} /> Manage Users
          </Link>
          <Link style={styles.link} to="/dashboard/profile">
            <FaUser style={styles.icon} /> Profile Management
          </Link>
          <Link style={styles.link} to="/dashboard/orders">
            <FaClipboardList style={styles.icon} /> Manage Orders
          </Link>
          <Link style={styles.link} to="/dashboard/reports">
            <FaChartLine style={styles.icon} /> View Reports
          </Link>
          <Link style={styles.link} to="/dashboard/payments">
            <FaCreditCard style={styles.icon} /> Payment Management
          </Link>
          <button style={styles.logoutButton} onClick={handleLogout}>
            <FaSignOutAlt style={styles.icon} /> Logout
          </button>
        </nav>
      </aside>
      <main style={styles.mainContent}>
        <h1 style={styles.pageTitle}>Welcome to Admin Dashboard</h1>
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
    zIndex: 100,
    
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

  // Mobile responsiveness
  '@media (max-width: 768px)': {
    container: {
      flexDirection: "column",
    },
    sidebar: {
      width: "100%",
      position: "relative",
      height: "auto",
    },
    mainContent: {
      marginLeft: "0",
    },
    link: {
      fontSize: "14px", // Adjust link font size on small screens
    },
  },
};

export default Dashboard;
