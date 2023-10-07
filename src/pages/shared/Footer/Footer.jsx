import React from 'react'
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineGoogle } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#000000] text-white">
    <aside>
      <h3 className='text-[#ED4A43] font-bold md:text-3xl text-2xl'>EventMastersHub</h3>
      <p className='max-w-[200px]'>EventManagementHub is a user-friendly online platform for effortless event planning and management</p>
      <div className="social-icons flex gap-3">
        <p className='p-2 font-bold text-2xl hover:bg-[#ED4A43] rounded-sm cursor-pointer'><BiLogoFacebook></BiLogoFacebook></p>
        <p className='p-2 font-bold text-2xl hover:bg-[#ED4A43] rounded-sm cursor-pointer'><AiOutlineGoogle></AiOutlineGoogle></p>
        <p className='p-2 font-bold text-2xl hover:bg-[#ED4A43] rounded-sm cursor-pointer'><BsTwitter></BsTwitter></p>
        <p className='p-2 font-bold text-2xl hover:bg-[#ED4A43] rounded-sm cursor-pointer'><FiInstagram></FiInstagram></p>
      </div>
    </aside> 
    <nav>
      <header className="text-white font-bold text-[18px]">Services</header> 
      <a className="link link-hover">Wedding Party Management</a> 
      <a className="link link-hover">Birthday Party Management</a> 
      <a className="link link-hover">Baby Shower Party Management</a> 
      <a className="link link-hover">Retirement Party Management</a>
    </nav> 
    <nav>
      <header className="text-white font-bold text-[18px]">Useful Links</header> 
      <a className="link link-hover">Home</a> 
      <a className="link link-hover">About</a> 
      <a className="link link-hover">Contact</a> 
      <a className="link link-hover">Login</a>
    </nav> 
    <nav>
    <header className="text-white font-bold text-[18px]">Subscribe Us</header> 
    <fieldset className="form-control">
      <label className="label">
        <span className="label-text text-white">Subscribe With us to get updated</span>
      </label> 
      <div className='flex flex-col'>
        <input type="text" placeholder="Email" className="input lg:w-full w-[200px] input-bordered text-black" /> 
        <button className="btn bg-[#ED4A43] hover:bg-[#ED4A43] w-[100px] mt-2 border-0 text-white">Subscribe</button>
      </div>
    </fieldset>
    </nav>
  </footer>
  )
}

export default Footer