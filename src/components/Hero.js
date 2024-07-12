import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen">
      <div className="relative h-full">
        <picture className="absolute inset-0 w-full h-full">
          <source
            media="(max-width: 700px)"
            srcSet="https://jazmin.pk/cdn/shop/files/MOBILE_PREVIEWf.jpg?v=1719917883"
          />
          <img
            src="https://jazmin.pk/cdn/shop/files/WB2_0a9f8f78-0a72-452b-aec1-8fdba4229c86.jpg?v=1719917882"
            alt="Unstitched Summer"
            className="object-cover w-full h-full"
          />
        </picture>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-25"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <div className="absolute bottom-12 md:bottom-20">
            <h1 className="text-3xl md:text-5xl mb-4">Unstitched Summer</h1>
            <button className="bg-white text-gray-800 py-2 px-6 rounded">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
