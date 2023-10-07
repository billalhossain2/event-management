import React from 'react'
import FeedbackCard from './FeedbackCard'

const Testimonial = ({clientReviews}) => {
  return (
    <div>
      <h3 className="text-5xl font-bold text-center">What our client say</h3>
      <FeedbackCard clientReviews={clientReviews}></FeedbackCard>
    </div>
  )
}

export default Testimonial