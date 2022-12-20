import React from "react";
import { TfiMouse } from "react-icons/tfi";

export const Hero = () => {
  return (
    <div className="w-screen relative bg-[#1E1E1E] font-monte">
      <div className="max-w-[1280px] m-auto">
        <div className="w-[777px] mx-auto pt-[64px] pb-[40px]">
          <div className="text-white text-[96px] text-center font-bold leading-[117px]">
            Front-End
            <br />
            <span className="text-[#EE9D9D]">&lt;</span>
            <span className="text-[#B8DBDF]">Developer</span>
            <span className="text-[#18DE14]">&gt;</span>
            <br />
            with keen eyes for detail.
          </div>
          <div className="w-[671px] m-auto font-poppins text-[20px] text-center text-white pt-[24px]">
            I am Daramola Abdulbasit, a developer who works with startups
            looking to push creative boundaries and create unique user
            experiences.
          </div>
          <div className="flex gap-[16px] justify-center mt-[24px]">
            <button className="py-2 px-4 border border-[#DCF2F4] text-[14px] font-bold bg-[#DCF2F4] hover:bg-black hover:text-[#DCF2F4]">
              Let&apos;s Talk
            </button>
            <button className="py-2 px-4 border border-[#DCF2F4] text-[#DCF2F4] text-[14px] font-bold hover:bg-[#DCF2F4] hover:text-black">
              View Resume
            </button>
          </div>
          <TfiMouse className="text-white text-[48px] text-center w-full justify-center mt-[60px]" />
        </div>
      </div>
    </div>
  );
};
