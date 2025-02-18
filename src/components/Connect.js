import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import emailjs from "@emailjs/browser";


const Connect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading , setLoading]= useState (false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading (true);
    emailjs
      .send(
        "service_bcns4xn", // Replace with your EmailJS Service ID
        "template_dqo7q8i", // Replace with your EmailJS Template ID
        {
          from_name: formData.name+ " "+ formData.email,  // Ensure this is included
          to_name: "Surbhi",  // Change if needed
          message: formData.message,
        },
        "xHhUMtFAjZGs77P3T" // Replace with your EmailJS Public Key
      )
      .then((response) => {
        setLoading(false);
        alert(`\n\nThank you for reaching out!\n\nI appreciate your message and will review it shortly. I will get back to you as soon as possible.\n\nBest regards,\nSurbhi`);
      })
      .catch((error) => {
        setLoading(false);
        console.log("FAILED...", error);
      });
  };

  return (
    <div>
      <Navbar />
      <div className='row vh-100 custom-Font'>
        <div className='col-md-4 background-dark h-100 text-light text-start p-5'>
          <h1>Connect With Me </h1>
          <hr />
          <div>
            <div className='mt-5'>
              <p>email: astsurbhisinha@gmail.com</p>
              <p>github: <a href="https://github.com/Surbhi-sinha" className='text-decoration-none text-reset'>https://github.com/Surbhi-sinha</a></p>
              <p>Website: <a href="https://surbhi-portfolio-beige.vercel.app/" className='text-decoration-none text-reset'>Surbhi-Sinha</a></p>
            </div>

            <div className='mt-5'>
              <p>Find my resume here &nbsp;
                <a href="https://drive.google.com/file/d/17UrmbOJ59NIQjMoj-_DZZcPYEYXwdOJW/view?usp=sharing" className='text-reset'>
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </p>
            </div>

            <hr />
            <h3 className='mt-5'>
              Follow me on
            </h3>
            <div>
              <a href="https://github.com/Surbhi-sinha" className='text-decoration-none text-reset'>
                <FontAwesomeIcon icon={faGithub} size='2x' className='m-2' />
              </a>
              <a href="https://www.linkedin.com/in/surbhi-sinha-554902176/" className='text-decoration-none text-reset'>
                <FontAwesomeIcon icon={faLinkedin} size='2x' className='m-2' />
              </a>
              <a href="https://medium.com/@astsurbhisinha/about" className='text-decoration-none text-reset'>
                <FontAwesomeIcon icon={faMedium} size='2x' className='m-2' />
              </a>
            </div>

          </div>
        </div>
        <div className='col-md-8 background-left h-100 text-start'>
          <div className='p-5 m-5 background-connect-form'>
          
          <form onSubmit={handleSubmit}>
            <div className='form-label mt-2 fs-5'>Your Name:</div>
            <input type="text" name="name" placeholder="Helen Doe" onChange={handleChange} className='form-input w-100'required />
            
            <div className='form-label mt-3 fs-5'>Your Email:</div>
            <input type="email" name="email" placeholder="HelenDoe@gmail.com" onChange={handleChange} 
            className='form-input w-100' required />

            <div className='form-label mt-3 fs-5'>Message:</div>
            <textarea name="message" className='form-input w-100' rows='8' placeholder="Greetings of the Day!" onChange={handleChange} required />
            
            <div>
            <button type="submit" className='button-connect mt-3'>
            {loading ? <span className="spinner-border spinner-border-sm"></span> : "Send Message"}
            </button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect
