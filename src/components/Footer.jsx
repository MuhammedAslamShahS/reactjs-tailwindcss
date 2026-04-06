import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-[100%] h-[10vh] flex px-[50px] justify-between items-center'>
      <h1 className='text-[1.5rem] font-semibold cursor-pointer'>Newwesterlund</h1>
      <ul className='flex gap-4'>
        <li><Link className='text-gray-500 hover:text-gray-700' to="/">Home</Link></li>
        <li><Link className='text-gray-500 hover:text-gray-700' to="/about">About</Link></li>
        <li><Link className='text-gray-500 hover:text-gray-700' to="/portfolio">Portfolio</Link></li>
        <li><Link className='text-gray-500 hover:text-gray-700' to="/services">Services</Link></li>
        <li><Link className='text-gray-500 hover:text-gray-700' to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Footer