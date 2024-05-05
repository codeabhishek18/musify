import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import RightArrow from '../../assets/next.png'

const RightNavigation = () => 
{
  const swiper = useSwiper();

  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]); 

  return (
    <div>
      {!isEnd && <button className="navigation right" onClick={() => swiper.slideNext()}><img src={RightArrow} alt="next"/></button>}
    </div>
  );
};

export default RightNavigation;
