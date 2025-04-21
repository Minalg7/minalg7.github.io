//Assets
import escapeGame1 from "../assets/activites/escape-game-1.jpg";
import escapeGame2 from "../assets/activites/escape-game-2.jpg";
import activitesDomaines1 from "../assets/activites/jeux-domaines-1.jpg";
import activitesDomaines2 from "../assets/activites/jeux-domaines-2.jpg";
import jeuxCollectifs1 from "../assets/activites/jeux-collectifs-1.jpg";
import jeuxCollectifs2 from "../assets/activites/jeux-collectifs-2.jpg";
import jeuxBois1 from "../assets/activites/jeux-bois-1.jpg";
import jeuxBois2 from "../assets/activites/jeux-bois-2.jpg";
import jeuxKermesse1 from "../assets/activites/jeux-kermesse-1.jpg";
import jeuxKermesse2 from "../assets/activites/jeux-kermesse-2.jpg";
import activites1 from "../assets/activites/activites-1.jpg";
import activites2 from "../assets/activites/activites-2.jpg";
import FeuxVert from "../assets/svg/Feux-vert";
import FeuxBleu from "../assets/svg/Feux-bleu"

export const listeActivites = [
  {
    title: "Escape Game Fil rouge",
    content:
      "Cliquez sur la flèche pour en savoir plus.",
    cover: escapeGame1,
    cover2: escapeGame2,
    bgColor: "bg-blue",
    color: "dark-blue",
    illustration: <FeuxVert />,
  },
  {
    title: "Activités sur le domaine",
    content: [
      "Piscine (dimanche)",
      "Aire de jeux pour enfant",
      "Une grande salle (garde d'enfant)",
    ],
    cover: activitesDomaines1,
    cover2: activitesDomaines2,
    bgColor: "bg-pink",
    color: "dark-pink",
    illustration: <FeuxBleu />,
  },
  {
    title: "Jeux collectifs",
    content: ["Pallet", "Fléchettes", "Molky", "Course en sac", "Croquet", "Badminton", "Pétanque"],
    cover: jeuxCollectifs1,
    cover2: jeuxCollectifs2,
    bgColor: "bg-orange",
    color: "dark-orange",
    illustration: <FeuxBleu />,
  },
  {
    title: "Jeux en bois",
    content: ["Grenouille", "Puissance 4", "Corn hole", "Mikado géant", "Table à glisser"],
    cover: jeuxBois1,
    cover2: jeuxBois2,
    bgColor: "bg-green",
    color: "dark-green",
    illustration: <FeuxBleu />,
  },
  {
    title: "Jeux de kermesse",
    content: ["Chamboule tout", "Pêche aux canard", "Shooting gallery", "Lancer d'anneaux"],
    cover: jeuxKermesse1,
    cover2: jeuxKermesse2,
    bgColor: "bg-blue",
    color: "dark-blue",
    illustration: <FeuxVert />,
  },
  {
    title: "Activités",
    content: ["Sumo", "Photobooth", "Bar à tattoo et paillettes", "Morpion grandeur nature"],
    cover: activites1,
    cover2: activites2,
    bgColor: "bg-pink",
    color: "dark-pink",
    illustration: <FeuxBleu />,
  },
];
