import Product from './Product'
import './SlideProduct.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

function SlideProduct({title, data}) {

    
    return (
        <div className='slideProduct slide'>
            <div className="container">
                <div className="topSlide">
                    <h2>{title}</h2>
                    <p>Add bestselling products to weekly line up</p>
                </div>
            <Swiper  
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    loop = {true} 
                    slidesPerView={4} 
                    navigation={true} 
                    modules={[Autoplay, Navigation]} 
                    className="mySwiper">
                        {data.map((p) => {
                            return <SwiperSlide><Product item = {p} /></SwiperSlide>
                        })}
            </Swiper>
                
            </div>
        </div>
    )
}

export default SlideProduct