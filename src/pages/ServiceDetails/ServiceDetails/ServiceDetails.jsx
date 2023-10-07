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
      <div>
        <img src={image} alt="" />
        <h3>{serviceName}</h3>
        <p>{description}</p>
     </div>

     {/* service offered section  */}
     <ServiceOffered service={service}></ServiceOffered>
     <Testimonial clientReviews={clientReviews}></Testimonial>
    </div>
  )
}

export default ServiceDetails