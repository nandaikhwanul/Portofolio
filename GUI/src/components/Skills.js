import React from 'react'
import Tailwind from '../assets/tailwind.svg';
import Reactjs from '../assets/reactjs.png';
import Node from '../assets/node.png';
import Mongodb from '../assets/mongodb.png';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {
  useEffect(() => {
    AOS.init({
      offset: 100, // Menyesuaikan offset sesuai kebutuhan Anda
      duration: 1000, // Durasi animasi dalam milidetik
    });
  }, []);

  return (
    <div className='judul' id='service'>
        <div className='grid justify-center items-center h-screen text-center'>
            <div className='space-y-20'>
                <span className='font-poppins text-4xl tracking-wide font-bold drop-shadow-lg ' data-aos="zoom-in">MY SKILLS</span>
            <div className='skills grid  grid-cols-4 gap-3 ' data-aos="fade-up">
                <span><a href=""><img src={Tailwind} style={{width: '100px'}} alt="" className='drop-shadow-lg' /></a></span>
                <span><a href=""><img src={Reactjs} style={{width: '70px'}} alt="" className='drop-shadow-lg' /></a></span>
                <span><a href=""><img src={Node} style={{width: '120px'}} alt="" className='drop-shadow-lg' /></a></span>
                <span><a href=""><img src={Mongodb} style={{width: '100px'}} alt="" className='drop-shadow-lg absolute bottom-2' /></a></span>
               
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills