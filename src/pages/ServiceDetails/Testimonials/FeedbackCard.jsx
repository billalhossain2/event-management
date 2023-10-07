import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./FeedbackCard.css"
import ReactStarsRating from 'react-awesome-stars-rating';
const FeedbackCard = ({clientReviews}) => {
   // Slick slider settings
   const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       // Enable autoplay
    autoplaySpeed: 3000,  // Set the autoplay interval in milliseconds
  };
  return (
    <div className='py-5 mb-20'>
      <Slider {...sliderSettings} className='flex flex-col justify-center items-center md:w-[40%] w-[80%] mx-auto'>
      {
        clientReviews?.map(review => (
          <div className='text-center space-y-3'>
          <img className='w-full rounded-lg' src={review.image} alt="" />
          <h2 className='font-bold md:text-3xl text-2xl'>{review.clientName}</h2>
          <p>{review.review}</p>
          <p className='flex justify-center md:gap-3'><ReactStarsRating className="flex" value={review.ratings} isEdit={false}></ReactStarsRating>{review.ratings}</p>
        </div>
        ))
      }
    </Slider>
    </div>
  )
}

export default FeedbackCard