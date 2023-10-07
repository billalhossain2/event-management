import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center mt-10'>
      <div className='text-[#ED4A43] font-bold text-3xl'><p>Event Masters Hub</p></div>
      <ul className='flex gap-10'>
        <li><a href="">Home</a></li>
        <li><a href="">Cart</a></li>
        <li><a href="">About</a></li>
        <li><a href="">User</a></li>
        <li><a href="">Login</a></li>
      </ul>
    </nav>
  )
}

export default Navbar