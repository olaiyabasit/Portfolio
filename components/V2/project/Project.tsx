import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { brandData, projectData } from './data';

export const Project = () => {
  const displayBrands = () =>
    brandData.map((brand, index) => <img src={brand} key={index} />);

  const displayprojects = () =>
    projectData.map((project, index) => (
      <Link key={index} href={project.url} passHref>
        <a target="_blank" rel="noopener noreferrer">
          <div className="h-[420px] w-[400px] relative animate-marquee">
            <Image
              src={project.thumbnail}
              alt={project.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </a>
      </Link>
    ));

  return (
    <div className="max-w-[1280px] m-auto py-[100px]">
      <p className="text-white text-[24px] font-bold text-center">
        privileged to work with top brands
      </p>
      <div className="flex justify-center gap-[64px] mt-[40px]">
        {displayBrands()}
      </div>
      <div className="mt-[100px]">
        <p className="text-white text-[24px] font-bold text-center">
          Featured Projects
        </p>
        <div className="flex gap-[24px] overflow-hidden ">
          {displayprojects()}
        </div>
        <div className="flex gap-[16px] justify-center mt-[64px]">
          <button className="py-2 px-4 border border-[#DCF2F4] text-[14px] font-bold bg-[#DCF2F4] hover:bg-black hover:text-[#DCF2F4]">
            Let&apos;s Talk
          </button>
          <button className="py-2 px-4 border border-[#DCF2F4] text-[#DCF2F4] text-[14px] font-bold hover:bg-[#DCF2F4] hover:text-black">
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
};
