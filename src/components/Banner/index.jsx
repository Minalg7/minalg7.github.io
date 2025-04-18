import "../../styles/Banner.css";
import bannerBuisson from "../../assets/banner/banner-buisson.png";
import bannerLanterne from "../../assets/banner/banner-lanterne.png";

function Banner() {
  return (
    <section className="banner">
      <img src={bannerLanterne} alt="" className="img-banner1" />
      <img src={bannerBuisson} alt="" className="img-banner2" />
    </section>
  );
}

export default Banner;
