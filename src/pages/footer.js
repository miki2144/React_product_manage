import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerSection}>
        {/* COMPANY Section */}
        <div>
          <p style={styles.footerTitle}>COMPANY</p>
          <ul style={styles.footerList}>
            <li>Home</li>
            <a href="https://www.facebook.com" target="_blank" style={styles.socialIcon}><i className="fa fa-facebook">facebook</i></a>

            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* GET IN TOUCH Section */}
        <div>
          <p style={styles.footerTitle}>GET IN TOUCH</p>
          <ul style={styles.footerList}>
            <li>+251 963080716</li>
            <li>mikidebesaw@gmail.com</li>
            <li>LinkedIn</li>


{/* Social Media Icons */}
{/* <div style={styles.socialIcons}>
          <a href="https://www.facebook.com" target="_blank" style={styles.socialIcon}><i className="fa fa-facebook"></i></a>
          <a href="https://www.instagram.com" target="_blank" style={styles.socialIcon}><i className="fa fa-instagram"></i></a>
          <a href="https://www.tiktok.com" target="_blank" style={styles.socialIcon}><i className="fa fa-tiktok"></i></a>
          <a href="https://wa.me/+251963080716" target="_blank" style={styles.socialIcon}><i className="fa fa-whatsapp"></i></a>
        </div> */}
          </ul>
        </div>
      </div>

      <p>&copy; 2024 Your E-Commerce Website. All rights reserved.</p>
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
};

export default Footer;
