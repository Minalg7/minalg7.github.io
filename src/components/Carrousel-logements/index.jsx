import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper";
import "swiper/swiper-bundle.css";
import "../../styles/Carrousel-logements.css";

//Composants
import ButtonSmall from "../Button-small";

//Assets
import NavNext from "../../assets/icons/Nav-next";
import NavPrev from "../../assets/icons/Nav-prev";

// Données
import { listeLogements } from "../../datas/logements";
import { white, blue } from "../../datas/colors";

function CarrouselLogements() {
  return (
    <section className="carrousel-logement bg-white fade-in-section">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation, FreeMode]}
        breakpoints={{
          320: {
            slidesPerView: 1, 
          },
          580: {
            slidesPerView: 2, 
          },
          768: {
            slidesPerView: 3, 
          },
          1070:{
            slidesPerView: 4,
          },
        }}
        className="swiper-logement"
      >
        {listeLogements.map(
          ({ title, content, cover, link, bgColor }, index) => (
            <SwiperSlide key={index} className={`swiper-slide-logement ${bgColor}`}>
              <div className="slide-title-logement">
                <h3 className="white">{title}</h3>
                <p className="white">{content}</p>
              </div>
              <div className="slide-cover-button-logement">
                <img src={cover} alt="" />
                <div className="slide-button-logement">
                  <ButtonSmall
                    link={link}
                    color={white}
                    borderColor="button-white"
                    className="button-petit"
                  />
                  <p className="white">En savoir plus</p>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>

      <div className="custom-navigation">
        <span className="trait-carrousel2 bg-blue"></span>
        <button className="custom-prev btn-nav">
          <NavPrev className={blue}/>
        </button>
        <button className="custom-next btn-nav">
          <NavNext className={blue}/>
        </button>
      </div>
    </section>
  );
}

export default CarrouselLogements;
