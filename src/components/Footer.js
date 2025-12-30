import React from 'react';


function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col items-center">
        <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 mb-4 rounded-full"></div>
        <h1 className="text-3xl font-bold tracking-widest mb-4">Sundown</h1>
        <div className="w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 mt-4 rounded-full"></div>
      </div>
    </footer>
  );
}

export default Footer;
