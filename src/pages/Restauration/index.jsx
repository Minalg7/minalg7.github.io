import { useState, useEffect } from "react";

// Composants
import WaveShapeHaut from "../../components/Wave-shape-haut";
import Banner from "../../components/Banner";
import Tabs13 from "../../components/Tabs-1-3";
import CardMenu from "../../components/Card-menu";

// Styles
import "../../styles/Restauration.css";

//Assets
import vinHonneur from "../../assets/restauration/vin-honneur.jpg";
import brunch from "../../assets/restauration/brunch.jpg";
import buissonGauche from "../../assets/buisson-gauche-bas.png";
import buissonDroit from "../../assets/buisson-droit.png";
import assietesImg from "../../assets/restauration/assiettes.jpg";
import buffetImg from "../../assets/restauration/buffet.jpg";
import ateliersImg from "../../assets/restauration/ateliers.jpg";
import dessertsImg from "../../assets/restauration/desserts.jpg";
import FeuxVertRose from "../../assets/svg/Feux-vert-rose";
import Pompom from "../../assets/svg/Pompom"

// Données
import {
  listeVinBoissons,
  listeVinNourritures,
  listeBrunchBoissons,
  listeBrunchNourritures,
  assiettes,
  buffet,
  ateliers,
  desserts,
} from "../../datas/menu";

function Restauration() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  useEffect(() => {
    document.title = "Restauration - Mariage Stéphie & Alain"
  }, [])

  return (
    <main>
      {/* Bannière */}
      <Banner />
      <WaveShapeHaut />

      <section className="description-menu fade-in-section">
        <FeuxVertRose />
        <h2>
          Le <span className="orange title text-center">menu</span> du week-end
          !
        </h2>
        <div className="text text-center">
          <p>
            Afin de bien commencer cette belle journée, retrouvons nous après la
            cérémonie pour un vin d'honneur gourmand.
          </p>
          <p>
            Dès 18h00, nos stands s'ouvrirons afin de reprendre les forces
            dûment dépensées pendant vos activités. Vous aurez jusqu'à 21h00
            pour savourer chaque bouchée... avant de laisser place à la danse !
          </p>
          <p>
            Et pour les plus gourmands, rendez-vous à 22h30 pour un dessert à
            déguster entre deux pas endiablés !
          </p>
          <p>
            Sucré, salé… pourquoi choisir ? Rejoignez-nous le dimanche à 11h00
            pour un brunch qui met tout le monde d’accord !
          </p>
        </div>
      </section>

      <section className="tabs fade-in-section">
        <Pompom className="pompom-menu" />
        <ul className="tabs-nav-container">
          <li
            className={toggle === 1 ? "tabs-title-active" : "tabs-title"}
            onClick={() => updateToggle(1)}
          >
            Vin d'honneur
          </li>
          <li
            className={toggle === 2 ? "tabs-title-active" : "tabs-title"}
            onClick={() => updateToggle(2)}
          >
            Restauration
          </li>
          <li
            className={toggle === 3 ? "tabs-title-active" : "tabs-title"}
            onClick={() => updateToggle(3)}
          >
            Brunch
          </li>
        </ul>
        <Tabs13
          categoriesBoissons={listeVinBoissons}
          categoriesNourritures={listeVinNourritures}
          cover={vinHonneur}
          classToggle={toggle === 1 ? "show-content" : "tabs-content"}
        />
        <div className={toggle === 2 ? "show-content tabs-stands" : "tabs-content"}>
          <CardMenu menu={assiettes} typeMenu="Assiettes" cover={assietesImg} bgColor="bg-pink" borderColor="border-pink" className="one"/>
          <CardMenu menu={buffet} typeMenu="Buffet" cover={buffetImg} bgColor="bg-orange" borderColor="border-orange" className="two"/>
          <CardMenu menu={ateliers} typeMenu="Ateliers" cover={ateliersImg} bgColor="bg-green" borderColor="border-green" className="three"/>
          <CardMenu menu={desserts} typeMenu="Desserts" cover={dessertsImg} bgColor="bg-blue" borderColor="border-blue" className="four"/>
        </div>

        <Tabs13
          categoriesBoissons={listeBrunchBoissons}
          categoriesNourritures={listeBrunchNourritures}
          cover={brunch}
          classToggle={toggle === 3 ? "show-content" : "tabs-content"}
        />
      </section>

      <div className="illustrations-bas">
        <img src={buissonGauche} alt="" className="img-bas1" />
        <img src={buissonDroit} alt="" className="img-bas2" />
      </div>
    </main>
  );
}

export default Restauration;
