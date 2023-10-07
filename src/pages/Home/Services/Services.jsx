import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'

const Services = () => {
  const [events, setEvents] = useState([])

  useEffect(()=>{
    fetch("events.json")
    .then(res => res.json())
    .then(data => setEvents(data))
    .catch(error => console.log(error.message))
  }, [])
  return (
    <div className='mb-20'>
      <div className='text-center space-y-3 mb-10'>
      <h3 className="text-3xl font-bold">Services</h3>
      <p>A social media management service is a comprehensive solution designed to help individuals, businesses, or organizations effectively manage and enhance their presence on various social media platforms. This service aims to streamline the process of creating, scheduling, analyzing, and optimizing content for social media, with the ultimate goal of increasing engagement, brand awareness, and audience growth. Here are some key components and features of a social media management service:</p>
      </div>

      {/* services cards  */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
      {
        events?.map(event => <ServiceCard key={event.id} event={event}></ServiceCard>)
      }
      </div>
    </div>
  )
}

export default Services