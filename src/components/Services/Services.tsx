"use client";

import { Transition } from "../Transition";
import { Slider } from "./Slider";
import { dataFeatures } from "./Feature.data";
import { Icon } from "lucide-react";

export function Services() {
  return (
    <>
      <Transition className="grid px-4 py-6 md:py-46 md:px-36 md:grid-cols-2 md:gap-28">
        <div className="max-w-xl mb-8" id="services">
          <h4 className="text-secondary">Services</h4>
          <h2 className="my-4 text-3xl font-semibold">
            Your Gateway to Luxury Investments
          </h2>
          <p className="mb-10 mt-7" style={{ textAlign: "justify" }}>
            Acquire luxury yachts with attractive returns, invest in valuable
            art pieces or real estate, and access tokenized assets to diversify
            your portfolio. Receive expert advice, enjoy a secure platform, and
            let professionals manage your investments.
          </p>
          <p className="mb-10 mt-7" style={{ textAlign: "justify" }}>
            Experience exclusive events, seize global opportunities, and empower
            yourself with educational resources.
          </p>
          <p
            className="my-2 text-xl font-semibold text-center text-white bg-secondary p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex justify-center items-center"
            style={{ textAlign: "justify" }}
          >
            Start today with INVEX
          </p>
        </div>
        <div className="flex items-center justify-center mb-8">
          <Slider />
        </div>
      </Transition>
      <div className="w-full px-4 md:px-36 mt-1">
        <h3 className="text-2xl font-semibold text-center mb-2">
          Key Features
        </h3>
        <p className="text-center mb-4">
          We are all about our client's conform and safety. That's why we
          provide the best service you can imagine.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
          {dataFeatures.map(({ icon: Icon, text, bg, delay }) => (
            <div
              key={text}
              className={`p-4 rounded-lg transition-transform transform hover:scale-105 flex flex-col items-center`}
              style={{ transitionDelay: `${delay}s` }}
            >
              <div
                className={`p-4 rounded-full ${bg} w-fit flex items-center justify-center`}
                style={{ width: "50px", height: "50px" }}
              >
                <Icon className="w-8 h-8 text-primary" />
              </div>

              <p className="text-sm font-bold text-center mt-2">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
