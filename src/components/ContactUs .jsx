// ContactUs.js
import React from 'react';
import './ContactUs.css'; // Make sure to include the CSS file
import img from "../Assets/banner-05.png"

const ContactUs = () => {
  return (
    <>
   
    <div className="container">
      <div className="content">
        <div className="left-side">
       
          <img src={img} alt="Contact" />
        </div>
        <div className="right-side">
          
          <div className="topic-text">Send us a message</div>
          <p>
            If you have any work from me or any types of queries related to my tutorial,
            you can send me a message from here. It's my pleasure to help you.
          </p>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-box message-box"></div>
          
              <input type="submit" value="Send Now"className='button' />
          
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
