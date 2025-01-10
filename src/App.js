import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllProducts from "./pages/AllProducts";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import ManageProducts from "./pages/ManageProducts";
import ManageUsers from "./pages/ManageUsers";
import ManageOrders from "./pages/ManageOrders";  // Import ManageOrders
import ManageReports from "./pages/ManageReports";  // Import ManageReports
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import ProfileManagement from "./pages/ProfileManagement";
import ManagePayments from "./pages/ManagePayments";
import CustomerDashboard from "./pages/CustomerDashboard";
import Orders from "./pages/Orders"; // Adjust the path based on your project structure

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<ManageProducts />} />
        <Route path="/dashboard/users" element={<ManageUsers />} />
        <Route path="/dashboard/profile" element={<ProfileManagement />} />
        <Route path="/dashboard/orders" element={<ManageOrders />} /> {/* Manage Orders Route */}
        <Route path="/dashboard/reports" element={<ManageReports />} /> {/* Manage Reports Route */}
        <Route path="/dashboard/payments" element={<ManagePayments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/customer" element={<CustomerDashboard />}>
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<ProfileManagement />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
