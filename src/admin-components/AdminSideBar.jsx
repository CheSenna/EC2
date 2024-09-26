/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const AdminSideBar = () => {
  const navigate = useNavigate()

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-slate-950 h-[15%] rounded flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer' onClick={() => navigate('/admin-components/dashboard')}>
          <img className='w-6' src={assets.home_icon} alt='' />
          <p className='font-bold'>Dashboard</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer' onClick={() => navigate('/admin-components/songs')}>
          <img className='w-6' src={assets.music_icon} alt='' />
          <p className='font-bold'>Manage Songs</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer' onClick={() => navigate('/admin-components/albums')}>
          <img className='w-6' src={assets.album_icon} alt='' />
          <p className='font-bold'>Manage Albums</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer' onClick={() => navigate('/admin-components/artists')}>
          <img className='w-6' src={assets.artist_icon} alt='' />
          <p className='font-bold'>Manage Artists</p>
        </div>
      </div>
      <div className='bg-slate-950 h-[85%] rounded'>
        <div className='p-4'>
          <h2 className='text-white font-semibold'>Admin Options</h2>
          {/* Additional Admin options or info */}
        </div>
      </div>
    </div>
  )
}

export default AdminSideBar
