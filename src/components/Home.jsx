import "../components/Home.css";
import React from "react";
import heroBg from "../assets/images/hero-bg.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      {/* Section Home avec image de fond */}
      <section className="Home">
        <div className="">
          <div className="overlay"></div>
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <a href="#about" className="btn btn-primary mt-3">
            En savoir plus
          </a>
        </div>
      </section>

      {/* Image de fond avec style inline */}
      <div
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      ></div>

      {/* Section À propos */}
      <section id="about" className="about-section py-5">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <h3 className="border-bottom border-primary d-inline-block pb-2 mb-4">
              À propos
            </h3>
            <p>
              Passionné par l'informatique et les nouvells technologies, j'ai
              suivi une formation d'<strong>intégrateur-développeur web</strong>{" "}
              au CEF. Au cours de cette formation, j'ai pu acquérir des bases
              solides pour travailler dans le domaine du{" "}
              <strong>développement web</strong>.
              <br />
              <br />
              Basé à Lyon, je suis en recherche d'une alternance au sein d'une
              agence digitale pour consolider ma formation de{" "}
              <strong>développeur web full stack</strong>.
              <br />
              <br />
              J'accorde une attention particulière à la qualité du code que
              j'écris et je respecte les bonnes pratiques du web.
            </p>
          </div>
          <div className="col-md-8">
            <img
              src="/images/john-doe-about.jpg"
              alt="John Doe"
              className="img-fluid rounded-circle mb-3"
            />
            <h4>Compétences</h4>
            <p>HTML5</p>
            <div className="progress mb-3">
              <div className="progress-bar bg-danger" style={{ width: "90%" }}>
                90%
              </div>
            </div>
            <p>CSS3</p>
            <div className="progress mb-3">
              <div className="progress-bar bg-info" style={{ width: "80%" }}>
                80%
              </div>
            </div>
            <p>JavaScript</p>
            <div className="progress mb-3">
              <div className="progress-bar bg-warning" style={{ width: "70%" }}>
                70%
              </div>
            </div>
            <p>PHP</p>
            <div className="progress mb-3">
              <div className="progress-bar bg-success" style={{ width: "60%" }}>
                60%
              </div>
            </div>
            <p>React</p>
            <div className="progress mb-3">
              <div className="progress-bar bg-primary" style={{ width: "50%" }}>
                50%
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
