import React from 'react';

const CustomCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="relative bg-white border border-gray-300 rounded-lg shadow-lg w-11/12 md:w-8/12 lg:w-6/12 p-8">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-4">MIND CARE</h1>
          <p className="text-center text-lg mb-2">
            IS HERE TO KEEP TRACK AND WE AWARE ABOUT YOUR MENTAL HEALTH
          </p>
          <p className="text-center text-lg mb-6">TAKE YOUR FIRST TEST</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            BUTTON
          </button>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/4 bg-blue-300 rounded-tl-full rounded-bl-full"></div>
      </div>
    </div>
  );
};

export default CustomCard;
