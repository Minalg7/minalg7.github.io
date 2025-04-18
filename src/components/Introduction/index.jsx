import accueilIntroduction from "../../assets/accueil/accueil-introduction.jpg";
import "../../styles/Introduction.css";
import FeuxRoseOrangeDroit from "../../assets/svg/Feux-rose-orange-droit";

function Introduction() {
  return (
    <div className="container-content-text fade-in-section">
      <div className="container-content">
        <img src={accueilIntroduction} alt="" className="img-grande" />
        <div className="content">
          <div className="ill-feux-intro">
            <FeuxRoseOrangeDroit />
            <h2>Bienvenue dans notre plus belle aventure !</h2>
          </div>

          <div className="text">
            <p>
              Vous nous connaissez, on adore les jeux, les énigmes et les défis…
              on a décidé de vous embarquez dans le plus beau de ceux-ci, celui
              de se dire oui !
            </p>
            <p>
              Après des années à accumuler des points d'expérience ensemble, à
              explorer des mondes (réels et virtuels) et à partager notre
              passion pour le Japon, il était temps de passer au niveau suivant.
            </p>
          </div>
        </div>
      </div>
      <div className="text">
        <p>
          Nous prévoyons pour cette journée, bonne humeur, surprise et clin
          d'œil à nos univers préférés. Prêt à jouer avec nous ? Promis, pas de
          chrono, pas de cadenas… Juste beaucoup de fun et d'amour !
        </p>
        <p>
          Un mariage comme un festival, rempli de belles émotions et entouré de
          ceux qui comptent pour nous.
        </p>
        <p>
          Afin de profiter pleinement de cette journée, où jeux et activités
          vous attendent, armez-vous d'entrain, laissez les costumes trois
          pièces au placard et optez pour une tenue habillée dans lesquels vous
          pourrez bouger, rire et vous amusez en toute liberté.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
