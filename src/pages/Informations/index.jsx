import { useEffect } from "react";

// Composants
import Button from "../../components/Button";
import WaveShapeHaut from "../../components/Wave-shape-haut";
import LegendItem from "../../components/Legend-item";
import FaqAccordion from "../../components/Faq-accordion";
import Banner from "../../components/Banner";

//Assets
import PlanDomaine from "../../assets/informations/plan-domaine.png";
import FeuxRoseOrange from "../../assets/svg/Feux-rose-orange";
import Guirlande from "../../assets/svg/Guirlande";

// Styles
import "../../styles/Informations.css";

// Données
import { legendPink, legendOrange, legendGreen } from "../../datas/legendes";
import { white } from "../../datas/colors";
import {
  faqSurPlace,
  faqPourVenir,
  faqDormir,
  faqOrganisation,
} from "../../datas/faq";

function Informations() {
  useEffect(() => {
    document.title = "Informations - Mariage Stéphie & Alain";
  }, []);

  return (
    <main>
      {/* Bannière */}
      <Banner />
      <WaveShapeHaut />

      {/* Informations du domaine */}
      <section className="info-domaine bg-white fade-in-section">
        <div className="feux-domaine">
          <FeuxRoseOrange className="feux-rose-orange-informations" />
          <h2 className="text-center">Domaine de l'Oiselière</h2>
        </div>

        <div className="encart-bleu encart-info-domaine">
          <div className="text-info">
            <p className="white">
              Le Domaine de l’Oiselière <br /> L’Oiselière, 85140 Chauché,
              France
            </p>
            <p className="white">
              +33 (0)2 51 41 38 74 <br />
              contact@loiseliere.com
            </p>
          </div>
          <Button
            link="https://www.loiseliere.com/"
            color={white}
            borderColor="button-white"
          />
        </div>
        <div className="text text-center">
          <p>
            Pour commencer, quelques mots sur le Domaine de l'Oiselière qui nous
            accueil. Cet établissement est particulièrement sensible à la
            question environnementale & attentif au respect de la nature.
          </p>
          <p>
            C'est pourquoi nous vous invitons à prendre connaissance des
            quelques règles simples, que vous trouverez ci-dessous, à respecter
            tout au long de votre séjour.
          </p>
        </div>
      </section>

      {/* Plan du domaine */}
      <section className="plan-domaine bg-white">
        <img src={PlanDomaine} alt="" className="plan-domaine1 fade-in-section" />
        <div className="legende fade-in-section">
          <div className="legende-box">
            {legendPink.map(({ bgColor, color, nombre, action }) => (
              <LegendItem
                bgColor={bgColor}
                color={color}
                nombre={nombre}
                action={action}
              />
            ))}
          </div>
          <div className="legende-box">
            {legendOrange.map(({ bgColor, color, nombre, action }) => (
              <LegendItem
                bgColor={bgColor}
                color={color}
                nombre={nombre}
                action={action}
              />
            ))}
          </div>
          <div className="legende-box">
            {legendGreen.map(({ bgColor, color, nombre, action }) => (
              <LegendItem
                bgColor={bgColor}
                color={color}
                nombre={nombre}
                action={action}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq fade-in-section">
        <Guirlande />
        <h2>FAQ</h2>
        <div className="container-accordion">
          <h3 className="blue">Sur place</h3>
          <div className="layout-accordion">
            {faqSurPlace.map(
              ({ id, question, answer, link, linkText, img, imgClass }) => (
                <FaqAccordion
                  id={id}
                  question={question}
                  answer={answer}
                  link={link}
                  linkText={linkText}
                  img={img}
                  imgClass={imgClass}
                  bgColor="bg-blue"
                />
              )
            )}
          </div>
        </div>
        <div className="container-accordion">
          <h3 className="pink">Pour venir</h3>
          <div className="layout-accordion">
            {faqPourVenir.map(
              ({ id, question, answer, link, linkText, img, imgClass }) => (
                <FaqAccordion
                  id={id}
                  question={question}
                  answer={answer}
                  link={link}
                  linkText={linkText}
                  img={img}
                  imgClass={imgClass}
                  bgColor="bg-pink"
                />
              )
            )}
          </div>
        </div>
        <div className="container-accordion">
          <h3 className="orange">Dormir</h3>
          <div className="layout-accordion">
            {faqDormir.map(
              ({ id, question, answer, link, linkText, img, imgClass }) => (
                <FaqAccordion
                  id={id}
                  question={question}
                  answer={answer}
                  link={link}
                  linkText={linkText}
                  img={img}
                  imgClass={imgClass}
                  bgColor="bg-orange"
                />
              )
            )}
          </div>
        </div>
        <div className="container-accordion">
          <h3 className="green">Organisation</h3>
          <div className="layout-accordion">
            {faqOrganisation.map(
              ({ id, question, answer, link, linkText, img, imgClass }) => (
                <FaqAccordion
                  id={id}
                  question={question}
                  answer={answer}
                  link={link}
                  linkText={linkText}
                  img={img}
                  imgClass={imgClass}
                  bgColor="bg-green"
                />
              )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Informations;
