import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>Admin Dashboard</h2>
        <nav style={styles.nav}>
          <Link style={styles.link} to="/dashboard/products">
            Manage Products
          </Link>
          <Link style={styles.link} to="/dashboard/users">
            Manage Users
          </Link>
          <Link style={styles.link} to="/dashboard/profile">
            Profile Management
          </Link>
          <Link style={styles.link} to="/dashboard/orders">
            Manage Orders
          </Link>
          <Link style={styles.link} to="/dashboard/reports">
            View Reports
          </Link>
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
  },
  linkHover: {
    backgroundColor: "#1abc9c",
  },
  mainContent: {
    flex: 1,
    marginLeft: "260px",  // Adjusted to leave space for the sidebar
    padding: "20px",
    backgroundColor: "#fff",
  },
  pageTitle: {
    fontSize: "2em",
    marginBottom: "20px",
  },
};

export default Dashboard;
