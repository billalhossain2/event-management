import React from 'react'
import Carousel from '../CarouselSlider/CarouselSlider'
import CarouselSlider from '../CarouselSlider/CarouselSlider'
import Services from '../Services/Services'
import About from '../About/About'
import Team from '../Team/Team'

const Home = () => {
  return (
    <div>
      <CarouselSlider></CarouselSlider>
      <About></About>
      <Services></Services>
      <Team></Team>
    </div>
  )
}

export default Home