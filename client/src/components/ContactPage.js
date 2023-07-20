import React from "react";
import ContactForm from "../forms/ContactForm";

const ContactPage = () => {
  const contactPageStyle = {
    fontFamily: "Verdana, Geneva, sans-serif",
    margin: "20px",
    padding: "10px",
    backgroundColor: "#fec9c9",
    color: "#333",
    borderRadius: "10px", // 모서리가 둥근 테두리
    border: "1px solid #1190",
  };

  return (
    // <div style={contactPageStyle} className="contact-page">
    <div className="contact-page">
      {/* <p>
        Hello! Are you looking to get in touch with us? We welcome your
        inquiries anytime! Thank you for visiting our Contact Page. Please feel
        free to reach out to us with any questions, inquiries about
        partnerships, collaborations, product or service queries, or any other
        matter. We are ready to assist you to the best of our abilities.
      </p>
      <p>
        If you have any questions or concerns, please contact us using the
        following contact information:
      </p>
      <ul>
        <li>Phone: [Insert Phone Number]</li>
        <li>Email: [Insert Email Address]</li>
        <li>Address: [Insert Address]</li>
      </ul>
      <p>
        Alternatively, you can fill out the form below and send it to us. We
        will respond promptly:
      </p> */}
      <ContactForm />
      {/* <p>
        We assure you that we will respond to your inquiry promptly and provide
        you with a friendly and helpful response. Thank you for reaching out to
        us, and we look forward to serving you.
      </p> */}
    </div>
  );
};

export default ContactPage;
