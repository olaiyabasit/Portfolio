import React from 'react';
import { Slider } from '../slider/Slider';
import { testimonialData } from './data';

export const Testimonial = () => {
  return (
    <div className="max-w-[1280px] m-auto bg-[#1E1E1E] font-monte">
      <div className="text-white text-center text-[24px] w-[519px] mx-auto font-bold">
        My clients become family, here’s what they have to say
      </div>
      <Slider data={testimonialData} />
    </div>
  );
};
