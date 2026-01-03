import React from 'react';

function Hero() {
  return (
    <div className="relative w-full h-[65vh] flex items-end justify-between border-b border-[#0000003c] pb-[2.5vw] bg-[#f3eee7] overflow-hidden">
      <div className="w-[25vw] ml-[2vw] mb-[2vw]">
        <h3 className="text-[1.8vw] leading-[2vw] font-bold text-black">
          Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.
        </h3>
      </div>
      <div className="mr-[2vw] mb-[2vw]">
        <h1 className="text-[10vw] leading-[8vw] font-black text-right text-black">
          SPACES <br />THAT <br />INSPIRE
        </h1>
      </div>
      {/* Orange blurred shape */}
      <div className="absolute right-[-10vw] bottom-[-8vw] w-[45vw] h-[18vw] bg-gradient-to-tl from-orange-500 to-red-500 rounded-full blur-[60px] opacity-90 pointer-events-none z-0" />
    </div>
  );
}

export default Hero;
