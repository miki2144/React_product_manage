import React, { useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    id: "",
    username: "",
    fullname: "",
    email: "",
    image: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: URL.createObjectURL(e.target.files[0]) });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.id) {
      setUsers(users.map((user) => (user.id === form.id ? form : user)));
    } else {
      setUsers([...users, { ...form, id: Date.now().toString() }]);
    }
    setForm({ id: "", username: "", fullname: "", email: "", image: "" });
  };

  const handleEdit = (user) => {
    setForm(user);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Manage Users</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleInputChange}
          placeholder="Username"
          required
          style={styles.input}
        />
        <input
          type="text"
          name="fullname"
          value={form.fullname}
          onChange={handleInputChange}
          placeholder="Full Name"
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
          style={styles.input}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleInputChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {form.id ? "Update" : "Create"}
        </button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  src={user.image}
                  alt={user.username}
                  style={styles.userImage}
                />
              </td>
              <td>{user.username}</td>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td style={styles.actionButtons}>
                <button onClick={() => handleEdit(user)} style={styles.editButton}>
                  Edit
                </button>
                <button onClick={() => handleDelete(user.id)} style={styles.deleteButton}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
  },
  form: {
    display: "grid",
    gap: "10px",
    marginBottom: "20px",
    justifyContent: "center",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
  },
  button: {
    padding: "10px",
    backgroundColor: "#1abc9c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    padding: "10px",
    backgroundColor: "#f4f4f4",
    fontSize: "14px",
  },
  td: {
    padding: "8px",
    borderBottom: "1px solid #ccc",
    fontSize: "14px",
  },
  userImage: {
    width: "40px",
    height: "40px",
    objectFit: "cover",
    borderRadius: "50%",
  },
  actionButtons: {
    display: "flex",
    gap: "8px",
  },
  editButton: {
    padding: "5px 10px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
};

export default ManageUsers;
