import React, { useState } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewProduct({ ...newProduct, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCreate = () => {
    // Check if all required fields are filled
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      setErrorMessage("All fields are required.");
      return;
    } else {
      setErrorMessage(""); // Clear error message if all fields are filled
    }

    if (editingProduct) {
      setProducts(
        products.map((product) =>
          product.id === editingProduct.id ? { ...product, ...newProduct } : product
        )
      );
      setEditingProduct(null);
    } else {
      setProducts([...products, { id: Date.now(), ...newProduct }]);
    }
    setNewProduct({ name: "", price: "", description: "", image: "" });
  };

  const handleEdit = (product) => {
    setNewProduct(product);
    setEditingProduct(product);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const isFormValid = newProduct.name && newProduct.price && newProduct.image;

  return (
    <div style={styles.container}>
      <h2>Manage Products</h2>
      <form style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
          style={styles.input}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newProduct.description}
          onChange={handleInputChange}
          style={styles.textarea}
        />
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          style={styles.input}
        />
        {errorMessage && <p style={styles.error}>{errorMessage}</p>}
        <button
          type="button"
          onClick={handleCreate}
          style={styles.button}
          disabled={!isFormValid} // Disable button if form is not valid
        >
          {editingProduct ? "Update Product" : "Add Product"}
        </button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    style={styles.productImage}
                  />
                )}
              </td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
              <td style={styles.actionButtons}>
                <button
                  onClick={() => handleEdit(product)}
                  style={styles.editButton}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  style={styles.deleteButton}
                >
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
    maxWidth: "600px",
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
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  productImage: {
    width: "40px", // Smaller image size
    height: "40px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  actionButtons: {
    display: "flex",
    gap: "8px", // Reduced gap
  },
  editButton: {
    padding: "5px 10px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  "@media (max-width: 768px)": {
    container: {
      padding: "15px", // Reduced padding for mobile
    },
    form: {
      display: "block",
    },
    input: {
      width: "100%",
    },
    table: {
      fontSize: "12px",
    },
    actionButtons: {
      flexDirection: "column",
    },
    productImage: {
      width: "35px", // Smaller image on mobile
      height: "35px",
    },
  },
};

export default ManageProducts;
