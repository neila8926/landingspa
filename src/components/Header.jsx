import React, { useState, useEffect } from 'react';
import logoBlanco from '../assets/logoblanco.png'
import logo from '../assets/logo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
  
    const handleScroll = () => {
        console.log(window.scrollY)
      if (window.scrollY >500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full text-white  px-4 py-1 z-50 transition-colors duration-300 ${isScrolled ? 'bg-primary opacity-95' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <img src={`${isScrolled ? logoBlanco : logoBlanco  }`} alt="Logo" className='w-20' />
        <a href="#reservar" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out">
          Reservar Ahora
        </a>
      </div>
    </header>
  );
};

export default Header;
