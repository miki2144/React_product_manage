import React, { useState } from "react";

const ManagePayments = () => {
  const [payments, setPayments] = useState([]);
  const [payment, setPayment] = useState({
    orderId: "",
    amount: "",
    date: "",
    status: "",
    paymentType: "", // New field for payment method (Account, PayPal, etc.)
    accountNumber: "",
    accountHolder: "",
    paypalEmail: "", // PayPal email field
  });

  const handleInputChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const handlePaymentTypeChange = (e) => {
    setPayment({ ...payment, paymentType: e.target.value });
  };

  const handleCreate = () => {
    setPayments([...payments, { id: Date.now(), ...payment }]);
    setPayment({
      orderId: "",
      amount: "",
      date: "",
      status: "",
      paymentType: "",
      accountNumber: "",
      accountHolder: "",
      paypalEmail: "",
    });
  };

  const handleDelete = (id) => {
    setPayments(payments.filter((payment) => payment.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>Payment Management</h2>
      <form style={styles.form}>
        <input
          type="text"
          name="orderId"
          placeholder="Order ID"
          value={payment.orderId}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={payment.amount}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={payment.date}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        <select
          name="status"
          value={payment.status}
          onChange={handleInputChange}
          style={styles.input}
          required
        >
          <option value="">Select Status</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Failed">Failed</option>
        </select>

        {/* Payment Method Selector */}
        <select
          name="paymentType"
          value={payment.paymentType}
          onChange={handlePaymentTypeChange}
          style={styles.input}
          required
        >
          <option value="">Select Payment Type</option>
          <option value="Account">Bank Account</option>
          <option value="PayPal">PayPal</option>
        </select>

        {/* Conditionally render fields based on payment method */}
        {payment.paymentType === "Account" && (
          <>
            <input
              type="text"
              name="accountNumber"
              placeholder="Account Number"
              value={payment.accountNumber}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
            <input
              type="text"
              name="accountHolder"
              placeholder="Account Holder Name"
              value={payment.accountHolder}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </>
        )}

        {payment.paymentType === "PayPal" && (
          <input
            type="email"
            name="paypalEmail"
            placeholder="PayPal Email"
            value={payment.paypalEmail}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        )}

        <button type="button" onClick={handleCreate} style={styles.button}>
          Add Payment
        </button>
      </form>

      <ul style={styles.list}>
        {payments.map((payment) => (
          <li key={payment.id} style={styles.listItem}>
            <div>
              <p>Order ID: {payment.orderId}</p>
              <p>Amount: ${payment.amount}</p>
              <p>Date: {payment.date}</p>
              <p>Status: {payment.status}</p>
              <p>Payment Type: {payment.paymentType}</p>
              {payment.paymentType === "Account" && (
                <>
                  <p>Account Number: {payment.accountNumber}</p>
                  <p>Account Holder: {payment.accountHolder}</p>
                </>
              )}
              {payment.paymentType === "PayPal" && (
                <p>PayPal Email: {payment.paypalEmail}</p>
              )}
            </div>
            <button
              onClick={() => handleDelete(payment.id)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    minHeight: "100vh",
  },
  form: {
    display: "grid",
    gap: "10px",
    marginBottom: "20px",
    width: "100%",
    maxWidth: "500px",
  },
  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  },
  button: {
    padding: "12px",
    backgroundColor: "#1abc9c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    width: "100%",
    maxWidth: "500px",
  },
  listItem: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
    padding: "15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  deleteButton: {
    padding: "8px 16px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ManagePayments;
