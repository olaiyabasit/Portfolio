import React from "react";
import Typewriter from "typewriter-effect";
import { TbArrowLoopRight2 } from "react-icons/tb";

export const Hero = () => {
  return (
    <div className="absolute top-0">
      <div className="h-screen w-screen relative bg-slate-900" />
      <div className="absolute top-[20%] w-full mx-auto">
        <div className="w-[80%] mx-auto">
          <Typewriter
            options={{
              strings: ["Hi, I'm Olaiya Basit"],
              autoStart: true,
              loop: true,
              wrapperClassName: "Typewriter__wrapper",
            }}
          />
          <p className="text-white font-semibold text-xl">
            Front End Developer
          </p>
          <p className="w-[40%] text-white">
            A developer with a passion for building rich interactive web apps
            experienced and passionate about developing scalable web
            applications across the full stack
          </p>
          <p className="flex items-center text-white my-10 text-[18px] gap-5">
            Let&apos;s Connect
            <span>
              <TbArrowLoopRight2 />
            </span>
          </p>
          <div className="h-[320px] w-[320px] rounded-full flex justify-items-end right-[10%] top-[50%] absolute">
            <img
              src="/images/olaiyab.jpg"
              className="absolute h-[100%] w-full z-20 rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
