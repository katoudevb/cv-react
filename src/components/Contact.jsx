import "../components/Contact.css";
import React, { useState } from "react";
import heroBg from "../assets/images/contact-bg.jpg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Formulaire soumis:", { name, email, phone, subject, message });
  };

  return (
    <div className="contact-container">
      <h2>ME CONTACTER</h2>
      <h3>
        Pour me contacter en vue d'un entretien ou d'une future collaboration,
        merci de remplir le formulaire de contact.
      </h3>

      {/* Image de fond avec style inline */}
      <div
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      ></div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Numéro de téléphone :</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Sujet :</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          <button type="submit">Envoyer</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Mes coordonnées</h2>
        <p>
          <strong>Adresse :</strong> 40 Rue Laure Diebold, 69009 Lyon, France
        </p>
        <p>
          <strong>Téléphone :</strong> 06 20 30 40 50
        </p>
        <p>
          <strong>Carte Google :</strong>
          <iframe
            src="https://www.google.fr/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.7786657,4.7963986,16z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?hl=fr&entry=ttu&g_ep=EgoyMDI1MDQyOS4wIKXMDSoASAFQAw%3D%3D"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </p>
      </div>
    </div>
  );
}

export default Contact;
