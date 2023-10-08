import React from 'react'
import FeedbackCard from './FeedbackCard'

const Testimonial = ({clientReviews}) => {
  return (
    <div>
      <h3 className="md:text-5xl text-3xl font-bold text-center">What our client say</h3>
      <FeedbackCard clientReviews={clientReviews}></FeedbackCard>
    </div>
  )
}

export default Testimonial