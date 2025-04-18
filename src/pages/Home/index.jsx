import { useEffect } from "react";

// Composants
import HeroBanner from "../../components/Hero-banner";
import Timer from "../../components/Timer";
import Introduction from "../../components/Introduction";
import EncartInfo from "../../components/Encart-info";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import DescriptionImg from "../../components/Description-img";
import BandeauCadre from "../../components/Bandeau-cadre";
import WaveShape from "../../components/Wave-shape";
import ActivitesAccueil from "../../components/Activites-accueil";

// Assets
import accueilProgrammeGrande from "../../assets/accueil/accueil-programme-grande.jpg";
import accueilProgrammePetite from "../../assets/accueil/accueil-programme-petite.jpg";
import accueilRestaurationGrande from "../../assets/accueil/accueil-restauration-grande.jpg";
import accueilRestaurationPetite from "../../assets/accueil/accueil-restauration-petite.jpg";
import accueilHebergementGrande from "../../assets/accueil/accueil-hebergement-grande.jpg";
import accueilHebergementPetite from "../../assets/accueil/accueil-hebergement-petite.jpg";
import Pompon from "../../assets/svg/Pompom";
import Rubans from "../../assets/svg/Rubans";
import OrigamiOrange from "../../assets/svg/Origami-orange";
import OrigamiRose from "../../assets/svg/Origami-rose";

//Styles
import "../../styles/Home.css"

// Données
import { white, blue, green } from "../../datas/colors";

function Home() {
  useEffect(() => {
    document.title = "Accueil - Mariage Stéphie & Alain";
  }, []);

  return (
    <main>
      <HeroBanner />
      <Timer />
      <WaveShape bgColor={white} />
      <Introduction />
      <EncartInfo />
      <div className="text-button-center">
        <p>Des questions ? C'est bien normal, on a presque tout mis ici.</p>
        <Button link="/informations" color={blue} borderColor="button-blue" />
      </div>
      <Slider />

      <div className="sticky-stack-wrapper fade-in-section">
        <div className="sticky-slide">
          <DescriptionImg
            title="Programmation du week-end !"
            imgPosition="img-right"
            link="/programmation"
            imgGrande={accueilProgrammeGrande}
            imgPetite={accueilProgrammePetite}
            bgColor="bg-pink"
            borderColor="border-pink"
          >
            <Rubans />
            <p>Envie de savoir ce qui vous attend lors de notre mariage ?</p>
            <p>
              Cliquez ici pour découvrir toute la programmation et les détails
              du weekend.
            </p>
          </DescriptionImg>
        </div>

        <div className="sticky-slide">
          <DescriptionImg
            title="Liste des stands !"
            imgPosition="img-left"
            link="/restauration"
            imgGrande={accueilRestaurationGrande}
            imgPetite={accueilRestaurationPetite}
            bgColor="bg-orange"
            borderColor="border-orange"
          >
            <Pompon className="pompom-accueil" />
            <p>
              Découvrez notre sélection de stand de restauration pour satisfaire
              vos envies. De la cuisine locale aux saveurs exotiques, chaque
              bouchée vous fera voyager.
            </p>
            <p>Cliquez ici pour exciter vos papilles.</p>
          </DescriptionImg>
        </div>

        <div className="sticky-slide">
          <DescriptionImg
            title="Votre hébergement sur place !"
            imgPosition="img-right"
            link="/hebergement"
            imgGrande={accueilHebergementGrande}
            imgPetite={accueilHebergementPetite}
            bgColor="bg-green"
            borderColor="border-green"
          >
            <OrigamiRose />
            <p>
              Le domaine dispose de plus de 200 couchages, jouit d'un cadre
              agréable et d'une proximité avec le Puy du Fou. Nous prenons en
              charge la soirée du samedi, des prolongations sont possibles.
            </p>
            <p>Cliquez ici avant le 30 avril.</p>
            <OrigamiOrange />
          </DescriptionImg>
        </div>
      </div>
  
      <WaveShape bgColor={green} />

      <ActivitesAccueil />

      <BandeauCadre>
        <div className="cadre-content cadre-accueil">
          <h2>Aidez-nous à capturer les moments de cette belle journée !</h2>
          <Button link="/galerie" color={blue} borderColor="button-blue" />
        </div>
      </BandeauCadre>
    </main>
  );
}

export default Home;
