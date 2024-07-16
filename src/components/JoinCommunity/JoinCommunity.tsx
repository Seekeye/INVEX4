import { Transition } from "../Transition";
import { FaRegPaperPlane, FaDownload } from "react-icons/fa";
import { Slider } from "./SliderP"; // Asegúrate de que este sea el nombre correcto

export function JoinCommunity() {
  return (
    <Transition className="flex flex-col items-center justify-center px-4 py-8 md:py-24 bg-secondary md:max-screen-xl">
      <h3 className="text-center text-2xl sm:text-3xl font-semibold text-white md:text-4xl lg:text-5xl max-w-full mb-8 leading-none">
        Join our community to find out about new updates
      </h3>
      <div className="flex justify-center mt-6 space-x-4">
        <a
          href="https://t.me/your_telegram_channel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center py-4 px-6 text-lg text-white transition-transform duration-200 transform hover:scale-110 bg-black rounded-lg shadow-lg hover:bg-black/80 hover:shadow-xl"
        >
          <FaRegPaperPlane size={24} />
          <span className="ml-3">Join the community</span>
        </a>
        <a
          href="/path/to/whithepaper.pdf"
          download
          className="flex items-center py-4 px-6 text-lg text-white transition-transform duration-200 transform hover:scale-110 bg-black rounded-lg shadow-lg hover:bg-black/80 hover:shadow-xl"
        >
          <FaDownload size={24} />
          <span className="ml-3">Download Whitepaper</span>
        </a>
      </div>
      <h4 className="text-center text-4xl font-semibold text-white my-8 mt-12 md:mt-16 md:text-4xl">
        Our Partners
      </h4>
      <Slider />
    </Transition>
  );
}
