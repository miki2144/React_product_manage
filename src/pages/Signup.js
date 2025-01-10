import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer"); // Default role
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Admin check: You can add an admin password to allow admins to create new users.
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (role === "admin" && users.length === 0) {
      // Allow only one admin to be created (first user)
      const newUser = { email, password, role };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Admin created successfully.");
      navigate("/login");
    } else if (role === "admin") {
      alert("Only one admin can be created.");
    } else {
      // Regular customer registration
      const newUser = { email, password, role };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Account created successfully. Please log in.");
      navigate("/login");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sign Up</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={styles.input}
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
      <p style={styles.link}>
        Already have an account? <span onClick={() => navigate("/login")} style={styles.linkText}>Login</span>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "2em",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "1em",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "1em",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    cursor: "pointer",
  },
  link: {
    marginTop: "10px",
    color: "#333",
  },
  linkText: {
    color: "#007BFF",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default Signup;
