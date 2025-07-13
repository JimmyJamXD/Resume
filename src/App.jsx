import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className='bg-gray-900 text0whute scroll-smooth'>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
}

export default App;
