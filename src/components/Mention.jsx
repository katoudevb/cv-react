import React from "react";
import { Helmet } from "react-helmet";
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

const MentionsLegales = () => {
  return (
    <div className="container my-5">
      <h1 className="mb-4">Mentions légales</h1>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Header>L'éditeur du site</Accordion.Header>
          <Accordion.Body>
            <h2>
              <FaUser className="me-2 text-dark" />
              John Doe
            </h2>
            <p>
              <FaMapMarkerAlt className="me-2 text-dark" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=12+rue+des+Développeurs,+75010+Paris"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-decoration-none"
              >
                40 Rue Laure Diebold, 69009 Lyon,France
              </a>
            </p>

            <p>
              <FaEnvelope className="me-2 text-dark" />
              <a
                href="mailto:kat.formation@email.com"
                className="text-primary text-decoration-none"
              >
                john.doe@gmail.com
              </a>
            </p>
          </Accordion.Body>
        </Card>

        <Card>
          <Accordion.Header>L'hébergeur du site</Accordion.Header>
          <Accordion.Body>
            <h2>Always Data</h2>
            <p>
              <p>
                91 Rue du Faubourg Saint Honoré
                <br />
                75008 Paris
              </p>
              <FaGlobe style={{ marginRight: "10px" }} />
              <a
                href="https://www.alwaysdata.com/fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.alwaysdata.com
              </a>
            </p>
          </Accordion.Body>
        </Card>

        <Card>
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <p>Site développé par John Doe, étudiant du CEF.</p>
            Les images proviennent de{" "}
            <a
              href="https://pixabay.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixabay
            </a>
            .
          </Accordion.Body>
        </Card>
      </Accordion>
    </div>
  );
};

export default MentionsLegales;
