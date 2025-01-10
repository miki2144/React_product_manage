import React, { useState } from "react";

const ProfileManagement = () => {
  const [profile, setProfile] = useState({
    username: "admin",
    fullname: "Admin User",
    email: "admin@example.com",
    image: "",
  });

  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setProfile({ ...profile, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile update logic here
    console.log("Profile updated", profile);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Profile Management</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          value={profile.username}
          onChange={handleInputChange}
          placeholder="Username"
          style={styles.input}
          required
        />
        <input
          type="text"
          name="fullname"
          value={profile.fullname}
          onChange={handleInputChange}
          placeholder="Full Name"
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleInputChange}
          placeholder="Email"
          style={styles.input}
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Update Profile
        </button>
      </form>
      {profile.image && (
        <div style={styles.profileImageContainer}>
          <img
            src={profile.image}
            alt="Profile"
            style={styles.profileImage}
          />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
  },
  heading: {
    fontSize: "1.8em",
    marginBottom: "20px",
  },
  form: {
    display: "grid",
    gap: "10px",
    marginBottom: "20px",
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
  profileImageContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "50%",
  },
};

export default ProfileManagement;
