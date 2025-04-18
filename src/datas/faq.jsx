// img thème
import objetsInterdits from "../assets/informations/objets-interdits.png"
import theme from "../assets/informations/theme.png"

export const faqSurPlace = [
  {
    id: 1,
    question: "Le mariage aura-t-il lieu à l'intérieur ou à l'extérieur ?",
    answer:
      "Les deux ! Mais la majeur partie, si le temps nous le permet, se fera à l'extérieur.",
    imgClass: "none",
  },
  {
    id: 2,
    question: "À quoi dois-je m'attendre après la cérémonie ?",
    answer:
      "Nous vous laissons prendre connaissance de la programmation sur cette page :",
    link: "/programmation",
    linkText: "Vers la page programmation !",
    imgClass: "none",
  },
  {
    id: 3,
    question:
      "Quel type de nourriture et de boisson sera servi pendant le cocktail et la réception ?",
    answer:
      "Nous vous laissons prendre connaissance de nos stands sur la page suivante :",
    link: "/restauration",
    linkText: "Vers la page restauration !",
    imgClass: "none",
  },
  {
    id: 4,
    question: "Je veux revendre mon billet ?",
    answer: "Bien entendu ce n'est pas possible.",
    imgClass: "none",
  },
  {
    id: 5,
    question: "Quel est la liste des objets interdis ?",
    img: objetsInterdits,
    imgClass: "img-faq",
  },
  {
    id: 6,
    question: "Les animaux sont ils autorisés ?",
    answer:
      "Malheureusement non, mais plusieurs pensions canines existe à proximité pour nos amis à 4 pattes.",
    imgClass: "none",
  },
];

export const faqPourVenir = [
  {
    id: 1,
    question:
      "Le transport sera-t-il assuré ? Y a-t-il un parking facile sur place ?",
    answer:
      "Non pour les transports, nous vous laissons vous organisez comme vous le souhaitez. L'aéroport le plus proche est celui de Nantes (40 min en voiture jusqu'au domaine) et la gare la plus proche est celle de la Roche sur Yon (26 min en voiture jusqu'au domaine). Oui, le domaine dispose de plusieurs parkings. Ils sont notés sur le plan ci-après :",
    link: "https://www.loiseliere.com/wp-content/uploads/2023/05/Plan-camping-domaine-oiseliere.pdf",
    linkText: "Voici le plan !",
    imgClass: "none",
  },
  {
    id: 2,
    question:
      "Le lieu de la cérémonie et de la réception est-il accessible aux personnes en fauteuil roulant ?",
    answer:
      "Le Domaine de l’Oiselière est un camping labellisé Tourisme et Handicap pour les 4 familles de handicap : auditif, mental, visuel, moteur.",
    imgClass: "none",
  },
];

export const faqDormir = [
  {
    id: 1,
    question: "Les logements sont-ils inclus ?",
    answer:
      " Oui, pour la nuit du samedi soir. Des prolongations sont possibles à tarif préférentiel, il faudra nous communiquer vos besoins avant le 30 avril.",
    imgClass: "none",
  },
  {
    id: 2,
    question:
      "Je viens en Van /camping car, y a t'il des emplacements de prévus ?",
    answer:
      " Oui il y a des emplacements de prévus pour les van, camping-car et même tente pour les plus courageux !Pensez à nous prévenir !",
    imgClass: "none",
  },
];

export const faqOrganisation = [
  {
    id: 1,
    question: "Quel est le code vestimentaire ? Que dois-je porter ?",
    answer: "Les détails de la tenue vous sont répertoriés sur cette page :",
    link: "/programmation",
    linkText: "Vers la page programmation !",
    imgClass: "none",
  },
  {
    id: 2,
    question: "Kit de survie, que dois-je emmener ?",
    answer:
      "• Une tenue habillée mais à l'aise pour le samedi • Tenue décontractée pour le dimanche • Maillot de bain, crème solaire, chapeaux et tutti quanti pour profiter de la piscine le dimanche (croisons les doigts pour la météo) • Votre joie et votre bonne humeur pour passer un merveilleux moment tous ensemble !",
    imgClass: "none",
  },
  {
    id: 3,
    question: "Thème et couleurs du mariage",
    img: theme,
    imgClass: "img-faq"
  },
  {
    id: 4,
    question: "Puis-je amener mes enfants ? Y aura-t-il une baby-sitter ?",
    answer:
      "Oui les enfants sont invités, il y aura une baby sitter ainsi qu'une salle qui leur sera dédiée. De plus, les activités de l'après-midi conviennent aux enfants. A vous de voir ce que vous préférez ;) Il y aura également une baby sitter qui restera sur place la nuit pour garder les enfants couchés pendant que vous ferez vos chorégraphie sur le dancefloor ! Pour une meilleure organisation, merci de nous prévenir si vous souhaitez laisser vos enfants à la baby sitter la nuit (le temps de la soirée, il faudra les récupérer à un moment bien entendu) ",
    imgClass: "none",
  },
  {
    id: 5,
    question: "A quelle heure doit on arriver ?",
    answer:
      "Vous pouvez arriver à partir de 12h00 le samedi et jusqu'à maximum 13h00.",
    imgClass: "none",
  },
  {
    id: 6,
    question:
      "A quelle date maximum je peux confirmer ma présence et mes hébergements ?",
    answer: "Avant le 30 avril dernier délais.",
    imgClass: "none",
  },
  {
    id: 7,
    question: "Et après ?",
    answer:
      "Les mariés prolongent leur séjour ! Le domaine se trouvant à 30 minutes en voiture du Puy du Fou, nous en profitons pour y passer quelques jours. Serez-vous des nôtres ? Pour plus d'informations, se référer à la page suivante :",
    link: "/programmation",
    linkText: "Vers la page programmation !",
    imgClass: "none",
  },
  {
    id: 8,
    question: "Recap - Pensez à prévenir les mariés !",
    answer:
      "• Si vous souhaitez des nuits supplémentaires • Si vous venez au Puy du Fou • Si vous souhaitez laisser vos enfants à la baby sitter la journée et/ou le soir • Si vous venez en Van, Camping car, Caravane, Tente…",
    imgClass: "none",
  },
];
