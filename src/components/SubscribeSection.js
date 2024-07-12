import React from "react";

const SubscribeSection = () => {
  return (
    <section className="bg-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-gray-300 text-lg mb-2">KEEP ME UPDATED</h3>
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
            SUBSCRIBE US!
          </h1>
          <p className="text-gray-300 font-semibold mb-4">
            Get Latest News & Exclusive Offers
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <input
              type="email"
              placeholder="E-mail"
              className="py-3 px-4 mb-2 md:mb-0 md:mr-2 border border-gray-300 bg-transparent rounded-none focus:outline-none text-gray-200"
              style={{
                minWidth: "250px",
                width: "100%",
                maxWidth: "320px",
                borderRadius: "0.25rem",
              }}
            />
            <button
              className="bg-white text-gray-800 py-3 px-6 rounded-none hover:bg-gray-200 transition-colors duration-300 ease-in-out font-semibold"
              style={{
                minWidth: "250px",
                maxWidth: "320px",
                borderRadius: "0.25rem",
              }}
            >
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
