import React from 'react';
import { socialIcon } from '../header/data';

export const Footer = () => {
  const displaySocials = () =>
    socialIcon.map((social, index) => (
      <div
        className="h-6 w-6 flex items-center justify-center border border-inherit p-1 text-white cursor-pointer"
        key={index}
      >
        {social.icon}
      </div>
    ));

  return (
    <div className="m-auto max-w-[1280px] px-[64px] py-[24px] mt-[50px] text-[12px] border-t-2 border-[#1E1E1E]">
      <div className="flex justify-between items-center text-white font-poppins">
        <div className="flex gap-[8px]">
          <p>&#169; Basit 2022.</p>
          <a href="mailto:olaiyabasit@gmail.com?subject = Feedback&body = Message">
            olaiyabasit@gmail.com
          </a>
          <a href="tel:+2349021867268?subject = Feedback&body = Message">
            +234(8100265999)
          </a>
        </div>
        <div className="flex gap-[8px] items-center">{displaySocials()}</div>
      </div>
      <div className="mt-[32px] pb-[36px] text-white text-[12px]">
        <a
          href="https://bit.ly/hamzaabdul   "
          target="_blank"
          rel="noopener noreferrer"
        >
          Design by Hamza Abdul
        </a>
      </div>
    </div>
  );
};
