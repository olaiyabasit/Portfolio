import React from "react";
import { brandData } from "./data";

export const Testimonial = () => {
  const displayBrands = () =>
    brandData.map((brand, index) => <img src={brand} key={index} />);

  return (
    <div className="h-[60vh] bg-[#1E1E1E] ">
      <div className="max-w-[1280px] m-auto">
        <p className="text-white text-[24px] font-bold text-center">
          privileged to work with top brands
        </p>
        <div className="flex justify-center gap-[64px] mt-[40px]">
          {displayBrands()}
        </div>
      </div>
    </div>
  );
};
