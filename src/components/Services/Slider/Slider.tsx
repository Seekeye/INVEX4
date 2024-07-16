import { Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"; // Importar CSS de autoplay
import { sliderDataImages } from "./Slider.data";
import Image from "next/image";

export function Slider() {
  return (
    <Swiper
      slidesPerView={2.5}
      spaceBetween={15}
      freeMode={true}
      autoplay={{
        delay: 3000, // Tiempo de retraso en milisegundos entre transiciones automáticas
        disableOnInteraction: false, // No deshabilitar autoplay en la interacción del usuario
        pauseOnMouseEnter: true, // Pausar autoplay cuando el mouse está sobre el slider
      }}
      loop={true} // Habilitar loop para que el slider pase continuamente
      speed={2000}
      scrollbar={{ draggable: true }}
      modules={[Scrollbar, Autoplay]}
      className="h-[200px] md:h-[320px] w-[300px] md:w-[500px]"
      grabCursor
    >
      {sliderDataImages.map(({ id, urlImage }) => (
        <SwiperSlide key={id} className="flex justify-center items-start">
          <Image
            src={`/assets/houses/${urlImage}`}
            alt="House"
            width={500}
            height={700}
            className="m-auto h-auto rounded-xl"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
