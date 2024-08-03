"use client";
import React, { useRef, useState, ChangeEvent, FormEvent } from "react";


import Frame1 from "../../../public/images/home/lion1.svg"
import Frame2 from "../../../public/images/home/lion2.svg"
import Frame3 from "../../../public/images/home/lion3.svg"
import Frame4 from "../../../public/images/home/lion4.svg"
import Frame5 from "../../../public/images/home/lion5.svg"



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const frameData = [
    {
      name: "Bogdanoff",
      img: Frame1.src,
      
    },
    {
      name: "Bogdanoff",
      img: Frame2.src,
      
    },
    {
      name: "Bogdanoff",
      img: Frame4.src,
    },
    {
      name: "Bogdanoff",
      img: Frame5.src,
    },
    {
      name: "Bogdanoff",
      img: Frame3.src,
    },

  ];
const AutoSlider = () => {
  const progressCircle = useRef<HTMLDivElement | null>(null);
  const progressContent = useRef<HTMLDivElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number): void => {
      if (progressCircle.current) {
          progressCircle.current.style.setProperty('--progress', ""+(1-progress));
      }
      if (progressContent.current) {
          progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      }
  };

    return (
        <div className="w-full mt-5  p-4 rounded-3xl">

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {frameData.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="flex justify-center">
                        <img
                            src={item.img}
                            alt="Back1"
                            className=" rounded-2xl h-[45vh]"
                        />
                      </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>
            
        </div>
    );
};

export default AutoSlider;
