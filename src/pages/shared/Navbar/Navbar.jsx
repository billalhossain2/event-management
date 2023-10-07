import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa6';
import { ImCross } from 'react-icons/im';
const Navbar = () => {
  const [show, setShow] = useState(false);
  const navList = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/cart">Cart</NavLink></li>
        <li><NavLink to="/user">User</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        </>
  return (
    <nav className='flex justify-between items-center mt-10 relative'>
      <div className='text-[#ED4A43] font-bold md:text-3xl text-2xl'><p>Event Masters Hub</p></div>
      <ul className='md:flex  gap-10 text-[20px] hidden'>
        {navList}
      </ul>

      {/* mobile menu  */}
      <div className='absolute right-0 top-0 md:hidden block'>
        <div onClick={()=>setShow(!show)} className='flex justify-end'>
          {!show ? <FaBars className='text-3xl'></FaBars> : <ImCross className='text-3xl'></ImCross>}
        </div>
      <ul className={`z-50 flex w-[250px] gap-10 text-[20px] items-end  flex-col bg-[#2bd88188] px-5 py-3 absolute right-0 duration-500 top-[-500px] ${show ? 'top-[35px]' : 'top-[-500px]'}`}>
        {navList}
      </ul>
      </div>
    </nav>
  )
}

export default Navbar