import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { sliderDataImages } from "./Slider.data";
import Image from "next/image";

export function Slider() {
  return (
    <div className="w-full h-60 sm:h-80 md:h-96 lg:h-112">
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        freeMode={true}
        autoplay={{
          delay: 300,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        speed={2000}
        modules={[Navigation, Scrollbar, Autoplay]}
        className="h-full w-full"
        grabCursor
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
      >
        {sliderDataImages.map(({ id, urlImage }) => (
          <SwiperSlide key={id} className="flex justify-center items-center">
            <div className="w-full flex justify-center items-center">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 flex justify-center items-center">
                <Image
                  src={`/assets/houses/${urlImage}`}
                  alt="House"
                  width={300}
                  height={350}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
