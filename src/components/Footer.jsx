import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-black pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Colonne 1 : Infos développeur */}
          <div className="col-md-3">
            <h5>John Doe</h5>
            <p>
              40 Rue Laure Diebold
              <br />
              69009 Lyon,France
            </p>
            <p>Téléphone : 06 20 30 40 50</p>
            <div className="d-flex justify-content-start gap-3 mt-2 align-items-center">
              <a
                href="https://github.com/github-john-doe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black fs-4"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black fs-4"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black fs-4"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="col-md-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/">À propos</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/mention">Mentions légales</Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="col-md-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#proj1" className="text-black">
                  Fresh food
                </a>
              </li>
              <li>
                <a href="#proj2" className="text-black">
                  Restaurant Akira
                </a>
              </li>
              <li>
                <a href="#proj3" className="text-black">
                  Espace bien-être
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 */}
          <div className="col-md-3">
            <h5>Mes derniers articles</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#article1" className="text-black">
                  Coder son site en HTML/CSS
                </a>
              </li>
              <li>
                <a href="#article2" className="text-black">
                  Vendre ses produits sur le web
                </a>
              </li>
              <li>
                <a href="#article3" className="text-black">
                  Se positionner sur Google
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center bg-dark text-white pt-5 pb-4">
          <p>&copy; {new Date().getFullYear()} By John Doe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
