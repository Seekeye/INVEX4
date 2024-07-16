import { useState } from "react";
import { GrFormDown, GrTag, GrFormUp } from "react-icons/gr";

export function SearchPriceRange() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative mb-2 md:mb-0 flex items-center gap-4 border-[1px] rounded-lg px-1 py-2 justify-between cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <GrTag />
      <div>
        <p>Price range</p>
        <p className="text-xs">Select your price range</p>
      </div>
      {isOpen ? <GrFormUp /> : <GrFormDown />}
      {isOpen && (
        <div className="absolute top-[70px] bg-white z-50 p-4 rounded-lg shadow-light w-[230px] left-0">
          <p>Any range</p>
          <p>5.000 - 50.000</p>
          <p>50.000 - 250.000</p>
          <p>250.000 - 500.000</p>
          <p>500.000 - 1.000.000</p>
        </div>
      )}
    </div>
  );
}
