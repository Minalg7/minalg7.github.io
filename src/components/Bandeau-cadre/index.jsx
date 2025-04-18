import "../../styles/Bandeau-cadre.css"
import grandeRoue from "../../assets/grande-roue.png"
import buissonDroit from "../../assets/buisson-droit.png"

function BandeauCadre({children}) {
    return (
      <section className="bandeau-cadre fade-in-section">
        <div className="contour-cadre">
            {children}
        </div>
        <div className="illustrations-bas">
            <img src={grandeRoue} alt="" className="img-bas1"/>
            <img src={buissonDroit} alt="" className="img-bas2" />
        </div>
      </section>
    );
  }
  
export default BandeauCadre;