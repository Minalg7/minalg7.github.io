import "../../styles/Encart-info.css"
import BrancheOrange from "../../assets/svg/Branche-orange";
import BrancheVert from "../../assets/svg/Branche-vert";

function EncartInfo() {
    return (
      <div className="container-info fade-in-section">
        <BrancheVert />
        <div className="box-info">
            <h3 className="pink">Quand ?</h3>
            <div className="trait bg-pink"></div>
            <p>06 Septembre 2025 - 13h</p>
        </div>
        <div className="box-info">
            <h3 className="green">Où ?</h3>
            <div className="trait bg-green"></div>
            <p>Domaine de l'Oiselière,<br />85140 Chauché</p>
        </div>
        <div className="box-info">
            <h3 className="orange">Qui ?</h3>
            <div className="trait bg-orange"></div>
            <p>Nos plus chers amis et notre famille,<br />De près et de loin.</p>
        </div>
        <BrancheOrange />
      </div>
    );
  }
    
  export default EncartInfo;
    