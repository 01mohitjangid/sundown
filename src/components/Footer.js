import React from 'react';


function Footer() {
  return (
    <footer className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Gradient Background - Orange-red to Black */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FE320A] via-[#FE320A] to-black" />
        {/* Blurred dark cloud-like shape in lower-middle */}
        <div 
          className="absolute w-[85vw] h-[60vh] bg-black rounded-full"
          style={{
            left: '50%',
            top: '60%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(120px)',
            opacity: 0.9
          }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-between min-h-screen px-[3vw] py-[2.5vw]">
        {/* Top Section - Navigation and Newsletter */}
        <div className="flex justify-between items-start w-full pt-[2.5vw]">
          {/* Left Navigation - Vertical Stack */}
          <nav className="flex flex-col gap-[1.5vw]">
            {['Work', 'Studio', 'Contact'].map((item) => (
              <a 
                key={item}
                href={item === 'Work' ? '/#work' : item === 'Studio' ? '/#studio' : '/#contact'}
                className="text-white hover:opacity-80 transition-opacity cursor-pointer"
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: '1.2vw',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: '1.3'
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Newsletter Section */}
          <div className="flex flex-col items-end gap-[1vw] max-w-[26vw]">
            <p 
              className="text-white text-right"
              style={{
                fontSize: '0.75vw',
                lineHeight: '1.3vw',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontWeight: 300,
                letterSpacing: '0.01em'
              }}
            >
              Get industry insights and creative inspiration straight to your inbox.
            </p>
            <div className="flex flex-col items-end gap-[0.4vw] w-full mt-[0.6vw]">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent text-white placeholder-white outline-none border-none"
                style={{
                  fontSize: '0.75vw',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 300,
                  paddingBottom: '0.2vw',
                  letterSpacing: '0.01em'
                }}
              />
              <div className="w-full h-[1px] bg-white" />
            </div>
          </div>
        </div>

        {/* Center - Large Sundown Title */}
        <div className="flex-1 flex items-center justify-center">
          <h1 
            className="text-white"
            style={{
              fontSize: '11vw',
              fontFamily: 'sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: '0.88',
              textAlign: 'center'
            }}
          >
            Sundown
          </h1>
        </div>

        {/* Footer Section at Bottom */}
        <div className="w-full flex items-center justify-between pb-[2.5vw]">
          <span 
            className="text-white"
            style={{
              fontSize: '0.85vw',
              fontFamily: 'sans-serif',
              fontWeight: 300,
              letterSpacing: '0.02em'
            }}
          >
            Copyright © Sundown Studio
          </span>
          <span 
            className="text-white"
            style={{
              fontSize: '0.85vw',
              fontFamily: 'sans-serif',
              fontWeight: 300,
              letterSpacing: '0.02em'
            }}
          >
            Brooklyn, NY
          </span>
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity"
            style={{
              fontSize: '0.85vw',
              fontFamily: 'sans-serif',
              fontWeight: 300,
              letterSpacing: '0.02em'
            }}
          >
            Instagram
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity"
            style={{
              fontSize: '0.85vw',
              fontFamily: 'sans-serif',
              fontWeight: 300,
              letterSpacing: '0.02em'
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
