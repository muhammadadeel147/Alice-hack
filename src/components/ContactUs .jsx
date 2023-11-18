// ContactUs.js
import React, { useState } from 'react';
import './ContactUs.css';
import img from "../Assets/NFT2.jpg"
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="contact-us-container">
      <div className="contact-image">
        {/* Replace the placeholder URL with your actual image URL */}
        <img src={img} alt="Contact" />
      </div>
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange(e, 'name')}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange(e, 'email')}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              value={formData.message}
              onChange={(e) => handleInputChange(e, 'message')}
              required
            ></textarea>
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
