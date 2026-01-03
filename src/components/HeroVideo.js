import React from "react";

function HeroVideo() {
  return (
    <div className="w-full flex justify-center mt-8 px-4 relative">
      {/* Orange blurred background as a horizontal oval at the bottom */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/3 w-[80%] h-[30%] z-0 pointer-events-none">
        <div
          className="w-full h-full bg-gradient-to-t from-orange-500 to-transparent rounded-full blur-[90px] opacity-70"
        />
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/asset/video.mp4"
        className="w-full max-w-[95%] h-[90vh] rounded-3xl shadow-2xl object-cover relative z-10"
        style={{ display: 'block' }}
      />
    </div>
  );
}

export default HeroVideo;
