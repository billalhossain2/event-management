import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./CarouselSlider.css";
const CarouselSlider = () => {
  const carouselData = [
    {
      image:"https://i.ibb.co/1nkJjSv/wedding-management.jpg",
      description:"lorem ljaf ljasdf lkjlkfdsa ljfdlksa ljfdsak lfkdjsa",
      legend:"Wedding Management"
    },
    {
      image:"https://i.ibb.co/DVwFp69/birthday.jpg",
      description:"lorem ljaf ljasdf lkjlkfdsa ljfdlksa ljfdsak lfkdjsa",
      legend:"Birthday Party Management"
    },
    {
      image:"https://i.ibb.co/8cj8v7j/baby-shower-party.jpg",
      description:"lorem ljaf ljasdf lkjlkfdsa ljfdlksa ljfdsak lfkdjsa",
      legend:"Baby Shower Party Management"
    },
    {
      image:"https://i.ibb.co/7pn2h1m/anniversary-party.jpg",
      description:"lorem ljaf ljasdf lkjlkfdsa ljfdlksa ljfdsak lfkdjsa",
      legend:"Anniversary Party Management"
    },
    {
      image:"https://i.ibb.co/gmBQnpH/engagement-party.jpg",
      description:"lorem ljaf ljasdf lkjlkfdsa ljfdlksa ljfdsak lfkdjsa",
      legend:"Engagement Party Planner"
    },
    {
      image:"https://i.ibb.co/mykwddM/retirement-party.jpg",
      description:"lorem ljaf ljasdf lkjlkfdsa ljfdlksa ljfdsak lfkdjsa",
      legend:"Retirement Party Planner"
    },
  ]
  return (
    <div className='mb-20 mt-5'>
        <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        stopOnHover={true}
        >
          {
            carouselData?.map(item => (
              <div className='max-h-[550px]'>
                    <img  src={item.image} />
                    <div style={{backgroundColor:"#ED4A43"}} className='legend space-y-3'>
                      <p className='md:text-3xl text-2xl'>{item.legend}</p>
                    </div>
                </div>
            ))
          }
            </Carousel>
    </div>
  )
}

export default CarouselSlider