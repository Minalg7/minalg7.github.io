import "../../styles/Activites-accueil.css";
import Activite1Accueil from "../../assets/accueil/activité1-accueil.jpg"
import Activite2Accueil from "../../assets/accueil/activité2-accueil.jpg"
import Activite3Accueil from "../../assets/accueil/activité3-accueil.jpg"
import Button from "../Button";
import FeuxRoseOrange from "../../assets/svg/Feux-rose-orange";
import FeuxBleuVertBas from "../../assets/svg/Feux-bleu-vert-bas";

const blue = "#294069";

function ActivitesAccueil() {
  return (
    <section className="activites-accueil fade-in-section">
      <FeuxRoseOrange className="feux-rose-orange-accueil"/>
      <div className="eventail-titre">
        <div className="eventail-img">
          <img src={Activite3Accueil} alt="" className="img-activite act3"/>
          <img src={Activite2Accueil} alt="" className="img-activite act2"/>
          <img src={Activite1Accueil} alt="" className="img-activite act1"/>
        </div>
        <h2>Les activités à ne pas manquer !</h2>
      </div>
      <div className="text-button-center text-size text-center">
        <p>Voici le cœur de notre mariage où nous rêvons que chacun d'entre vous puisse passer son après-midi en s'amusant avec nous à travers toute une panoplie d'activités que vous découvrirez ici.</p>
        <Button link="/activites" color={blue} borderColor="button-blue"/>
      </div>
      <FeuxBleuVertBas />
    </section>
  );
}

export default ActivitesAccueil;
