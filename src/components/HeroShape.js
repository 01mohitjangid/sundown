import React from 'react';

function HeroShape() {
  return (
    <div className="absolute w-[46vw] h-[36vw] right-0 top-[65vh]">
      <div className="bg-[#FE320A] h-full w-full mt-24 rounded-tl-[50%] rounded-bl-[50%] blur-[1px] absolute" />
      <div className="bg-gradient-to-b from-[#FE320A] to-[#fe3f0a] h-[30vw] w-[30vw] rounded-full absolute blur-[25px] animate-hero2" />
      <div className="bg-gradient-to-b from-[#FE320A] to-[#fe3f0a] h-[30vw] w-[30vw] rounded-full absolute blur-[25px] animate-hero1" />
    </div>
  );
}

export default HeroShape;
