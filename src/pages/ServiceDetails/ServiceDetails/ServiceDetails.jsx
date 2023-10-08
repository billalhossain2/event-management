import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ServiceOffered from '../ServiceOffered/ServiceOffered';
import Testimonial from '../Testimonials/Testimonial';

const ServiceDetails = () => {
  const {id} = useParams();
  const [service, setService] = useState(null)
  const {image, price, serviceName, description, clientReviews, servicesOffered} = service || {};

  useEffect(()=>{
    fetch("../events.json")
    .then(res => res.json())
    .then(data => {
      const singleService = data.find(item => item.id == id)
      setService(singleService)
    })
    .catch(error => console.log(error.message))
  }, [])

  return (
    <div>
      <div className='relative'>
        <img className='rounded-lg max-h-[500px] w-full' src={image} alt="" />
        <div className='absolute top-0 text-white bg-[#000000d3] w-full h-full'>
        <div className='h-full flex flex-col gap-3 justify-center ml-10 max-w-[350px]'>
        <h3 className='font-bold md:text-5xl text-3xl'>{serviceName}</h3>
        <p>{description}</p>
        </div>
        </div>
     </div>

     {/* service offered section  */}
     <ServiceOffered service={service}></ServiceOffered>
     <Testimonial clientReviews={clientReviews}></Testimonial>
    </div>
  )
}

export default ServiceDetails