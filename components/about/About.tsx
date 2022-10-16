import React from "react";

export const About = () => {
  return (
    <div className="bg-[#191919] py-[80px] font-monte">
      <div className="w-[90%] m-auto">
        <div className="text-5xl text-white font-bold mb-[24px]">About Me</div>
        <div className="flex justify-between">
          <div className="w-[45%]">
            <img
              src="/images/avatar.jpeg"
              alt="About Images"
              className="rounded-full h-[400px] "
            />
          </div>
          <p className="w-[45%] text-white">
            Since beginning my journey nearly 4 years ago, I've done remote work
            for agencies and collaborated with talented people to create digital
            content for both business and consumer use. I'm quietly confident,
            naturally curious, and perpetually working on improving my chops one
            problem at a time.
          </p>
        </div>
      </div>
    </div>
  );
};
