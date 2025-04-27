import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-auto bg-gray-900 text-white text-center py-20">
      <h1 className="text-4xl font-bold mb-4">Task Tracking Made Simple</h1>
      <p className="text-xl mb-8">Efficiently manage your tasks across To Do, In Progress, and Done with ease.</p>
      <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
