import personnages from "../../assets/hero-banner/personnages.png";
import grandeRoueBuisson from "../../assets/hero-banner/grande-roue.png";
import sol from "../../assets/hero-banner/sol.png";
import reflet from "../../assets/hero-banner/reflet.png";
import lune from "../../assets/hero-banner/lune.png";
import lucioles from "../../assets/hero-banner/lucioles.png";
import lanternes from "../../assets/hero-banner/lanternes.png";
import etoiles from "../../assets/hero-banner/etoiles.png";
import artificesDroit from "../../assets/hero-banner/artifices-droit.png";
import artificesGauche from "../../assets/hero-banner/artifices-gauche.png";
import artificesMilieu from "../../assets/hero-banner/artifices-milieu.png";
import mer from "../../assets/hero-banner/mer.png";
import scrollDown from "../../assets/icons/scroll-down.svg"
import { useEffect } from "react";
import "../../styles/Hero-banner.css";

function HeroBanner() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
  
      const heroTitle = document.querySelector(".hero-title");
      const artificeGauche = document.getElementById("artificeGauche");
      const artificeMilieu = document.getElementById("artificeMilieu");
      const artificeDroit = document.getElementById("artificeDroit");
      const lanternes = document.getElementById("lanternes");
      const sol = document.getElementById("sol");
      const roue = document.getElementById("roue");
      const personnages = document.getElementById("personnages");
  
      // Hero title shrink
      if (scrollY > 100) {
        heroTitle.classList.add("small");
      } else {
        heroTitle.classList.remove("small");
      }
  
      // Artifices apparitions échelonnées
      artificeGauche.classList.toggle("visible", scrollY > 100);
      artificeMilieu.classList.toggle("visible", scrollY > 120);
      artificeDroit.classList.toggle("visible", scrollY > 130);
  
      // Entrées haut/bas
      const showElements = scrollY > 150;
      lanternes.classList.toggle("visible", showElements);
      sol.classList.toggle("visible", showElements);
      roue.classList.toggle("visible", showElements);
      personnages.classList.toggle("visible", showElements);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="parallax-wrapper">
      <div className="parallax-hero-banner">
        <img src={etoiles} alt="" id="etoiles" />
        <img src={lune} alt="" id="lune" className="img-longue" />
        <img src={artificesGauche} alt="" className="img-longue artifice" id="artificeGauche"/>
        <img src={artificesMilieu} alt="" className="img-longue artifice" id="artificeMilieu"/>
        <img src={artificesDroit} alt="" className="img-longue artifice" id="artificeDroit"/>
        <img src={mer} alt="" className="img-longue" />
        <img src={reflet} alt="" id="reflet" className="img-longue" />
        <img src={lucioles} alt="" className="img-longue" />
        <h1 className="white hero-title">Stéphie & Alain</h1>
        <img src={lanternes} alt="" id="lanternes" className="entry-down"/>
        <img src={sol} alt="" id="sol" className="entry-up"/>
        <img src={grandeRoueBuisson} alt="" id="roue" className="entry-up"/>
        <img src={personnages} alt="" id="personnages" className="entry-up"/>
        <img src={scrollDown} alt="" id="scroll-down"/>
      </div>
    </section>
  );
}

export default HeroBanner;
