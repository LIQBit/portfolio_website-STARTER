import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
   const [activeItem, setActiveItem] = useState(0);
   const carouselRef = useRef();

  

   const handleClick = (e, i) => {
     e.preventDefault();

    if (carouselRef.current) {
       const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
       scroll(carouselRef.current, scrollLeft);
     }
   }

   const handleScroll = () => {
     if (carouselRef.current) {
       const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

     setActiveItem(index);
     }
   }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
   useEffect(() => {
     const handleResize = () => {
       scroll(carouselRef.current, 0);
     }

     window.addEventListener('resize', handleResize);
   }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm a front-end developer based in Tokyo, Japan. As much as possible, I like to "always be building." and I'm currently doing a mix of freelance and volunteer work. When I'm not building something, I like to keep up my learning by studying new frameworks or languages. 
      </SectionText>
      
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
        ))}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
