import React from 'react';


function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[105vh] bg-black text-white z-9 flex flex-col justify-end py-[1vw] px-[3vw]">
      <div className="w-full h-[20vh] bg-red-600" />
      <h1 className="text-[23vw] leading-none">Sundown</h1>
      <div className="w-full h-[10vh] border-t border-[#dadada]" />
    </footer>
  );
}

export default Footer;
