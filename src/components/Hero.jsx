import React from 'react'

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center h-screen pt-20">
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
        Hi, I'm Jimmy Ngo
      </h2>
      <p className="text-lg md:text-xl text-gray-300 mb-8">
        Field Application Engineer | Technical Account Manager
      </p>
      <a
        href="/resume.pdf"
        download
        className="px-6 py-3 bg-[#00b894] rounded-xl text-white font-semibold text-lg hover:bg-[#019870] transition-all duration-300 animate-bounce"
      >
        Download Resume
      </a>
    </section>
  )
}

export default Hero
