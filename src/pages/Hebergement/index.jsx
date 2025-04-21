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
            préférentiel (-20% sur le tarif de base, soit environ 20€ par personne) et devra nous être communiqué avant le 30 avril.
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
        <div className="text-center">
          <p>
            <span className="pink">*</span>Les logements sont divisés en trois groupes : les Cottages, les Lodges et les Emplacements. Les emplacements sont réservés aux personnes qui viennent en van, camping-car et tente.
          </p>
          <p>
            Les lodges sont des grandes tentes aménagées pour 4 personnes qui contiennent des chambres avec lits et une cuisine. Ils sont moins chers que les cottages cependant les sanitaires se trouvent à l'extérieur à proximité (Cf photos ci-dessus). Possibilité de n'être que 2/3 personnes par lodge.
          </p>
          <p>
            Les cottages doivent impérativement contenir 5 personnes minimum, c'est pourquoi ils seront partagés. Ils sont constitués d'une chambre lit double, d'une chambre 3 lits simples et d'un convertible dans le salon (2 personnes). WC et douche inclus dans les cottages mais à partager.
          </p>
          <p>
            Comme vous pouvez le constater, ça va être un peu notre plan de table à nous (aussi complexe !), donc n'oubliez pas de nous prévenir si vous souhaitez utiliser un emplacement ou dormir dans un lodge afin qu'on puisse s'organiser au mieux.
          </p>
        </div>

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
