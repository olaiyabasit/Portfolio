import Link from "next/link";
import React from "react";
import { data, socialIcon } from "./data";

export const Header = () => {
  const displaySocials = () =>
    socialIcon.map((social, index) => (
      <div
        className="h-6 w-6 flex items-center justify-center border border-inherit p-1 text-white cursor-pointer"
        key={index}
      >
        <Link href={social.to}>{social.icon}</Link>
      </div>
    ));

  return (
    <div className="sticky top-0 z-10 bg-[#1E1E1E] font-poppins">
      <div className="flex justify-between py-[30px] px-[16px] w-[100%] m-auto max-w-[1280px]">
        <div className="flex gap-[8px] items-center">{displaySocials()}</div>
        <div className="ml-[200px]">
          <img src="/images/Basit.svg" />
        </div>
        <div className="flex gap-[16px]">
          <button className="py-2 px-4 border border-[#DCF2F4] text-[#DCF2F4] text-[14px] font-bold hover:bg-[#DCF2F4] hover:text-black">
            View Resume
          </button>
          <button className="py-2 px-4 border border-[#DCF2F4] text-[14px] font-bold bg-[#DCF2F4] hover:bg-black hover:text-[#DCF2F4]">
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </div>
  );
};
