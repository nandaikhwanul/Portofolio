import React from 'react';
import Blob from "../assets/blobanimation.svg";
import office from "../assets/office.png";
import AOS from "aos";

const About = () => {
  return (
    <div className='judul' id='about'>
      <div className='grid justify-center items-center h-screen mx-10 md:grid-cols-3 grid-cols-1 py-20'>
        <span className='md:text-start font-poppins font-[500] sm:text-center'  data-aos="fade-right">
          <span className='flex justify-center md:mr-14 font-bold drop-shadow-lg text-2xl '>FROM BACK SIDE</span>
          <br />
          I have experience and expertise in web development with a focus on Node.js, React.js, Tailwind, Bootstrap, and MongoDB. In backend development, I can build robust and scalable systems using Node.js, with capabilities such as server-side scripting, database management, and API integration. On the frontend side, I am skilled at using React.js to build interactive and responsive user interfaces.
        </span>
        <span className='md:relative md:-top-20 md:mb-0 mb-20 hidden md:block'>
          <img src={Blob} alt="" className='md:block hidden md:w-96 absolute top-0 left-0' />
          <img src={office} alt="" className='md:w-64 mx-auto relative top-10 right-5 drop-shadow-xl ' />
        </span>

        <span className='md:text-end font-poppins font-[500] sm:text-center ' data-aos="fade-left">
          <span className='flex justify-center font-bold drop-shadow-lg text-2xl'>FROM FRONT SIDE</span>
          <br />
          On the frontend side, I am skilled in using React.js to create interactive and responsive user interfaces. Apart from that, I am proficient in using Tailwind and Bootstrap as CSS frameworks, as well as experience managing databases using MongoDB. I enjoy working in a team, have good communication skills, and am always eager to continue learning and developing skills in the latest web technologies.
        </span>
      </div>
    </div>
  )
}

export default About;
