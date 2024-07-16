import { FloatedSearch } from "../FloatedSearch";

export function Banner() {
  return (
    <div className="container relative mx-auto">
      <div>
        <div className="pt-20 md:pt-0 min-h-[80vh] relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-white">
          {/* Video de fondo */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Overlay oscuro para mejor legibilidad */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Contenido del banner */}
          <div className="relative z-10 max-w-3xl text-center text-white px-4 mb-20">
            <h2 className="text-4xl md:text-7xl font-semibold">
              Building the future of investments
            </h2>
            <p className="mt-2 text-lg md:text-xl md:mt-8">
              Unlocking financial innovation with INVEX. Dive into the world of
              tokenized assets and reshape your investment strategy with the
              best professionals.
            </p>
          </div>

          {/* FloatedSearch posicionado más abajo */}
        </div>
        <div className="absolute bottom-0.05 w-full px-4 hidden md:block">
          <FloatedSearch />
        </div>
      </div>
    </div>
  );
}
