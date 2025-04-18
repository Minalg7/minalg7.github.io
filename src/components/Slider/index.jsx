import Marquee from "react-fast-marquee";
import "../../styles/Slider.css";

const words = [
  "Le marié a tenté un moonwalk… échec total ! 🕺❌",
  "•",
  "Le témoin a oublié son discours… Gêne palpable. 😅",
  "•",
  "Le bouquet a été lancé… 3 blessés légers. 💐💥",
  "•",
  "最初のヒント: 赤いワイヤーの写真の下のコードを翻訳してください",
  "•",
  "Un enfant a découvert le bar à bonbons… Chaos imminent ! 🍬😱",
  "•",
  "Le traiteur en rupture de champagne… Révolution annoncée ! 🍾🚨",
  "•",
  "Le photobooth déborde… Selfies en surcharge ! 📸📢",
  "•",
  "La mariée en talons dans l’herbe… Suspense insoutenable ! 👠⏳",
  "•",
  "Une grand-mère a pris le contrôle de la piste… Respect éternel ! 💃🔥",
  "•",
];

function Slider() {
  return (
      <Marquee duration={30} autoFill="true" gradient="true" gradientColor="#294069" pauseOnHover="true" direction="left" className="slider">
      {words.map((el) => (
          <div className="slide" key={el}>{el}</div>
        ))}
    </Marquee>
  );
}

export default Slider;
