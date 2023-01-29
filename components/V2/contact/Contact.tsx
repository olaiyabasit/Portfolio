import React from 'react';

export const Contact = () => {
  return (
    <div className="max-w-[1280px] m-auto py-[64px] w-[800px]">
      <div className="text-white font-bold w-[562px] m-auto text-[24px] text-center">
        I know you already have an awesome idea, Let’s bring it to life!!
      </div>
      <div className="mt-[64px]">
        <div className="flex ">
          <div className="border-white border-[1px] text-white px-[45px] py-[22px] text-[16px] font-bold">
            Name
          </div>
          <input className="bg-[#1E1E1E] border-white border-[1px] w-[100%] text-white px-[8px] focus:border-[#DCF2F4]" />
        </div>
        <div className="flex mt-[24px]">
          <div className="border-white border-[1px] text-white px-[45px] py-[22px] text-[16px] font-bold">
            Email
          </div>
          <input className="bg-[#1E1E1E] border-white border-[1px] w-[100%] text-white px-[8px]" />
        </div>
        <div className="mt-[24px]">
          <div className="border-white border-[1px] text-white px-[45px] py-[22px] text-[16px] font-bold">
            Message
          </div>
          <textarea
            rows={8}
            placeholder="Drop me a message - let’s chat"
            className="bg-[#1E1E1E] border-white border-[1px] w-[100%] text-white px-[45px] py-[22px] font-monte"
          />
        </div>
        <button className="py-2 px-4 border border-[#DCF2F4] text-[#1E1E1E] text-[14px] font-bold bg-[#DCF2F4] hover:text-black mt-[32px]">
          Submit
        </button>
      </div>
    </div>
  );
};
