import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide } from "swiper/react";
import "../components/styles/Carousel2.css";
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


import OfficeWorkerPicture from "../images/OfficeWorker.jpg";
import ScienceGuyPicture from "../images/OfficeWorker.jpg";
const Carousel2 = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        loop={true}
        slidesPerView={3}
        navigation
        //pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img src= {OfficeWorkerPicture} alt="" width="1120px" height="626px"/></SwiperSlide>
        <SwiperSlide><img src= {ScienceGuyPicture} alt="" width="1120px" height="626px"/></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    );
  };

  export default Carousel2;