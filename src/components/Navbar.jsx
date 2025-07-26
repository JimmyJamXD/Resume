import React from 'react'

const Navbar = () => {
  const navLinks = [
    { name: "GitHub", url: "https://github.com/JimmyJamXD" },
    { name: "LinkedIn", url: "https://linkedin.com/in/jimmyngo" },
    { name: "Email", url: "mailto:jimmyngo.dev@gmail.com" },
    { name: "Resume", url: "/resume.pdf" }
  ];

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-black bg-opacity-40 backdrop-blur-md fixed top-0 z-50">
      <h1 className="text-2xl text-[#00b894] font-bold">Jimmy Ngo</h1>
      <div className="flex gap-6">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.url}
            className="text-white hover:text-[#00b894] transition-transform duration-200 hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
