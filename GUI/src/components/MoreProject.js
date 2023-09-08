import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const MoreProjects = () => {
  const navigate = useNavigate();

  const handleViewMoreClick = () => {
    navigate('/');
  }
  return (
    <div className='judul' id='project'>
      <div>
        <button className='bg-black text-white w-24 h-10 m-10 rounded-full ' onClick={handleViewMoreClick} >Kembali</button>
      </div>
      <div className='grid md:flex justify-center items-center h-full md:px-20 md:py-0 py-20'>
        <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
          <div class="flex items-center space-x-3">
          <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
          <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
        </div>
        <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
        </a>
    </div>
  </div>
  )
}

export default MoreProjects;