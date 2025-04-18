//Styles
import "../../styles/Card-programmation.css"

function CardProgrammation({ Icon, title, content, bgColor, id }) {
    return (
      <div className={`card-programmation ${bgColor}`} id={id}>
        <Icon />
        <h4 className="title white">{title}</h4>
        <p className="white">{content}</p>
      </div>
    );
  }

export default CardProgrammation;