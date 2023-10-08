import React, { useEffect } from 'react'
import TeamCard from './TeamCard'
import 'aos/dist/aos.css'; // Import the CSS styles for AOS
import AOS from 'aos';
const Team = () => {
    // Initialize AOS
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration (in milliseconds)
        easing: 'ease-in-out', // Easing type
      });
    }, []);
    const teamMembers = [
      {
        id:Date.now()+Math.random().toString(36),
        name:"Jhon Doe",
        image:"https://i.ibb.co/vHCyVj4/member-1.jpg"
      },
      {
        id:Date.now()+Math.random().toString(36),
        name:"Kyle Simpson",
        image:"https://i.ibb.co/Jdwdgp3/member-3.jpg"
      },
      {
        id:Date.now()+Math.random().toString(36),
        name:"Sara Nelson",
        image:"https://i.ibb.co/LkMhkpX/member-2.jpg"
      },
      {
        id:Date.now()+Math.random().toString(36),
        name:"Jack Max",
        image:"https://i.ibb.co/q0q9Q5k/member-4.jpg"
      },
    ]
  return (
    <div className='my-20'>
      <div data-aos="fade-right" className='text-center space-y-5 mb-5'>
      <h3 className="md:text-5xl text-3xl font-bold">Meet Our Team</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis perspiciatis harum asperiores eaque, rem delectus! Fugiat doloremque neque iure ea quos laboriosam repellendus rerum consequuntur alias, voluptatum voluptate officia expedita.</p>
      </div>

      {/* team members  */}
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5'>
      {
        teamMembers.map(member => <TeamCard key={member.id} member={member}></TeamCard>)
      }
      </div>
    </div>
  )
}

export default Team