// //Assets
import Bienvenue from "../assets/icons/Bienvenue";
import Lit from "../assets/icons/Lit";
import Parking from "../assets/icons/Parking";
import accueil from "../assets/programmation/accueil.jpg";
import ceremonieLaique from "../assets/programmation/ceremonie-laique.jpg";
import vinHonneur from "../assets/programmation/vin-honneur.jpg";
import debutActivites from "../assets/programmation/début-activités.jpg";
import dispoLogements from "../assets/programmation/dispo-logements.jpg";
import repas from "../assets/programmation/repas.jpg";
import ouvertureBal from "../assets/programmation/ouverture-bal.jpg";
import desserts from "../assets/programmation/desserts.jpg";
import checkOut from "../assets/programmation/check-out.jpg";
import activitesLendemain from "../assets/programmation/activités-lendemain.jpg";
import brunch from "../assets/programmation/brunch.jpg";
import depart from "../assets/programmation/depart.jpg";

export const listeCardProgramme = [
  {
    id: "un",
    icon: Bienvenue,
    title: "Comment se passe l'arrivée ?",
    content:
      "L’arrivée est possible à partir de 12h, et nous viendrons vous accueillir à 13h. Les camping-cars et vans peuvent se brancher dès leur arrivée, et les tentes peuvent s’installer immédiatement.",
    bgColor: "bg-pink",
  },
  {
    id: "deux",
    icon: Lit,
    title: "Quand peut-on prendre les chambres ?",
    content:
      "La répartition des hébergements se fait à partir de 15h, avec un accès possible à partir de 16h le samedi.",
    bgColor: "bg-orange",
  },
  {
    id: "trois",
    icon: Parking,
    title: "Où se garer ?",
    content:
      "À l’arrivée, garez-vous sur le parking des camping-cars. Pour les lodges les plus éloignés, vous pouvez utiliser le petit parking pour décharger vos affaires, puis déplacer votre véhicule sur le parking principal.",
    bgColor: "bg-green",
  },
];

export const samediSlides = [
  {
    horaire: "13h00",
    title: "Accueil",
    cover: accueil,
  },
  {
    horaire: "14h00",
    title: "Cérémonie laïque (au domaine)",
    cover: ceremonieLaique,
  },
  {
    horaire: "15h00",
    title: "Vin d'honneur",
    cover: vinHonneur,
  },
  {
    horaire: "15h45",
    title: "Début des activités & séance photos",
    cover: debutActivites,
  },
  {
    horaire: "16h00",
    title: "Mise à disposition des logements",
    cover: dispoLogements,
  },
  {
    horaire: "18h00",
    title: "Repas",
    cover: repas,
  },
  {
    horaire: "21h00",
    title: "Ouverture de bal",
    cover: ouvertureBal,
  },
  {
    horaire: "22h00",
    title: "Dessert",
    cover: desserts,
  },
];

export const dimancheSlides = [
  {
    horaire: "Avant 12h00",
    title: "Check out des logements",
    cover: checkOut,
  },
  {
    horaire: "De 9h00 à 16h00",
    title: "Activités sur le domaine (piscine, jeux, ballades...)",
    cover: activitesLendemain,
  },
  {
    horaire: "11h00",
    title: "Brunch",
    cover: brunch,
  },
  {
    horaire: "Avant 16h00",
    title: "Départ",
    cover: depart,
  },
];
