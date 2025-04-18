import { useState, useEffect } from "react";
import "../../styles/Timer.css";

//Assets
import FeuxVertOrange from "../../assets/svg/Feux-vert-orange";

const TIMER_TARGET = new Date("2025-09-06T11:59:59");

const getTimeLeft = () => {
  const totalTimeLeft = TIMER_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

function Timer() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="timer fade-in-section">
      <div className="title-timer-accueil">
        <FeuxVertOrange />
        <h2 className="text-center">
          Le grand <span className="title pink">jour</span> approche...
          Préparez-vous à le <span className="title orange">célébrer</span> avec
          <span className="title green"> nous</span> !
        </h2>
      </div>

      {/* Fonctionnalité compte à rebours */}
      <div className="timer-content">
        <div className="box">
          <div className="value">
            <span>{timeLeft.days}</span>
          </div>
          <span className="label">Jours</span>
        </div>
        <span className="dots">:</span>
        <div className="box">
          <div className="value">
            <span>{timeLeft.hours}</span>
          </div>
          <span className="label">Heures</span>
        </div>
        <span className="dots">:</span>
        <div className="box">
          <div className="value">
            <span>{timeLeft.minutes}</span>
          </div>
          <span className="label">Minutes</span>
        </div>
        <span className="dots">:</span>
        <div className="box">
          <div className="value">
            <span>{timeLeft.seconds}</span>
          </div>
          <span className="label">Secondes</span>
        </div>
      </div>
    </div>
  );
}

export default Timer;
