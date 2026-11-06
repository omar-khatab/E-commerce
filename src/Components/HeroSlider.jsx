// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination} from 'swiper/modules';

// import images
import hero1 from './../images/banner_Hero1.png'
import hero2 from './../images/banner_Hero2.jpg'
import hero3 from './../images/banner_Hero3.jpg'
const slides = [hero1, hero2, hero3];
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

function HeroSlider() {
    const { t, i18n } = useTranslation();
  return (
    <div className='hero'>
        <div className="container">
              <Swiper
              key={i18n.resolvedLanguage}
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="content">
                <h3>{t("hero.intro")}</h3>
                <h4>{t("hero.titleLine1")} <hr/> {t("hero.titleLine2")}</h4>
                <p>{t("hero.description")}</p>
                <Link to="/" className='btn'>
                  {t("hero.shopNow")}
                </Link>
              </div>
              <img src={img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    </div>
    )
}

export default HeroSlider