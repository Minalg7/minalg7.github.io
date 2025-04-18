import { Link } from "react-router-dom";
import "../../styles/Button.css";

function ButtonSmall({ link, color, borderColor, className }) {
  return (
    <Link to={link} className={`button ${borderColor} ${className}`}>
      <svg
        width="25"
        height="14"
        viewBox="0 0 39 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 14.2034H37M37 14.2034L27.1685 26M37 14.2034L27.1685 2"
          stroke={color}
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Link>
  );
}

export default ButtonSmall;
