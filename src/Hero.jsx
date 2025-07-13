import React from 'react';

function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Jimmy</h1>
      <p className="text-xl text-gray-400">Engineer</p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full transition"
      >
        View Projects
      </a>
    </section>
  );
}

export default Hero;
