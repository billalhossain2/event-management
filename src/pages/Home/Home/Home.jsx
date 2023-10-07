import React from 'react'
import Carousel from '../CarouselSlider/CarouselSlider'
import CarouselSlider from '../CarouselSlider/CarouselSlider'
import Services from '../Services/Services'
import About from '../About/About'

const Home = () => {
  return (
    <div>
      <CarouselSlider></CarouselSlider>
      <About></About>
      <Services></Services>
    </div>
  )
}

export default Home