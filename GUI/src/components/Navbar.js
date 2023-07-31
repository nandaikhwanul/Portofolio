import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
    <div
      className={`fixed w-full h-[80px] flex justify-between items-center px-4 text-black drop-shadow-lg font-medium ${
        isScrolled ? 'backdrop-sepia-0 bg-white/30 backdrop-blur-md z-10 md:bg-white/50' : ''
      }`}
      style={{ zIndex: isScrolled ? '10' : '10' }}
    >
      <div>
        <h1 className="mx-10 font-poppins">PORTOFOLIO</h1>
      </div>

      <ul className={nav ? 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-10 bg-white opacity-100' : 'opacity-0'}>
        <li className='mb-20 cursor-pointer'>
        <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className='mb-20 cursor-pointer'>
        <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className='mb-20 cursor-pointer'>
        <Link to="service" smooth={true} duration={500}>Service</Link>
        </li>
        <li className='mb-20 cursor-pointer'>
        <Link to="project" smooth={true} duration={500}>Project</Link>
        </li>
        <li className='mb-20 cursor-pointer'>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      <div onClick={handleClick} className="absolute right-10 text-xl md:hidden z-10">
        <button>
          <FaBars />
        </button>
      </div>

      <ul className="flex mr-14 md:opacity-100 sm:opacity-0">
        <li className='cursor-pointer'>
        <Link to="home" smooth={true} duration={500}>Home</Link> 
        </li>
        <li className='cursor-pointer'>
        <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className='cursor-pointer'>
        <Link to="service" smooth={true} duration={500}>Service</Link>
        </li>
        <li className='cursor-pointer'>
        <Link to="project" smooth={true} duration={500}>Project</Link>
        </li>
        <li className='cursor-pointer'>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
