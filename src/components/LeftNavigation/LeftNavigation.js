import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import LeftArrow from '../../assets/prev.png'

const LeftNavigation = () => 
{
  const swiper = useSwiper();

  const [isBegin, setIsBegin] = useState(true);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBegin(swiper.isBeginning);
    });
  }, [swiper]); 

  return (
    <div>
      {!isBegin && <button className="navigation left" onClick={() => swiper.slidePrev()}><img src={LeftArrow} alt="next"/></button>}
    </div>
  );
};

export default LeftNavigation;
