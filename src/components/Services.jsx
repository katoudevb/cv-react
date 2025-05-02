import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Banner";

const Services = () => {
  return (
    <section className="services-section py-5">
      <div className="container">
        <Banner
          imageUrl="banner.jpg"
          title="Footer Section"
          subtitle="Découvrez nos informations de contact"
        />
        <h2 className="text-center mb-4">MON OFFRES DE SERVICES</h2>
        <h3 className="text-center mb-4 d-inline-block border-bottom border-primary pb-2 mb-4">
          Voici les prestations sur lesquelles je peux intervenir.
        </h3>
        <div className="row">
          {/* Carte 1 */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">UX DESIGN</h4>
                <p className="card-text">
                  L'<strong>UX Design</strong> est une méthode de conception
                  centrée sur l'utilisateur. Son but est d'offrir une expérience
                  de navigation optimale à l'internaute.
                </p>
              </div>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">DÉVELOPPEMENT WEB</h4>
                <p className="card-text">
                  Le <strong>développement de sites web</strong> repose sur
                  l'utilisation des langages HTML,CSS, JavaScript et PHP.
                </p>
              </div>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">RÉFÉRENCEMENT</h4>
                <p className="card-text">
                  Le <strong>référencement naturel d'un site</strong>, aussi
                  appelé SEO, consiste à mettre des tehcniques en oeuvre pour
                  maéliorer sa position dans les résultats des moteurs de
                  recherche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
