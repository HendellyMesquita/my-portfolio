'use client';
import { Swiper, SwiperSlide } from 'swiper/react'
import "./projects.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useEffect, useState } from 'react';

export function Project(){

    const [slidesPerView, setSlidePerView] = useState(2)

    const data = [
        {id: '1', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
        {id: '2', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
        {id: '3', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
        {id: '4', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
        {id: '5', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
        {id: '6', image: 'https://sujeitoprogramador.com/wp-content/uploads/2022/08/home.png'},
    ]


    useEffect(() =>{
        function handleResize(){
            if(window.innerWidth<720){
                setSlidePerView(1);
            }else {
                setSlidePerView(2);
            }
        }
        handleResize();
        window.addEventListener("resire", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []) 

    return(
        <div className="projects">

              <div className="project_descrition">
                <h1>🗿 My Projects</h1>
                <h2>❤️ Some of my work as a Software Developer </h2>
              </div>
              <div className="project_info">
               <Swiper
                    slidesPerView={1}
                    pagination= {{ clickable: true}}
                    navigation
               >
                    {data.map( (item) => (
                        <SwiperSlide key={item.id}>
                            <img
                                src={item.image}
                                alt="Slider"
                                className="slide-item"
                            />
                        </SwiperSlide>
                    ))}
               </Swiper>
              </div>
        </div>
    )
}