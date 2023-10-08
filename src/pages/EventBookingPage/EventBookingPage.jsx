// EventBookingPage.js
import React from 'react';

const EventBookingPage = () => {
  return (
    <div className="min-h-screen bg-[#ed494318] flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 border-[1px] border-solid border-[#ed49436b]">
        <h1 className="text-2xl font-semibold mb-4">Book Event</h1>
        
        {/* Booking form */}
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="John Doe"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="015xxxxxxxxx"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">Location</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="New York City"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="event">Choose Event</label>
            <select className='w-full' name="event" id="event">
              <option value="Weddings">Weddings</option>
              <option value="Birthday Parties">Birthday Parties</option>
              <option value="Anniversaries">Anniversaries</option>
              <option value="Engagement Parties">Engagement Parties</option>
              <option value="Retirement Parties">Retirement Parties</option>
              <option value="Baby Shower">Baby Shower</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#ed4943c9] text-white py-2 rounded-lg hover:bg-[#ed4943c9] transition duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventBookingPage;
