import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg border-[1px] border-solid border-[#ee494356]">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="password" className="block text-gray-700">
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

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#ed4943c9] text-white px-4 py-2 rounded hover:bg-[#ED4A43] w-full"
            >
              Login
            </button>
          </div>
          <p className="text-center my-3">New to this website? <Link className="hover:underline font-bold text-[#ED4A43]" to="/register">Register</Link> </p>
          <p className="text-center my-3">or Login with</p>
          <div className="flex md:flex-row flex-col justify-center items-center gap-5">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Facebook</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-full">Google</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
