import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    photoUrl:"",
    email: "",
    password:"",
    confirmPassword:"",
    acceptTerms:""
  });

  const handleChange = (e) => {
    console.dir(e.target)
    const { name, value, type, checked } = e.target;
    //handle checkbox separately
    if(type==="checkbox"){
      setFormData({
        ...formData,
        [name]: checked,
      });
    }else{
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your code here to handle the form submission (e.g., sending an email).
    // You can use a library like axios to make API requests.
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg border-[1px] border-solid border-[#ee494356]">
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
            <label htmlFor="name" className="block text-gray-700">
              Photo Url
            </label>
            <input
              type="text"
              id="photoUrl"
              name="photoUrl"
              value={formData.photoUrl}
              onChange={handleChange}
              className="form-input w-full outline-none border-[1px] border-solid rounded-md px-3 py-2 border-gray-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
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
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input w-full outline-none border-[1px] border-solid rounded-md px-3 py-2 border-gray-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
             Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-input w-full outline-none border-[1px] border-solid rounded-md px-3 py-2 border-gray-300"
              required
            />
          </div>
          <div className="mb-4 flex">
          <label className="block text-gray-700">
              <input
                type="checkbox"
                name="acceptTerms"
                className="mr-2"
                onChange={handleChange}
              />
              Accept
            </label>
            <Link to="/terms-and-conditions">
            <span className="hover:underline font-bold text-[#ED4A43] cursor-pointer ml-2">Terms and Conditions</span>
            </Link>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#ed4943c9] text-white px-4 py-2 rounded hover:bg-[#ED4A43] w-full font-bold"
            >
              Register
            </button>
          </div>
          <p className="text-center my-3">
            Already have an account? 
            <Link className="hover:underline font-bold text-[#ED4A43] ml-1" to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
