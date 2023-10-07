import React from 'react'
import OfferCard from './OfferCard';

const ServiceOffered = ({service}) => {
    const {image, price, serviceName, description, clientReviews, servicesOffered} = service || {};
  return (
    <div>
        <div className='space-y-5 text-center my-10'>
        <h3 className='text-5xl font-bold'>What we offer</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quae, dolorem blanditiis architecto ipsa neque cupiditate perferendis iste molestiae tenetur dicta nesciunt ducimus aliquam officiis fugit qui, officia reiciendis delectus!</p>
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