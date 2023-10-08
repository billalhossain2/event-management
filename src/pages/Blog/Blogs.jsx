// BlogPage.js
import React, { useState } from 'react';

const BlogPage = () => {
  // Simulated blog post data (replace with actual data from your backend)
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: '10 Tips for Event Planning Success',
      date: '2023-10-10',
      author: 'Event Planner Jack Max',
      content: "Event planning is a challenging yet rewarding endeavor. Whether you're organizing a wedding, corporate conference, or a birthday celebration, the success of your event largely depends on meticulous planning and execution. In our blog post, '10 Tips for Event Planning Success' we've compiled a comprehensive guide to help you navigate the world of event planning with confidence and finesse.Our team of seasoned event planners and industry experts has distilled years of experience into these invaluable tips. Whether you're a professional event planner or planning a special occasion for the first time, you'll find actionable advice and strategies to ensure your event is a resounding success. In this blog post, you'll discover:Setting Clear Objectives: Learn how to define your event's purpose, goals, and target audience to guide your planning efforts effectively.Budgeting Wisely: Get insights into creating a realistic budget, managing expenses, and maximizing value for your investment.",
    },
    {
      id: 2,
      title: 'Choosing the Perfect Venue for Your Event',
      date: '2023-09-28',
      author: 'Event Planner Kyle Simpson',
      content: "Selecting the right venue is a pivotal decision in event planning. The venue sets the stage, defines the atmosphere, and can ultimately make or break your event's success. In our blog post, 'Choosing the Perfect Venue for Your Event,' we guide you through the art of venue selection, providing valuable insights, tips, and considerations to ensure you find the ideal location that aligns perfectly with your event's vision and goals. Discover expert advice on assessing venue capacity, ambiance, accessibility, and budget compatibility. Uncover the nuances of indoor and outdoor venues, and explore the significance of location in relation to your target audience. With our comprehensive guide, you'll be well-equipped to make a confident decision that transforms your event into an unforgettable experience. Don't leave your venue selection to chance. Join us as we delve into the world of event venues and empower you to make a choice that elevates your event planning journey."
    },
    {
      id: 3,
      title: "Creating Stunning Event Decor: Tips and Inspiration",
      date: '2023-09-28',
      author: 'Event Planner Sara Nelson',
      content: "When it comes to event planning, the ambiance you create is key to leaving a lasting impression. Our blog post, 'Creating Stunning Event Decor: Tips and Inspiration,' is your go-to resource for crafting breathtaking event spaces. We'll take you on a journey through the world of event decor, offering a treasure trove of creative ideas, themes, and expert tips. Whether you're planning an intimate gathering or a grand celebration, you'll discover innovative ways to transform your event space into a captivating and unforgettable setting. From elegant centerpieces to mesmerizing lighting techniques, we'll unveil the secrets behind truly remarkable decor that will have your guests talking long after the event ends."
    },
    {
      id: 4,
      title: "Creating Stunning Event Decor: Tips and Inspiration",
      date: '2023-09-28',
      author: 'Event Planner Jhon Doe',
      content: "Event planning is a delicate balance between creativity and financial management. In our blog post, 'The Ultimate Guide to Event Budgeting,' we delve deep into the art of creating and managing an event budget. Our comprehensive guide will equip you with the knowledge and skills to allocate your funds wisely, track expenses meticulously, and ensure your event stays within budget without compromising on quality. We'll share practical tips, real-world examples, and expert insights to help you navigate the often complex landscape of event finances. Whether you're planning a corporate conference, wedding, or any special occasion, this guide is your roadmap to financial success in the world of event planning."
    },
    // Add more blog posts as needed
  ]);

  return (
    <div className="min-h-screen py-8 px-4 bg-[#ed49431f]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Blog</h1>

        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm mb-2">
              {post.date} | by {post.author}
            </p>
            <p className="text-gray-700">{post.content}</p>
            <a
              href=""
              className="text-[#ed4943c9] font-bold hover:underline block mt-2"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
