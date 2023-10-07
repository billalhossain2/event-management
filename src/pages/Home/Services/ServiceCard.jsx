import React from 'react'

const ServiceCard = ({event}) => {
  const {id, image, serviceName, price, description} = event;
  return (
    <div className='border-[1px] border-solid border-[#ee494357] p-3 rounded-md flex flex-col justify-between gap-3'>
      <img className='w-full h-[250px]' src={image} alt="" />
      <h3 className="text-3xl font-bold">{serviceName}</h3>
      <h4 className='font-bold text-2xl text-[#EE4A43]'>Price: {price}</h4>
      <p>{description}</p>
      <button className='btn bg-[#EE4A43] hover:bg-[#EE4A43] border-0 text-white'>View Details</button>
    </div>
  )
}

export default ServiceCard