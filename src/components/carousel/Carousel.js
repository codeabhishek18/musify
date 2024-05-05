import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Cards from '../cards/Cards';
import LeftNavigation from '../LeftNavigation/LeftNavigation';
import RightNavigation from '../RightNavigation/RightNavigation';

const Carousel = ({data, type}) =>
{
    return(
        <div className="carousel">
            <Swiper
                modules={{Navigation}}
                initialSlide={0}
                slidesPerView={7}
                spaceBetween={30}
                allowTouchMove>
                <LeftNavigation />
                <RightNavigation />
                {data?.map((card)=>
                (
                    <SwiperSlide key={card.id}><Cards card={card} type={type}/></SwiperSlide>
                ))}  
            </Swiper>
        </div>
    )
}

export default Carousel;