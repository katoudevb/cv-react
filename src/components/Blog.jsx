import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./Banner";

const Blog = () => {
  return (
    <section className="blog-section py-5">
      <div className="container">
        <Banner
          imageUrl="banner.jpg"
          title="Footer Section"
          subtitle="Découvrez nos informations de contact"
        />
        <h2 className="text-center mb-4">BLOG</h2>
        <h3 className="text-center mb-4 d-inline-block border-bottom border-primary pb-2 mb-4">
          Retrouvez ici quelques articles sur le développement web.
        </h3>
        <div className="row">
          {/* Carte 1 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src="/images/coder.jpg"
                alt="Projet 1"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Coder son site en HTML/CSS</h5>
                <p className="card-text">Description du projet 1</p>
                <a href="#" className="btn btn-primary  ">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer bg-light text-black text-start">
                <p>Publié le 22 août 2022</p>
              </div>
            </div>
          </div>

          {/* Carte 2 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src="/images/croissance.jpg"
                alt="Projet 2"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Vendre ses produits sur le web</h5>
                <p className="card-text">Description du projet 2</p>
                <a href="#" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer bg-light text-black text-start">
                <p>Publié le 20 août 2022</p>
              </div>
            </div>
          </div>

          {/* Carte 3 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card">
              <img
                src="/images/google.jpg"
                alt="Projet 3"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Se positionner sur Google</h5>
                <p className="card-text">Description du projet 3</p>
                <a href="#" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer bg-light text-black text-start">
                <p>Publié le 1 août 2022</p>
              </div>
            </div>
          </div>

          {/* Carte 4 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/screens.jpg"
                alt="Projet 4"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Coder en responsive</h5>
                <p className="card-text">Description du projet 4</p>
                <a href="#" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer bg-light text-dark text-start">
                <p>Publié le 31 juillet 2022</p>
              </div>
            </div>
          </div>

          {/* Carte 5 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/seo.jpg"
                alt="Projet 5"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Techniques de référencement</h5>
                <p className="card-text">Description du projet 5</p>
                <a href="#" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer bg-light text-black text-start">
                <p>Publié le 30 juillet 2022</p>
              </div>
            </div>
          </div>

          {/* Carte 6 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="/images/technos.png"
                alt="Projet 6"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Apprendre à coder</h5>
                <p className="card-text">Description du projet 6</p>
                <a href="#" className="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div className="card-footer bg-light text-black text-start">
                <p>Publié le 12 juillet 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
