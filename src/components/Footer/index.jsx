import "../../styles/Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";

function Footer() {
  return (
    <section className="footer">
      <div className="logo-nav">
        <img src={logo} alt="" />
        <div className="nav-footer">
          <div className="nav-liste">
            <Link to="/informations" className="link">
              Informations
            </Link>
            <Link to="/programmation" className="link">
              Programmation
            </Link>
            <Link to="/activites" className="link">
              Activités
            </Link>
          </div>
          <div className="nav-liste">
            <Link to="/restauration" className="link">
              Restauration
            </Link>
            <Link to="/hebergement" className="link">
              Hébergement
            </Link>
            <Link to="/galerie" className="link">
              Galerie
            </Link>
          </div>
        </div>
      </div>
      <div className="trait-long"></div>
      <div className="credit">
        <p>
          Site web créé par Sabrina Le Gall{" "}
          <a
            href="https://minalg.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            (https://minalg.fr/)
          </a>
        </p>
      </div>
    </section>
  );
}

export default Footer;
