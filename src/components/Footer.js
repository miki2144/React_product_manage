import React from "react";
import "font-awesome/css/font-awesome.min.css"; // Ensure Font Awesome is imported

const Footer = () => {
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
    socialIcons: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginTop: "10px",
    },
    socialIcon: {
      color: "#fff", // Default color
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

  return (
    <footer style={styles.footer}>
      <div style={styles.footerSection}>
        <div>
          {/* Social Media Icons */}
          <div style={styles.socialIcons}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseOver={(e) => (e.currentTarget.style.color = "red")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseOver={(e) => (e.currentTarget.style.color = "red")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseOver={(e) => (e.currentTarget.style.color = "red")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              <i className="fa fa-tiktok"></i>
            </a>
            <a
              href="https://wa.me/+251963080716"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseOver={(e) => (e.currentTarget.style.color = "red")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              <i className="fa fa-whatsapp"></i>
            </a>
            <a
              href="https://github.com/miki2144"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseOver={(e) => (e.currentTarget.style.color = "red")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/woldemichael-debesaw-966b10336/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseOver={(e) => (e.currentTarget.style.color = "red")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <p style={styles.footerCopyright}>&copy; 2024 Woldemichael Debesaw. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
