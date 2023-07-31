import React from 'react';
import Blob from '../assets/blob2.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import classNames from 'classnames';
import {BsFillArrowDownCircleFill} from 'react-icons/bs';
import { Link } from 'react-scroll';

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 100, // Menyesuaikan offset sesuai kebutuhan Anda
      duration: 1000, // Durasi animasi dalam milidetik
    });
  }, []);
  const generateDonuts = () => {
    const donuts = [];
    
    const brightColors = ['#FF0000', '#00FF00', '#E966A0', '#FFFF00', '#00FFFF','#30A2FF', '#00C4FF', '#EEEDED', '#A076F9', '#08D9D6'];

    for (let i = 0; i < 10; i++) {
      // Generate random values for size, position, and color
      const size = Math.floor(Math.random() * 150) + 50; // Random size between 50 and 150 pixels
      const positionX = Math.floor(Math.random() * 1200); // Random X position between 0 and 500 pixels
      const positionY = Math.floor(Math.random() * 500); // Random Y position between 0 and 500 pixels
      const color = brightColors[Math.floor(Math.random() * brightColors.length)];
      // const color = "#" + Math.floor(Math.random() * 16777215).toString(16); // Random hex color code

      // Define inline styles for the donut
      const donutStyle = {
        width: `${size}px`,
        height: `${size}px`,
        top: `${positionY}px`,
        left: `${positionX}px`,
        backgroundColor: color,
        mixBlendMode: 'difference',
      };

      
      const donutClasses = classNames("donut", "rounded-full", "absolute");

      donuts.push(
        <div className='-z-10 drop-shadow-2xl '>
          <div key={i} className={donutClasses} style={donutStyle}></div>
        </div>
        
      );
    }

    return donuts;
  };
  return (
    <div className='judul select-none' id='home'>
      <div className='lg:absolute lg:top-20 lg:left-10 lg:opacity-100 sm:absolute sm:left-36 sm:top-5 z-[1]' data-aos="fade-down">
        <img src={Blob} alt="blob"  className='drop-shadow-xl lg:opacity-100 w-[600px] sm:w-2/3'  />
        <img src={Blob} alt="blob" className='drop-shadow-xl mx-0 absolute top-10 opacity-30 sm:w-2/3 '/>
      </div> 

      <div className="" data-aos="zoom-in">
    {generateDonuts()}
  </div>
            
      <div className="homes flex justify-center items-center h-screen lg:ml-96 relative z-[2]" data-aos="fade-left">
        <div className="grid md:place-items-start text-center sm:text-center sm:mt-[300px] lg:mt-0">
          <h1 className='text-4xl font-extrabold tracking-wide font-nunito'>HELLO I'AM<br />
          </h1>
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
            <span class=" text-4xl font-extrabold tracking-wide font-nunito text-rose-800relative text-white">NANDA IKHWANUL</span>
          </span>
          <span className='text-lg tracking-normal font-[500]'>I am a dedicated professional in my field</span>
          <span className='text-lg tracking-normal font-[500] sm:mb-5'>with extensive experience in various fields.</span>
          <div className='flex gap-4'>
          <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-44 pe-4 h-10 rounded-xl text-white text-base font-nunito font-medium tracking-wide relative hover:brightness-90 '><BsFillArrowDownCircleFill className='animate-bounce w-6 h-6 absolute right-1'/> DOWNLOAD CV</button>
          <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-32 h-10 rounded-xl text-white text-base font-nunito font-medium tracking-wide relative hover:brightness-90  '><span className='animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-700 opacity-100 right-1 top-0'></span><Link to="contact" smooth={true} duration={500}>CONTACT</Link></button>
          
          </div>
      

        </div>
      </div>
    
    </div>
    
  )
}

export default Home;
