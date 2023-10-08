import React from 'react'
import OfferCard from './OfferCard';

const ServiceOffered = ({service}) => {
    const {image, price, serviceName, description, clientReviews, servicesOffered} = service || {};
  return (
    <div>
        <div className='space-y-5 text-center my-10'>
        <h3 className='md:text-5xl text-3xl font-bold'>What we offer</h3>
        <p>"Our website offers event organizers a platform to create and promote events seamlessly, manage ticketing and registration, and access valuable analytics. Attendees can easily discover and RSVP to events, access event resources, and leave reviews. We prioritize privacy and security, ensuring a safe and user-friendly experience for all."</p>
        </div>

       {/* offer cards  */}
       <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mb-20'>
          {
            servicesOffered?.map((item, index) => <OfferCard key={index} item={item}></OfferCard>)
          }
       </div>
    </div>
  )
}

export default ServiceOffered