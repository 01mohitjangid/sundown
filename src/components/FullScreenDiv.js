import React from 'react';

function FullScreenDiv() {
  return (
    <div className="fixed top-[-100%] left-0 w-full h-screen bg-black/45 z-[99] transition-all duration-500 ease-in-out">
      <div className="w-full h-1/2 bg-[#EFEAE3] rounded-b-[20px]"></div>
    </div>
  );
}

export default FullScreenDiv;
