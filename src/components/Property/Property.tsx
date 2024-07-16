import { formatPrice } from "@/utils/formatPrice";
import { PropertyProps } from "./Property.types";
import {
  LiaBedSolid,
  LiaRulerCombinedSolid,
  LiaStarSolid,
} from "react-icons/lia";
import { TfiLocationPin } from "react-icons/tfi";
import Image from "next/image";
import { CiTimer } from "react-icons/ci";
import { useState } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiCodesandbox } from "react-icons/fi";

export function Property(props: PropertyProps) {
  const { house } = props;

  const baseStyle = {
    color: "white",
    padding: "0.4em 0.8em",
    borderRadius: "0.5em",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(90deg, #66bb6a 0%, #43a047 100%)",
    transition: "all 0.3s ease",
    fontWeight: "bold",
    fontSize: "1.1em",
  };

  const hoverStyle = {
    ...baseStyle,
    transform: "scale(1.05)",
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2)",
  };

  const mobileStyle = {
    color: "white",
    padding: "0.2em 0.4em",
    borderRadius: "0.3em",
    boxShadow: "0 2px 3px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(90deg, #66bb6a 0%, #43a047 100%)",
    transition: "all 0.3s ease",
    fontWeight: "bold",
    fontSize: "0.8em",
  };

  const mobileHoverStyle = {
    ...mobileStyle,
    transform: "scale(1.05)",
    boxShadow: "0 3px 4px rgba(0, 0, 0, 0.2)",
  };

  const [style, setStyle] = useState(baseStyle);

  return (
    <main className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-[70%, 1fr] my-3 py-5 gap-6">
        <div className="px-6">
          <h1 className="text-3xl mb-4 text-secondary flex justify-between items-center">
            <span className="space-right">
              {house.tokenname}
              {house.id}
            </span>
            <span className="space.right">{house.name}</span>
            <span className="font-semibold flex flex-col items-end md:items-center md:flex-row">
              <span
                style={style}
                onMouseOver={() =>
                  setStyle(
                    window.innerWidth <= 768 ? mobileHoverStyle : hoverStyle
                  )
                }
                onMouseOut={() =>
                  setStyle(window.innerWidth <= 768 ? mobileStyle : baseStyle)
                }
                className="financing-button mr-3"
              >
                Financing
              </span>{" "}
              {formatPrice(house.price)}
            </span>
          </h1>
          <div className="flex gap-5 my-4">
            <h2 className="flex gap-3 text-xl items-center">
              <TfiLocationPin />
              {house.location}
            </h2>
            <div className="flex items-center px-2 py-1 rounded-lg bg-secondary top-2 right-2 text-white">
              <LiaStarSolid />
              <span className="ml-1 font-semibold">{house.star}</span>
            </div>
          </div>
          <Image
            src={`/assets/properties/${house.image}`}
            alt={`House at ${house.location}`}
            width={1200}
            height={1200}
            className="w-full h-auto rounded-2xl"
            priority
          />
          <div className="gap-4 lg:flex mt-4">
            <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300">
              <LiaBedSolid />
              <span className="ml-2">{house.bedrooms}</span>
            </div>
            <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300">
              <LiaRulerCombinedSolid />
              <span className="ml-2">{`${house.meters} m`}</span>
            </div>
            <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300">
              <CiTimer />
              <span className="ml-2">{`${house.time} years`}</span>
            </div>
            <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300">
              <RiMoneyDollarCircleLine />
              <span className="ml-2">{`${house.APY} APY %`}</span>
            </div>
            <div className="flex items-center justify-center px-2 py-1 my-1 rounded-lg bg-slate-300">
              <FiCodesandbox />
              <span className="ml-2">
                {house.tokenname}
                {house.id}
              </span>
            </div>
          </div>
          <div
            className="my-3 block description-container"
            style={{ textAlign: "justify" }}
            dangerouslySetInnerHTML={{ __html: house.description }}
          ></div>
        </div>
        <div className="hidden md:block"></div>
      </div>
      <div className="block md:hidden mt-6"></div>
      <style jsx>{`
        @media (max-width: 768px) {
          .financing-button {
            font-size: 0.8em;
            padding: 0.2em 0.4em;
            box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
            margin-right: 0;
          }
          .financing-button:hover {
            transform: scale(1.05);
            box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
          }
        }
        .description-container h3 {
          font-size: 1.5em;
          font-weight: bold;
          margin-top: 1em;
          margin-bottom: 0.5em;
        }
        .description-container p {
          margin-bottom: 1em;
        }
      `}</style>
    </main>
  );
}
