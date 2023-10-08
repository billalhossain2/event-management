import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your code here to handle the form submission (e.g., sending an email).
    // You can use a library like axios to make API requests.
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg border-[1px] border-solid border-[#ed49436b]">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input w-full outline-none border-[1px] border-solid rounded-md px-3 py-2 border-gray-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input w-full outline-none border-[1px] border-solid rounded-md px-3 py-2 border-gray-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="form-textarea w-full outline-none border-[1px] border-solid rounded-md px-3 py-2 border-gray-300"
              rows="5"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#ed4943c9] text-white px-4 py-2 rounded hover:bg-[#ED4A43]"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
