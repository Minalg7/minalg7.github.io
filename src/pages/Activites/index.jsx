import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FreeMode, Navigation, Thumbs } from "swiper";

//Styles
import "../../styles/Activites.css";

//Assets
import NavNext from "../../assets/icons/Nav-next";
import NavPrev from "../../assets/icons/Nav-prev";
import escapeGame from "../../assets/activites/escape-game-modale.jpg";

//Données
import { listeActivites } from "../../datas/activites";
import { white } from "../../datas/colors";

function Activites() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.title = "Activités - Mariage Stéphie & Alain"
  }, [])

  return (
    <section className="carrousel-activites fade-in-section">
      <Swiper
        spaceBetween={0}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs, Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="swiper-activites"
      >
        {listeActivites.map(
          ({ title, content, cover, bgColor, illustration }, index) => (
            <SwiperSlide
              key={index}
              className={`swiper-slide-activites ${bgColor}`}
            >
              <div className="slide-content-activites">
                {illustration}
                <h2 className="white">{title}</h2>
                {Array.isArray(content) ? (
                  <ul>
                    {content.map((item, i) => (
                      <li key={i} className="white slide-liste-activites">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    <p className="white slide-liste-activites">{content}</p>
                    <button
                      className="button button-white button-modale"
                      onClick={() => setIsModalOpen(true)}
                    >
                      <svg
                        width="35"
                        height="24"
                        viewBox="0 0 39 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fleche-modale"
                      >
                        <path
                          d="M2 14.2034H37M37 14.2034L27.1685 26M37 14.2034L27.1685 2"
                          stroke={white}
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              <img src={cover} alt="" className="slide-cover-activites" />
            </SwiperSlide>
          )
        )}
      </Swiper>

      <div className="container-thumbs-navigation">
        <div className="slide-thumbs-navigation">
          <button className="custom-prev btn-nav btn-nav-act">
            <NavPrev className={white} />
          </button>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={0}
            slidesPerView={3}
            freeMode={true}
            modules={[FreeMode, Thumbs]}
            className="swiper-thumbs-activites"
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              680: {
                slidesPerView: 2,
              },
              970: {
                slidesPerView: 3,
              }
            }}
          >
            {listeActivites.map(({ cover2, title }, el) => (
              <SwiperSlide key={el} className="swiper-slide-thumbs-activites">
                <img src={cover2} alt="" />
                <p className="white">{title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="custom-next btn-nav btn-nav-act">
            <NavNext className={white} />
          </button>
        </div>
      </div>

      {/* 🧊 MODALE */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="modal-close white"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <div className="modale-cover-title-activites">
              <img src={escapeGame} alt="" />
              <h2 className="white">Escape Game Fil rouge</h2>
            </div>
            <div className="text text-modale">
              <p className="white">
                Beaucoup d'entre vous le savent, nous adorons les escapes game.
                C'est pourquoi nous avons décidé que le fil rouge de notre
                mariage en serait un !
              </p>
              <p className="white">
                A votre arrivée, vous aurez à disposition un formulaire qui vous
                aidera à trouver les énigmes dispersés sur le domaine. Chaque énigme vous permettra de trouver une lettre du mot mystère. Saurez-vous les retrouver ?
              </p>
              <p className="white">
                Une fois que vous pensez avoir la bonne réponse, il vous suffira
                d'aller l'annoncer à la mariée qui vous la validera ou non. Si la
                réponse donnée est correcte vous pourrez déposer votre ticket
                numéroté (celui envoyé par courrier à détacher, ne l'oubliez pas
                !) et à le déposer dans l'urne prévue à cet effet.
              </p>
              <p className="white">
                Un tirage au sort aura lieu pendant la soirée pour tenter de
                gagner une journée pour deux personnes au Puy du Fou.
              </p>
              <p className="white">
                PS : mon petit doigt me dit qu'un premier indice se trouve sur
                le site...
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Activites;
