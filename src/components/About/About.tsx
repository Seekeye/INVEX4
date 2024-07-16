import { Transition } from "../Transition";
import Image from "next/image";

export function About() {
  return (
    <Transition className="grid gap-10 px-4 py- md:py-44 md:px-36 md:grid-cols-2">
      <div
        className="flex flex-col items-center justify-center max-w-xl mb-7"
        id="about"
      >
        <h4 className="text-secondary">About us</h4>
        <h5 className="my-4 text-xl font-bold text-secondary">Our Vision</h5>
        <p className="mb-4 text-justify">
          Our vision is to revolutionize the investment industry by offering
          high-quality, tokenized assets that provide exceptional returns and
          exclusive experiences.
        </p>
        <h5 className="my-4 text-xl  font-bold text-secondary">Our Growth</h5>
        <p className="mb-4 text.justify">
          Since our inception, we have grown from a small startup to a leader in
          luxury asset investments, continually innovating and expanding our
          portfolio.
        </p>
        <h5 className="my-4 text-xl font-bold text-secondary">
          Our Commitment
        </h5>
        <p className="mb-4 text-justify">
          We are dedicated to providing our investors with the best possible
          service, ensuring their investments are secure, profitable, and
          enjoyable.
        </p>
        <h5 className="my-4 text-xl font-bold text-secondary">Our Values</h5>
        <p className="mb-4 text-justify">
          Innovation, Excellence, Integrity, and Passion are the core values
          that guide our business and drive our success.
        </p>
      </div>
      <div className="flex items-stretch justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-auto h-auto rounded-lg"
          width="400"
          height="450"
        >
          <source src="/assets/vid2.mp4" type="video/mp4" />
          Your browser does not support the video tag
        </video>
      </div>
    </Transition>
  );
}
