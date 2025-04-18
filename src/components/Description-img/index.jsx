import Button from "../Button";
import "../../styles/Description-img.css"

function DescriptionImg({title, children, imgPosition, link, imgGrande, imgPetite, bgColor, borderColor}) {
    return (
      <div className={`card-content ${imgPosition} ${bgColor}`}>
        <div className="content">
            <h2>{title}</h2>
            <div className="text">
              {children}
            </div>
            <Button link={link} className="button" color="#FFFCF5" borderColor="button-white"/>
        </div>
        <div className="card-container-img">
          <img src={imgGrande} alt="" className="img-grande"/>
          <img src={imgPetite} alt="" className={`img-petite ${borderColor}`}/>
        </div>
      </div>
    );
  }
  
  export default DescriptionImg;
  