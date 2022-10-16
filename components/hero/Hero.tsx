import React from "react";
import Typewriter from "typewriter-effect";
import { TbArrowLoopRight2 } from "react-icons/tb";

export const Hero = () => {
  return (
    <div>
      <div className="h-screen w-screen relative bg-[#101010] font-monte" />
      <div className="absolute top-[20%] w-full mx-auto">
        <div className="w-[90%] mx-auto">
          <Typewriter
            options={{
              strings: [
                "Hi,<br/> I'm Olaiya Basit,<br/><span>Web Developer.</span>",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: "Typewriter__wrapper",
            }}
          />
          <p className="w-[40%] text-white">
            A developer with a passion for building rich interactive web apps
            experienced and passionate about developing scalable web
            applications across the full stack
          </p>
          <p className="flex items-center text-white my-10 text-[18px] gap-5  py-2 px-4 border border-white rounded w-[200px] hover:bg-white hover:text-black">
            Let&apos;s Connect
            <span>
              <TbArrowLoopRight2 />
            </span>
          </p>
          <div className="  rounded-full flex justify-items-end right-[10%] top-[30%] absolute">
            {/* <h1 className="text-[400px] text-white">OB</h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};
