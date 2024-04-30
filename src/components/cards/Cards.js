import { useEffect, useState } from "react"
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import prev from '../../assets/prev.png'
import next from '../../assets/next.png'

const Cards = ({ title, data, type}) =>
{
    const swiper = useSwiper();

    return(
        <div className="container">
            <div className="card-header">
                <p>{title}</p>
                <span>{title === "Songs" ? '' : 'Show All'}</span>
            </div>
            <Swiper spaceBetween={50} slidesPerView={8}>
            <button className="prev navigation" onClick={() => swiper.slidePrev()}><img src={prev} alt="prev"/></button>
            <button className="next navigation" onClick={() => swiper.slideNext()}><img src={next} alt="next"/></button>
            <div className="swiper">
            {data?.map((card)=>
            (
            <SwiperSlide key={card.id}>
                <div className="card">
                    <div className="card-image" >
                        <img src={card.image} alt="songs"/>
                    </div>
                    <div className="card-content">
                        {card.follows ? <button>{card.follows} Follows</button> :
                        <button>{card.likes} Likes</button>}
                    </div>
                </div>
                <p className="title">{card.title}</p>
            </SwiperSlide>     
            ))}
            </div>
            </Swiper>
        </div>
    )
}

export default Cards