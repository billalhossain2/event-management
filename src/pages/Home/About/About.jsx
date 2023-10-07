import 'aos/dist/aos.css'; // Import the CSS styles for AOS
import AOS from 'aos';
import { useEffect } from 'react';
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
    });
  }, []);
  return (
    <div className='flex lg:flex-row flex-col lg:gap-0 gap-10 justify-center my-20'>
      {/* text info  */}
      <div data-aos="fade-up" className='space-y-8 lg:w-[50%]'>
      <h3 className='text-[#ED4A43] font-bold'>About Event Masters Hub</h3>
      <h2 className="md:text-5xl text-3xl font-bold">What We do, We do <br /> With Passion</h2>
      <p className='text-2xl'>"Event Masters Hub" is your one-stop online destination for event managing expertise and resources.</p>
      <button className='border-2 border-solid border-[#ed49437e] rounded-full px-5 py-2 hover:bg-[#ED4A43] duration-500 text-[#ED4A43] hover:text-white'>Learn More</button>
      </div>
      {/* image  */}
      <div data-aos="fade-down" className='lg:w-[50%]'>
        <img className='rounded-lg' src="https://i.ibb.co/xJV4Tmt/about-us.jpg" alt="" />
      </div>
    </div>
  )
}

export default About