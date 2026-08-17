// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination} from 'swiper/modules';


import { Link } from 'react-router';
function HeroSlider() {
  return (
    <div className='hero'>
        <div className="container">
            <Swiper
                    loop = {true}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
            >
            <SwiperSlide>
                <div className="content">
                    <h3>Introducing the new</h3>
                    <h4>Microsoft Xbox <hr/>    series X Controller</h4>
                    <p>windows 11/10/8, Tv Box</p>
                    <Link to = "/" className='btn'>Shop Now</Link>
                </div>
                <img src="/src/images/banner_Hero1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <div className="content">
                    <h3>Introducing the new</h3>
                    <h4>Microsoft Xbox <hr/>    series X Controller</h4>
                    <p>windows 11/10/8, Tv Box</p>
                    <Link to = "/" className='btn'>Shop Now</Link>
                </div>
                <img src="/src/images/banner_Hero2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <div className="content">
                    <h3>Introducing the new</h3>
                    <h4>Microsoft Xbox <hr/>    series X Controller</h4>
                    <p>windows 11/10/8, Tv Box</p>
                    <Link to = "/" className='btn'>Shop Now</Link>
                </div>
                <img src="/src/images/banner_Hero3.jpg" alt="" />
            </SwiperSlide>
            </Swiper>
        </div>
    </div>
    )
}

export default HeroSlider