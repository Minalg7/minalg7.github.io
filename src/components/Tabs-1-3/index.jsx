import "../../styles/Tabs-1-3.css";
import PoissonGauche from "../../assets/svg/Poisson-gauche";

function Tabs13({
  categoriesBoissons,
  categoriesNourritures,
  cover,
  classToggle,
}) {
  return (
    <div className={`tabs-1-3 ${classToggle}`}>
      <div className="carte-menu">
        <div className="feuille-menu">
          <PoissonGauche />
          <div className="categorie-menu">
            <h3>Boissons</h3>
            <ul>
              {categoriesBoissons.map((cat) => (
                <li key={cat}>{cat}</li>
              ))}
            </ul>
          </div>

          <div className="trait-moyen"></div>
          <div className="categorie-menu">
            <h3>Nourritures</h3>
            <ul>
              {categoriesNourritures.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rectangle-menu bg-pink"></div>
      </div>
      <img src={cover} alt="" className="img-repas" />
    </div>
  );
}

export default Tabs13;
