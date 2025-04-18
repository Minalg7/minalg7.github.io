import { useState } from "react";
import { Link } from "react-router-dom";
import MinusBox from "../../assets/icons/Minus-box";
import AddBox from "../../assets/icons/Add-box";
import "../../styles/Faq-accordion.css"

function FaqAccordion({ id, question, answer, link, linkText, img, imgClass, bgColor }) {

  const [isOpen, setIsOpen] = useState(false);

  return isOpen ? (
    <div className={`faq-accordion ${bgColor}`} key={id}>
      <div className="faq-box-question" onClick={() => setIsOpen(false)}>
        <h4 className="faq-question white">{question}</h4>
        <MinusBox />
      </div>
      <div className="faq-content">
        <p className="white">{answer}</p>
        <Link to={link} className="white link-faq">{linkText}</Link>
        <img src={img} alt="img" className={imgClass} />
      </div>
    </div>
  ) : (
    <div className={`faq-accordion ${bgColor}`} key={id}>
      <div className="faq-box-question" onClick={() => setIsOpen(true)}>
        <h4 className="faq-question white">{question}</h4>
        <AddBox />
      </div>
    </div>
  );
}

export default FaqAccordion;
