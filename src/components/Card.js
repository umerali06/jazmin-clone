import React from "react";

const Card = ({ imageUrl, heading, buttonText, link }) => {
  return (
    <div className="max-w-xs mx-auto mb-4">
      <a href={link} className="block w-full h-full">
        <div className="overflow-hidden rounded-lg shadow-lg bg-white flex flex-col justify-center items-center h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
          <img src={imageUrl} alt={heading} className="w-full" />
          <div className="p-4 flex flex-col items-center justify-center flex-1">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2 uppercase">{heading}</h2>
              <button className="bg-white text-gray-800 py-2 px-4 rounded shadow-md hover:bg-gray-100 transition-colors duration-300 ease-in-out uppercase font-bold">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Card;
