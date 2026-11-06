import Product from './Product'
import './SlideProduct.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next'

function SlideProduct({title, data}) {
 const { t, i18n } = useTranslation()
    
    return (
        <div className='slideProduct slide'>
            <div className="container">
                <div className="topSlide">
                    <h2>{title}</h2>
                    <p>{t("slide.subtitle")}</p>
                </div>
                 <Swiper
                    key={i18n.resolvedLanguage}
                    dir={i18n.dir()}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    slidesPerView={4}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper">
                    {data.map((p) => (
                        <SwiperSlide key={p.id}><Product item={p} /></SwiperSlide>
                    ))}
                </Swiper>
                
            </div>
        </div>
    )
}

export default SlideProduct