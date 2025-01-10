import React from "react";
import "font-awesome/css/font-awesome.min.css"; // Ensure Font Awesome is imported

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerSection}>
        {/* COMPANY Section */}
        <div>
          <p style={styles.footerTitle}>COMPANY</p>
          <ul style={styles.footerList}>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* GET IN TOUCH Section */}
        <div>
          <p style={styles.footerTitle}>GET IN TOUCH</p>
          <ul style={styles.footerList}>
            <li>+251 963080716</li>
            <li>mikidebesaw@gmail.com</li>
            <li>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div style={styles.socialIcons}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <i className="fa fa-tiktok"></i>
            </a>
            <a href="https://wa.me/+251963080716" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <i className="fa fa-whatsapp"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <i className="fa fa-github"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <p style={styles.footerCopyright}>&copy; 2024 Your E-Commerce Website. All rights reserved.</p>
    </footer>
  );
};

// Styles
const styles = {
  footer: {
    textAlign: "center",
    padding: "30px 20px",
    backgroundColor: "#282c34",
    color: "white",
    marginTop: "20px",
  },
  footerSection: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  footerTitle: {
    fontSize: "1.2em",
    fontWeight: "500",
    marginBottom: "10px",
  },
  footerList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    listStyleType: "none",
    padding: "0",
    color: "#ddd",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
  },
  socialIcon: {
    color: "#ddd",
    fontSize: "1.5em",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  footerCopyright: {
    marginTop: "20px",
    fontSize: "0.9em",
    color: "#ddd",
  },
};

export default Footer;