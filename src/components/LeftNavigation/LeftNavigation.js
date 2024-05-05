import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import { ReactComponent as LeftArrow } from '../../assets/Leftarrow.svg'

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
      {!isBegin && <LeftArrow className="navigation left" onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default LeftNavigation;
