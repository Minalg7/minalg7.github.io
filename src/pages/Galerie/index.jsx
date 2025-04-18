import { useEffect } from "react";

// Composants
import Button from "../../components/Button";
import WaveShapeHaut from "../../components/Wave-shape-haut";
import Banner from "../../components/Banner";
import QrCode from "../../assets/icons/Qr-code";

//Assets
import galerie1 from "../../assets/galerie/galerie-1.jpg";
import galerie2 from "../../assets/galerie/galerie-2.jpg";
import galerie3 from "../../assets/galerie/galerie-3.jpg";
import galerie4 from "../../assets/galerie/galerie-4.jpg";
import galerie5 from "../../assets/galerie/galerie-5.jpg";
import galerie6 from "../../assets/galerie/galerie-6.jpg";
import galerie7 from "../../assets/galerie/galerie-7.jpg";
import galerie8 from "../../assets/galerie/galerie-8.jpg";
import galerie9 from "../../assets/galerie/galerie-9.jpg";
import galerie10 from "../../assets/galerie/galerie-10.jpg";
import galerie11 from "../../assets/galerie/galerie-11.jpg";
import PoissonGrand from "../../assets/svg/Poisson-grand";

//Styles
import "../../styles/Galerie.css";

//Données
import { white } from "../../datas/colors";

function Galerie() {

  useEffect(() => {
    document.title = "Galerie - Mariage Stéphie & Alain"
  }, [])

  return (
    <main>
      {/* Bannière */}
      <Banner />
      <WaveShapeHaut />

      <section className="galerie bg-white fade-in-section">
        <div className="galerie-colonne">
          <img src={galerie1} alt="" className="galerie-img carre"/>
          <img src={galerie2} alt="" className="galerie-img rectangle-haut"/>
          <img src={galerie3} alt="" className="galerie-img carre"/>
        </div>
        <div className="galerie-colonne">
        <img src={galerie4} alt="" className="galerie-img rectangle-haut"/>
        <img src={galerie5} alt="" className="galerie-img rectangle"/>
        <img src={galerie6} alt="" className="galerie-img rectangle-haut"/>
        </div>
        <div className="galerie-colonne">
        <img src={galerie7} alt="" className="galerie-img carre"/>
        <img src={galerie8} alt="" className="galerie-img rectangle-haut"/>
        <img src={galerie9} alt="" className="galerie-img carre"/>
        </div>
        <div className="galerie-colonne">
        <img src={galerie10} alt="" className="galerie-img rectangle-haut"/>
        <img src={galerie11} alt="" className="galerie-img rectangle-haut"/>
        </div>
      </section>

      <section className="encart-bleu encart-galerie fade-in-section">
        <PoissonGrand />
        <div className="img-title">
          <QrCode />
          <h2 className="white">L’album photo à partager !</h2>
        </div>
        <div className="text content-galerie">
          <p className="white">
            Pour que nous puissions tous revivre ensemble les meilleurs moments
            de cette journée, nous avons mis en place une application dédiée au
            partage de photos.
          </p>
          <p className="white">
            Nous avons créé un album sur Wedshoots où vous pourrez ajouter vos
            clichés et découvrir ceux des autres en temps réel !
          </p>
          <ul>
            <li className="white">
              Téléchargez l'appli en passant par le bouton.
            </li>
            <li className="white">
              Une fois installée vous pourrez accéder à l'album en scannant le
              QR code ou en renseignant le nom et le code de notre album :
              FR2cbd4978
            </li>
          </ul>
          <p className="white">
            Parce que les plus moments sont ceux que l'on partage et qu'on sait
            que vous avez un talent caché de photographe ! A vos appareils !
          </p>
        </div>
        <Button
          link="http://www.wedshoots.com/fr/download?albumId=FR2cbd4978"
          color={white}
          borderColor="button-white"
        />
      </section>
      <div className="espace"></div>
    </main>
  );
}

export default Galerie;
