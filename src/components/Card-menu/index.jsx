// Styles
import "../../styles/Card-menu.css";

//Assets
import VegetarienIcon from "../../assets/icons/Vegetarien-icon";

function CardMenu({ menu, typeMenu, cover, bgColor, borderColor, className }) {
  return (
    <div className={`card-menu ${className} ${bgColor}`}>
      <img src={cover} alt="" className={`img-card-menu ${borderColor}`} />
      <h3 className="white">{typeMenu}</h3>
      <ul>
        {menu.map(({ plat, imgDisplay }) => (
          <div className="item-icon">
            <li className="white">{plat}</li>
            <VegetarienIcon className={imgDisplay} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CardMenu;
