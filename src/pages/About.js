import React, { useState, useEffect } from "react";

const About = () => {
  // State to track the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust styles based on the window width
  const isMobile = windowWidth <= 768;

  return (
    <div style={isMobile ? mobileStyles.container : styles.container}>
      <h1 style={isMobile ? mobileStyles.heading : styles.heading}>About Us</h1>

      <section style={isMobile ? mobileStyles.section : styles.section}>
        <h2 style={isMobile ? mobileStyles.subheading : styles.subheading}>Who We Are</h2>
        <p style={isMobile ? mobileStyles.paragraph : styles.paragraph}>
          Welcome to <strong>YourStore</strong>, your one-stop destination for the best online shopping experience. We are a passionate team focused on bringing the latest trends and high-quality products to your doorstep. Whether you’re looking for fashion, electronics, or home essentials, we have you covered.
        </p>
      </section>

      <section style={isMobile ? mobileStyles.section : styles.section}>
        <h2 style={isMobile ? mobileStyles.subheading : styles.subheading}>Our Mission</h2>
        <p style={isMobile ? mobileStyles.paragraph : styles.paragraph}>
          Our mission is simple: to provide a seamless shopping experience, exceptional customer service, and high-quality products that help enhance the lives of our customers. We strive to deliver value, convenience, and satisfaction with every purchase.
        </p>
      </section>

      <section style={isMobile ? mobileStyles.section : styles.section}>
        <h2 style={isMobile ? mobileStyles.subheading : styles.subheading}>Our Values</h2>
        <ul style={isMobile ? mobileStyles.list : styles.list}>
          <li style={isMobile ? mobileStyles.listItem : styles.listItem}><strong>Quality:</strong> We only offer the best products sourced from trusted suppliers.</li>
          <li style={isMobile ? mobileStyles.listItem : styles.listItem}><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority.</li>
          <li style={isMobile ? mobileStyles.listItem : styles.listItem}><strong>Integrity:</strong> We believe in being transparent and honest in all our dealings.</li>
          <li style={isMobile ? mobileStyles.listItem : styles.listItem}><strong>Innovation:</strong> We are always looking for new ways to improve our service and offerings.</li>
        </ul>
      </section>

      <section style={isMobile ? mobileStyles.section : styles.section}>
        <h2 style={isMobile ? mobileStyles.subheading : styles.subheading}>Meet The Team</h2>
        <p style={isMobile ? mobileStyles.paragraph : styles.paragraph}>
          Our team is dedicated to bringing you the best online shopping experience. Here's a brief introduction:
        </p>
        <div style={isMobile ? mobileStyles.teamContainer : styles.teamContainer}>
          <div style={isMobile ? mobileStyles.teamMember : styles.teamMember}>
            <h3 style={isMobile ? mobileStyles.teamMemberTitle : styles.teamMemberTitle}>Jane Doe</h3>
            <p style={isMobile ? mobileStyles.teamMemberRole : styles.teamMemberRole}>CEO & Founder</p>
            <p style={isMobile ? mobileStyles.teamMemberDescription : styles.teamMemberDescription}>
              With a passion for e-commerce and a vision to create a customer-centric platform, Jane leads the team with dedication and innovation.
            </p>
          </div>
          <div style={isMobile ? mobileStyles.teamMember : styles.teamMember}>
            <h3 style={isMobile ? mobileStyles.teamMemberTitle : styles.teamMemberTitle}>John Smith</h3>
            <p style={isMobile ? mobileStyles.teamMemberRole : styles.teamMemberRole}>COO</p>
            <p style={isMobile ? mobileStyles.teamMemberDescription : styles.teamMemberDescription}>
              John is responsible for overseeing daily operations and ensuring a smooth customer experience.
            </p>
          </div>
        </div>
      </section>

      <section style={isMobile ? mobileStyles.section : styles.section}>
        <h2 style={isMobile ? mobileStyles.subheading : styles.subheading}>Contact Us</h2>
        <p style={isMobile ? mobileStyles.paragraph : styles.paragraph}>
          If you have any questions or need support, feel free to reach out to us at <strong>support@yourstore.com</strong>
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f4f4f9',
  },
  heading: {
    textAlign: 'center',
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
  },
  section: {
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    fontSize: '16px',
    marginBottom: '10px',
    color: '#555',
  },
  teamContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  teamMember: {
    width: '45%',
    padding: '15px',
    backgroundColor: '#fafafa',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  teamMemberTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
  },
  teamMemberRole: {
    fontSize: '16px',
    color: '#777',
    marginBottom: '15px',
  },
  teamMemberDescription: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.5',
  },
};

// Mobile responsive styles
const mobileStyles = {
  container: {
    padding: '10px',
  },
  section: {
    marginBottom: '20px',
    padding: '15px',
  },
  heading: {
    fontSize: '28px',
  },
  subheading: {
    fontSize: '22px',
  },
  paragraph: {
    fontSize: '14px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    fontSize: '14px',
  },
  teamContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  teamMember: {
    width: '90%',
    marginBottom: '20px',
  },
  teamMemberTitle: {
    fontSize: '18px',
  },
  teamMemberRole: {
    fontSize: '14px',
  },
  teamMemberDescription: {
    fontSize: '12px',
  },
};

export default About;
