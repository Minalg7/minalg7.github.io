import React from "react";
import { useEffect } from "react";

// Composants
import WaveShapeHaut from "../../components/Wave-shape-haut";
import Banner from "../../components/Banner";
import ClickableImageMap from "../../components/ClickableImageMap";
import BandeauCadre from "../../components/Bandeau-cadre";
import CarrouselLogements from "../../components/Carrousel-logements";
import Pompom from "../../assets/svg/Pompom";
import FeuxRoseVertDroit from "../../assets/svg/Feux-rose-vert-droit";

// Styles
import "../../styles/Hebergement.css";

function Hebergement() {
  useEffect(() => {
    document.title = "Hébergement - Mariage Stéphie & Alain";
  }, []);

  return (
    <main>
      <Banner />
      <WaveShapeHaut />

      {/* Description hébergement */}
      <section className="description-hebergement bg-white fade-in-section">
        <Pompom className="pompom-hebergement" />
        <h2 className="text-center">
          Les <span className="pink title">hébergements</span> à disposition !
        </h2>
        <div className="text text-center">
          <p>
            Pour que vous puissiez profiter pleinement des festivités, chacun
            aura un logement qu'il devra en partie partager (
            <span className="pink">*</span>nous y reviendrons) pour la nuit du
            samedi soir. La mise à disposition se fera par les propriétaires à
            partir de 16h00 le samedi.
          </p>
          <p>
            Si vous souhaitez prolonger votre séjour, cela est possible à tarif
            préférentiel et devra nous être communiqué avant le 30 avril.
          </p>
        </div>
      </section>

      {/* Carrousel logements */}
      <CarrouselLogements />

      {/* Plan des logements */}
      <section className="plan-logements fade-in-section">
        <div className="feux-plan-hebergement">
          <FeuxRoseVertDroit />
          <h2 className="text-center">
            <span className="orange title">Organisation des</span> logements !
          </h2>
          <p className="italic text-center">
            Cliquez sur les zones pour plus de précisions.
          </p>
        </div>

        <ClickableImageMap />
        <p className="text-center">
          <span className="pink">*</span>Vous dormirez dans un cottage qui doit
          impérativement contenir 5 personnes minimum. Ils sont constitués d'une
          chambre lit double, d'une chambre 3 lits simples et d'un convertible
          dans le salon (2 personnes). WC et douche inclus dans les cottages
          mais à partager.
        </p>
      </section>

      <BandeauCadre>
        <div className="cadre-content colonne">
          <h2>Vos préférences sont les bienvenues !</h2>
          <p>
            Des propositions de répartition ? Des affinités avec certains
            invités ? Partagez-les nous au plus tôt !
          </p>
        </div>
      </BandeauCadre>
    </main>
  );
}

export default Hebergement;
