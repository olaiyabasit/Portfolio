import { FC, useState } from 'react';
import Image from 'next/image';
import React from 'react';
import { SliderProps } from './types';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';
import clx from 'classnames';

export const Slider: FC<SliderProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const displaySlides = () =>
    data.map((slide, slideIndex) => (
      <div key={slideIndex} className="text-center text-white">
        {activeIndex === slideIndex && (
          <>
            <div className="relative w-[120px] h-[120px] rounded-[50%] m-auto">
              <Image
                src={slide.img}
                layout="fill"
                objectFit="cover"
                className="rounded-[50%]"
              />
            </div>
            <p className="font-poppins mt-[24px] text-center">
              {slide.testimony}
            </p>
            <div className="mt-[8px] font-poppins text-[20px] ">
              <p className="font-bold">{slide.name}</p>
              <p className="">{slide.occupation}</p>
            </div>
          </>
        )}
      </div>
    ));

  const gotoPrevious = () => {
    setActiveIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1);
  };

  const gotoNext = () => {
    setActiveIndex(activeIndex === data.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div
          className="w-[80px] h-[80px] flex items-center justify-center bg-[#2B2C2C] cursor-pointer"
          onClick={gotoPrevious}
        >
          <ImArrowLeft className="text-[#B8DBDF]" />
        </div>
        <div className="w-[620px] flex justify-center items-center mt-[74px] ">
          {displaySlides()}
        </div>
        <div
          className="w-[80px] h-[80px] flex items-center justify-center bg-[#2B2C2C] cursor-pointer"
          onClick={gotoNext}
        >
          <ImArrowRight className="text-[#B8DBDF]" />
        </div>
      </div>
      <div className="flex gap-[4px] mt-[6px] justify-center pb-[74px]">
        {data.map((_, index) => (
          <div
            key={index}
            className={clx(
              'h-[10px] w-[10px] rounded-full bg-white',
              activeIndex === index && 'bg-[#B8DBDF]'
            )}
          ></div>
        ))}
      </div>
    </>
  );
};
