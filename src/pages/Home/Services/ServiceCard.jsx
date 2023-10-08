import React, { useEffect } from 'react'
import 'aos/dist/aos.css'; // Import the CSS styles for AOS
import AOS from 'aos';
import { Link } from 'react-router-dom';

const ServiceCard = ({event}) => {
  const {id, image, serviceName, price, description} = event;
   // Initialize AOS
   useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in milliseconds)
      easing: 'ease-in-out', // Easing type
    });
  }, []);
  return (
    <div data-aos="fade-up" className='border-[1px] border-solid border-[#ee494357] p-3 rounded-md flex flex-col justify-between gap-3'>
      <img className='w-full h-[250px]' src={image} alt="" />
      <h3 className="md:text-3xl text-2xl font-bold">{serviceName}</h3>
      <h4 className='font-bold md:text-2xl text-xl text-[#EE4A43]'>Price: {price}</h4>
      <p>{description}</p>
      <Link to={`/service-details/${id}`}>
      <button className='px-5 py-3 rounded-lg hover:text-white duration-500 border-[1px] border-solid border-[#EE4A43] hover:bg-[#EE4A43]  text-[#EE4A43]'>View Details</button>
      </Link>
    </div>
  )
}

export default ServiceCard