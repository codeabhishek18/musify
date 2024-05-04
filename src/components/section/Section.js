import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from "react";
import prev from '../../assets/prev.png'
import next from '../../assets/next.png'
import Cards from '../cards/Cards';
import Album from '../album/Album';

const Section = ({ title, data = [], type, setGenre}) =>
{
    const [collapse, setCollapse] = useState(false);
    
    return(
        <div className="container">
            <div className="card-header">
                <p>{title}</p>
                <span onClick={()=>setCollapse(!collapse)}>{collapse? 'Collapse' : 'Show all' }</span>
            </div>

            {collapse
            
            ?

            <div>
                <Album type={type} setGenre={setGenre}/>
                <div className="collapse-cards">
                    {data?.map((card)=>
                    (
                        <Cards card={card}/>
                    ))} 
                </div>
            </div>
            
            : 

            <div>
                <Album type={type} setGenre={setGenre}/>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={7}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }}
                    >
                    {data?.map((card)=>
                    (
                        <SwiperSlide><Cards card={card}/></SwiperSlide>
                    ))}  
                </Swiper>
                <button className='swiper-button-prev'><img src={prev} alt="prev"/></button>
                <button className='swiper-button-next'><img src={next} alt="next"/></button>
            </div>}

            <div className="hr"></div>
        </div>
    )
}

export default Section