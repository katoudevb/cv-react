import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Realisations = () => {
  return (
    <section id="realisations" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">PORTFOLIO</h2>
        <h3 className="text-center mb-4 d-inline-block border-bottom border-primary pb-2 mb-4">
          Voici quelques-unes de mes réalisations.
        </h3>
        <div className="row">
          {/* Projet 1 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="/images/fresh-food.jpg"
                className="card-img-top"
                alt="Projet 1"
              />
              <div className="card-body">
                <h5 className="card-title">Fresh food</h5>
                <p className="card-text">
                  Réalisation d'un site avec commande en ligne.
                </p>
                <a href="#" className="btn btn-primary">
                  Voir
                </a>
                <div className="card-footer bg-light text-black text-center">
                  <p>Site réalisé avec PHP et MySQL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projet 2 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="/images/restaurant-japonais.jpg"
                className="card-img-top"
                alt="Projet 2"
              />
              <div className="card-body">
                <h5 className="card-title">Restaurant Akira</h5>
                <p className="card-text">Réalisation d'un site vitrine.</p>
                <a href="#" className="btn btn-primary">
                  Voir
                </a>
                <div className="card-footer bg-light text-black text-center">
                  <p>Site réalisé avec WordPress</p>
                </div>
              </div>
            </div>
          </div>

          {/* Projet 3 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm">
              <img
                src="/images/espace-bien-etre.jpg"
                className="card-img-top"
                alt="Projet 3"
              />
              <div className="card-body">
                <h5 className="card-title">Espace bien-être</h5>
                <p className="card-text">
                  Réalisation d'un site vitrine pour un praticien de bien-être.
                </p>
                <a
                  href="/images/espace-bien-etre.jpg"
                  className="btn btn-primary"
                >
                  Voir
                </a>
                <div className="card-footer bg-light text-black text-center">
                  <p>Site réalisé en HTML/CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Realisations;
