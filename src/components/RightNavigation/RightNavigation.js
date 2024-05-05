import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import { ReactComponent as RightArrow } from '../../assets/Rightarrow.svg'

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
      {!isEnd && <RightArrow className="navigation right" onClick={() => swiper.slideNext()}/>}
    </div>
  );
};

export default RightNavigation;
