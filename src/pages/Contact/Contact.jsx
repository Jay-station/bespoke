import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const form = useRef(null);

  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8dp53qi",
        "template_sh2c5kd",
        form.current,
        "u24HxeK9mhoG0IkKL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccessMessageVisible(true);
          setTimeout(() => {
            setIsSuccessMessageVisible(false);
            e.target.reset();
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    service: "CyberSecurity",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="Contact">
      <h2 className="Contact__header">Contact us</h2>
      {isSuccessMessageVisible && (
        <div className="success-container">
          <div className="success-message">Inquiry sent!</div>
        </div>
      )}
      <form className="Contact__form" ref={form} onSubmit={sendEmail}>
        <div>
          <label className="Contact__label" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="Contact__input"
          />
        </div>
        <div>
          <label className="Contact__label" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="Contact__input"
          />
        </div>
        <div>
          <label className="Contact__label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="Contact__input"
          />
        </div>
        <div>
          <label className="Contact__label" htmlFor="companyName">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="Contact__input"
          />
        </div>
        <div>
          <label className="Contact__label" htmlFor="service">
            Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="Contact__input"
          >
            <option value="CyberSecurity">CyberSecurity</option>
            <option value="BlockChain">BlockChain</option>
          </select>
        </div>
        <div>
          <label className="Contact__label" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="Contact__textarea"
          ></textarea>
        </div>
        <button type="submit" className="Contact__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
