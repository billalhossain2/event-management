import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import 'aos/dist/aos.css'; // Import the CSS styles for AOS
import AOS from 'aos';
import { useEffect } from 'react';
const TeamCard = ({member}) => {
  const {name, image} = member;
   // Initialize AOS
   useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      easing: 'ease-in-out', // Easing type
    });
  }, []);
  return (
    <div data-aos="fade-up" className='border-[1px] border-solid border-[#ed494360] p-2 rounded-lg space-y-3 text-center'>
      <img className='rounded-lg' src={image} alt="" />
      <h4 className="text-2xl">{name}</h4>
      <div className='flex justify-center gap-3 pb-5'>
        <p className='border-[1px] border-solid border-[#ed4943] text-[#ed4943] hover:bg-[#ed4943] hover:text-white p-2 rounded-full cursor-pointer duration-500'><BiLogoFacebook className='text-2xl rounded-full'></BiLogoFacebook></p>
        <p className='border-[1px] border-solid border-[#ed4943] text-[#ed4943] hover:bg-[#ed4943] hover:text-white p-2 rounded-full cursor-pointer duration-500'><FaLinkedinIn className='text-2xl rounded-full'></FaLinkedinIn></p>
        <p className='border-[1px] border-solid border-[#ed4943] text-[#ed4943] hover:bg-[#ed4943] hover:text-white p-2 rounded-full cursor-pointer duration-500'><FiTwitter className='text-2xl rounded-full'></FiTwitter></p>
      </div>
    </div>
  )
}

export default TeamCard