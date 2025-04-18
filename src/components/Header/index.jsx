import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

// Styles
import "../../styles/Header.css";

// Assets
import Star from "../../assets/icons/Star";
import accueilImg from "../../assets/header/menu-accueil.jpg";
import infoImg from "../../assets/header/menu-informations.jpg";
import progImg from "../../assets/header/menu-programmation.jpg";
import actImg from "../../assets/header/menu-activités.jpg";
import restauImg from "../../assets/header/menu-restauration.jpg";
import hebergImg from "../../assets/header/menu-herbergement.jpg";
import galerieImg from "../../assets/header/menu-galerie.jpg";
import WaveShapeMilieu from "../Wave-shape-milieu";
import MenuShape from "../../assets/svg/Menu-shape";

// Données
import { blue, pink, orange, green } from "../../datas/colors";

const routes = [
  {
    path: "/",
    label: "Accueil",
    image: accueilImg,
    color: blue,
    bgColor: "bg-blue",
  },
  {
    path: "/informations",
    label: "Informations",
    image: infoImg,
    color: pink,
    bgColor: "bg-pink",
  },
  {
    path: "/programmation",
    label: "Programmation",
    image: progImg,
    color: orange,
    bgColor: "bg-orange",
  },
  {
    path: "/activites",
    label: "Activités",
    image: actImg,
    color: green,
    bgColor: "bg-green",
  },
  {
    path: "/restauration",
    label: "Restauration",
    image: restauImg,
    color: pink,
    bgColor: "bg-pink",
  },
  {
    path: "/hebergement",
    label: "Hébergement",
    image: hebergImg,
    color: orange,
    bgColor: "bg-orange",
  },
  {
    path: "/galerie",
    label: "Galerie",
    image: galerieImg,
    color: green,
    bgColor: "bg-green",
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const location = useLocation();

  const currentPath = hoveredPath || location.pathname;
  const activeRoute = routes.find((route) => route.path === currentPath);

  return isOpen ? (
    <nav>
      <MenuShape />
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {activeRoute && (
        <div className={`menu-modale ${activeRoute.bgColor}`}>
          <div className="menu">
            {routes.map((route) => {
              const isHovered = hoveredPath === route.path;
              const isActive = location.pathname === route.path;

              const isHighlighted = isHovered || (!hoveredPath && isActive);

              // Style dynamique
              const textColor = isHighlighted ? "#FFFCF5" : "#DBDBDB";

              return (
                <NavLink
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsOpen(false)}
                  onMouseEnter={() => setHoveredPath(route.path)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className={`nav-link ${isHighlighted ? "active" : ""}`}
                >
                  <div
                    className={`lien title ${isHighlighted ? "highlighted" : "normal"}`}
                    style={{
                      color: textColor,
                      transition: "font-size 0.3s ease, color 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {isHighlighted && <Star />}
                    {route.label}
                  </div>
                </NavLink>
              );
            })}
          </div>

          {activeRoute && <WaveShapeMilieu color={activeRoute.color} />}

          {activeRoute && (
            <div className="img-lien">
              <img src={activeRoute.image} alt={activeRoute.label} />
            </div>
          )}
        </div>
      )}
    </nav>
  ) : (
    <nav>
      <MenuShape />
      <div className="hamburger" onClick={() => setIsOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Header;
