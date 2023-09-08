import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = () => {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    // Ganti '/MoreProject' dengan path halaman baru yang ingin Anda buat
    navigate('/moreProjects');
  };
  return (
    <div className='judul' id='project'>
      <div className='grid md:flex justify-center items-center h-full md:px-20 md:py-0 py-20'>
        <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500" data-aos="fade-up" data-aos-delay="300">
          <div class="flex items-center space-x-3">
          <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
          <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
        </div>
        <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
        </a>
        
        <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500" data-aos="fade-up" data-aos-delay="500">
          <div class="flex items-center space-x-3">
          <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
          <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
        </div>
        <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
        </a>
        <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500" data-aos="fade-up" data-aos-delay="700">
          <div class="flex items-center space-x-3">
          <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
          <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
        </div>
        <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
        </a>
        <button className='relative md:absolute md:mt-[250px] w-36 h-12 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg text-white font-poppins font-[500] tracking-wide drop-shadow-xl mx-auto' onClick={handleViewMoreClick}>VIEW MORE...</button>
      </div>
    </div>
  );
};

export default Project;
