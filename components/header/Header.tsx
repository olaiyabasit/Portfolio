import Link from "next/link";
import React from "react";
import { data, socialIcon } from "./data";

export const Header = () => {
  const displayLinks = () =>
    data.map((link, index) => (
      <Link href={link.to} key={index}>
        {link.name}
      </Link>
    ));

  const displaySocials = () =>
    socialIcon.map((social, index) => (
      <div
        className="h-8 w-8 flex items-center justify-center rounded-full bg-white text-black "
        key={index}
      >
        {social.icon}
      </div>
    ));

  return (
    <div className="sticky top-0 z-10 bg-[#101010]">
      <div className="font-monte flex justify-between w-[90%] my-0 mx-auto py-6 px-2 text-white ">
        <div>
          <p className="text-[24px]">Logo</p>
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-4">{displayLinks()}</div>
          <div className="flex gap-4">{displaySocials()}</div>
          <button className="py-2 px-4 border border-white rounded hover:bg-white hover:text-black">
            Let&apos;s Connect
          </button>
        </div>
      </div>
    </div>
  );
};
