"use client";
import React from 'react';
import "@/assets/styles/heroEmblaSlider.css"
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { useWindowSize } from "react-use";

function MySwiperComponent() {
    const { width } = useWindowSize();
    const OPTIONS = { loop: true }
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay({ delay: 1500  , stopOnMouseEnter:true,  stopOnInteraction :false })])
    
    return (
        <>
{
    width<576 ? 
            <section className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container h-100">
                        <div className="home_image_right embla__slide"></div>
                        <div className="home_image_left embla__slide"></div>
                        <div className="home_image_top embla__slide"></div>

                    </div>
                </div>
            </section>
    : 

                <div className="home_content_right h-100">
                    <div className="home_image_right"></div>
                    <div className="home_image_left"></div>
                    <div className="home_image_top"></div>
                </div>
}
                
            
        </>
    );
}

export default MySwiperComponent;