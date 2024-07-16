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
    <div className="w-full h-80">
      {" "}
      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        freeMode={true}
        autoplay={{
          delay: 300,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }} // Configuración de autoplay
        loop={true} // Habilitar loop
        speed={2000}
        modules={[Navigation, Scrollbar, Autoplay]}
        className="h-full w-full"
        grabCursor
      >
        {sliderDataImages.map(({ id, urlImage }) => (
          <SwiperSlide key={id} className="flex justify-center items-center">
            <div className="w-full flex justify-center items-center">
              <Image
                src={`/assets/houses/${urlImage}`}
                alt="House"
                width={300}
                height={350}
                className="rounded-xl"
                objectFit="contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
