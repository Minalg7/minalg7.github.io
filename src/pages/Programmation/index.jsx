import { useState, useEffect } from "react";

// Composants
import WaveShapeHaut from "../../components/Wave-shape-haut";
import Banner from "../../components/Banner";
import CardProgrammation from "../../components/Card-programmation";
import Button from "../../components/Button";
import CarrouselProgramme from "../../components/Carrousel-programme";

// Styles
import "../../styles/Programmation.css";

//Assets
import Coeur from "../../assets/icons/Coeur";
import puyDuFou from "../../assets/programmation/puy-du-fou.jpg";
import grandeRoue from "../../assets/grande-roue.png";
import buissonDroit from "../../assets/buisson-droit.png";
import Origamis from "../../assets/svg/Origamis";
import Billet from "../../assets/svg/Billets";

// Données
import {
  listeCardProgramme,
  samediSlides,
  dimancheSlides,
} from "../../datas/programmation";
import { white } from "../../datas/colors";

function Programmation() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  useEffect(() => {
    document.title = "Programmation - Mariage Stéphie & Alain"
  }, [])

  return (
    <main>
      {/* Bannière */}
      <Banner />
      <WaveShapeHaut />

      {/* Description programmation */}
      <section className="description-programmation bg-white fade-in-section">
        <Origamis /> 
        <h2 className="text-center ">
          La programmation du{" "}
          <span className="green title text-center">week-end</span> !
        </h2>
        <div className="text text-center">
          <p>
            Ce week-end place à l'aventure avec des jeux, des défis et beaucoup
            de rires.
          </p>
          <p>
            Pour les tenues, on vous l'a dit, faites dans le Pratique-Habillé et
            pour les couleurs, lâchez-vous, elles sont à l'honneur ! (parmi le
            petit panachage présenté ci-dessous).
          </p>
        </div>

        <div className="palette-couleur">
          <div className="couleur bleu"></div>
          <div className="couleur violet"></div>
          <div className="couleur rose"></div>
          <div className="couleur orange-flash"></div>
          <div className="couleur jaune"></div>
          <div className="couleur turquoise"></div>
          <div className="couleur vert"></div>
        </div>

        <div className="card-programme-layout">
          {listeCardProgramme.map(
            ({ icon, title, content, bgColor, id }, index) => (
              <CardProgrammation
                key={index}
                Icon={icon}
                title={title}
                content={content}
                bgColor={bgColor}
                id={id}
              />
            )
          )}
        </div>
      </section>

      <section className="tabs tabs-programme bg-white fade-in-section">
        <ul className="tabs-nav-container">
          <li
            className={toggle === 1 ? "tabs-title-active" : "tabs-title"}
            onClick={() => updateToggle(1)}
          >
            Le samedi
          </li>
          <li
            className={toggle === 2 ? "tabs-title-active" : "tabs-title"}
            onClick={() => updateToggle(2)}
          >
            Le dimanche
          </li>
        </ul>
        <div
          className={
            toggle === 1
              ? "show-content tabs-content-programme"
              : "tabs-content"
          }
        >
          <ul className="calendrier">
            <li className="date">1</li>
            <li className="date">2</li>
            <li className="date">3</li>
            <li className="date">4</li>
            <li className="date">5</li>
            <div className="date-coeur">
              <li className="date pink">6</li>
              <Coeur className="coeur" />
            </div>
            <li className="date">7</li>
          </ul>
          
          <CarrouselProgramme typeSwiper={samediSlides}/>

        </div>
        <div
          className={
            toggle === 2
              ? "show-content tabs-content-programme"
              : "tabs-content"
          }
        >
          <ul className="calendrier">
            <li className="date">1</li>
            <li className="date">2</li>
            <li className="date">3</li>
            <li className="date">4</li>
            <li className="date">5</li>
            <li className="date">6</li>
            <div className="date-coeur">
              <li className="date pink">7</li>
              <Coeur className="coeur" />
            </div>
          </ul>
          
          <CarrouselProgramme typeSwiper={dimancheSlides}/>

        </div>
      </section>

      {/* Puy du fou */}
      <section className="encart-bleu encart-programme fade-in-section">
        <Billet />
        <div className="img-title">
          <img src={puyDuFou} alt="" className="img-puy-fou" />
          <h2 className="white">Envie d'une escapade au Puy du Fou ?</h2>
        </div>
        <div className="text content-galerie">
          <p className="white">
          Le domaine où nous célébrerons notre mariage se trouve à seulement 30 minutes du Puy du Fou, un parc unique où l’Histoire prend vie sous vos yeux.
          </p>
          <p className="white">Et si vous en profitiez pour y faire un tour ?</p>
          <p className="white">
          De notre côté, nous pensons y aller le mardi suivant (sous réserve, bien sûr, que notre énergie post-fête soit au rendez-vous !). <br /> Si vous envisagez d’y aller aussi, n’hésitez pas à nous faire signe : ce serait l’occasion de nous retrouver là-bas et qui sait… peut-être partager ensemble quelques instants de magie en plus.
          </p>
          <p className="white">
          💡 À savoir : <br /> Le parc propose un Pass Émotion (places limitées chaque jour, au tarif de 30 € par jour, on vous assure il vaut vraiment le coup) qui permet de bénéficier :
          </p>
          <ul>
            <li className="white">de places réservées bien situées pour les grands spectacles,
            </li>
            <li className="white">et d’un accès facilité sans longues files d’attente.
            </li>
          </ul>
          <p className="white">Si cela vous tente, pensez à réserver vos billets en avance !
          </p>
        </div>
        <Button
          link="https://www.puydufou.com/france/fr?utm_term=puy%20du%20fou&utm_campaign=%5BB2C%5D+SEA_D%C3%A9fense_Nouveaux+clients&utm_source=adwords&utm_medium=ppc&hsa_acc=2657850800&hsa_cam=72954872&hsa_grp=118675126480&hsa_ad=650203640301&hsa_src=g&hsa_tgt=kwd-2543611260&hsa_kw=puy%20du%20fou&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjw782_BhDjARIsABTv_JATjPBZajPcLyNqSRw02gQ4R1dMUxjyUtIcxs2ZSIeLbTAcU3h71McaAsCDEALw_wcB"
          color={white}
          borderColor="button-white"
        />
      </section>

      <div className="illustrations-bas">
        <img src={grandeRoue} alt="" className="img-bas1 img-bas-programme1" />
        <img src={buissonDroit} alt="" className="img-bas2 img-bas-programme2" />
      </div>
    </main>
  );
}

export default Programmation;
