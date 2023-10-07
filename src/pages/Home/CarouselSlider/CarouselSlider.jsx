import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img from "../../../assets/event-management.jpg"
const CarouselSlider = () => {
  const carouselData = [
    {
      image:"https://i.ibb.co/PMcR0N0/wedding-management.jpg",
      description:"lorem ljaf ljasdf lkjlkfdsa ljfdlksa ljfdsak lfkdjsa",
      legend:"Wedding Management"
    },
    {
      image:"https://i.ibb.co/FxgzZ04/birthday-party.jpg",
      description:"lorem ljaf ljasdf lkjlkfdsa ljfdlksa ljfdsak lfkdjsa",
      legend:"Birthday Party Management"
    },
    {
      image:"https://i.ibb.co/PMcR0N0/wedding-management.jpg",
      description:"lorem ljaf ljasdf lkjlkfdsa ljfdlksa ljfdsak lfkdjsa",
      legend:"Baby Shower Party Management"
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
              <div className='max-h-[500px]'>
                    <img  src={item.image} />
                    <div className='legend space-y-3'>
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