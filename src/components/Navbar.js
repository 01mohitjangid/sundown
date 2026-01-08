import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-transparent w-full">
      <img
        src="https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg"
        alt="Sundown Logo"
        className="h-16 w-auto"
      />
      <div
        className="hidden md:flex items-center gap-[1vw]"
      >
        {["Work", "Studio", "Contact"].map((item) => (
          <h4
            key={item}
            className="relative px-5 py-2 border border-black/25 rounded-full font-medium text-black/75 text-lg overflow-hidden transition-all duration-400 group"
          >
            <span
              className="relative z-10 transition-colors duration-400 group-hover:text-white"
            >
              <a href="#">{item}</a>
            </span> 
            <span
              className="absolute left-0 bottom-[-100%] w-full h-full bg-black rounded-full transition-all duration-400 group-hover:bottom-0 group-hover:rounded-none"
              aria-hidden="true"
            />
          </h4>
        ))}
      </div>
      <h3 className="block md:hidden px-[5vw] py-[3vw] border border-[#ababab] rounded-full text-[4vw] font-light pl-[10vw]">Menu</h3>
    </nav>
  );
}

export default Navbar;
