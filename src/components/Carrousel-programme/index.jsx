import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "../../styles/Carrousel-programme.css";

//Assets
import NavNext from "../../assets/icons/Nav-next";
import NavPrev from "../../assets/icons/Nav-prev";

//Données
import { blue } from "../../datas/colors";

function CarrouselProgramme({ typeSwiper }) {
  return (
    <section className="carrousel-programme">
      <span className="trait-carrousel1 bg-blue"></span>
      <Swiper
        slidesPerView={4}
        slidesPerGroup={1}
        slideToClickedSlide
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        className="swiper-programme"
        loop={false}
        loopFillGroupWithBlank={true}
        breakpoints={{
          320: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 2, 
          },
          1070:{
            slidesPerView: 3,
          },
          1380: {
            slidesPerView: 4, 
          },
        }}
      >
        {typeSwiper.map(({ horaire, title, cover }, index) => (
          <SwiperSlide key={index} className="swiper-slide-programme">
            <div className="content-slide-programme">
              <h3>{horaire}</h3>
              <p>•</p>
              <p className="slide-title-programme">{title}</p>
            </div>
            <img src={cover} alt="" className="slide-cover-programme" />
          </SwiperSlide>
        ))}

        {/* Slides fantômes */}
        {Array.from({ length: 3 }).map((i) => (
          <SwiperSlide key={i}>
            <div className="ghost-slide" />
          </SwiperSlide>
        ))}
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

export default CarrouselProgramme;
