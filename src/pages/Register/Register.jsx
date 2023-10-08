import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast, useToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserAuthContext } from "../../AuthProvider/AuthProvider";
import { RotatingLines } from "react-loader-spinner";
function Register() {
  const { user, registerWithEmailAndPassword, updateUserProfile } =
    useContext(UserAuthContext);
  const [formData, setFormData] = useState({
    name: "",
    photoUrl: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [error, setError] = useState();
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    //handle checkbox separately
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, photoUrl, email, password, confirmPassword, acceptTerms } =
      formData;
    setError("");
    setSuccess("");

    //sample password: billalHossain_76

    //email validation
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!pattern.test(email)) {
      return setError("Please enter a valid email address");
    }

    //password validation
    if (password !== confirmPassword) {
      return setError("Password does not match!");
    } else if (!/[a-z]/.test(password)) {
      return setError(
        "Your password should have at least one lower case letter"
      );
    } else if (!/[A-Z]/.test(password)) {
      return setError(
        "Your password should have at least one uppper case letter"
      );
    } else if (!/[0-9]/.test(password)) {
      return setError("Your password should have at least one numeric digit");
    } else if (!/[@#&*_]/.test(password)) {
      return setError(
        "Your password should have at least one special character (@ # &  * _)"
      );
    } else if (password.length < 6) {
      return setError("Your password must be at least 6 characters longer");
    }

    console.log(name, photoUrl, email, password, confirmPassword, acceptTerms);
    setLoading(true)
    registerWithEmailAndPassword(email, password)
      .then((user) => {
        updateUserProfile({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setLoading(false);
            toast("Successfully created a new user");
          })
          .catch((error) => {
            setError(error.message)
            setLoading(false)
          });
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      });
  };

  return (
    <div className="flex justify-center items-center h-screen mb-16">
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
              <span className="hover:underline font-bold text-[#ED4A43] cursor-pointer ml-2">
                Terms and Conditions
              </span>
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
          {/* display error message  */}
          <p className="text-red-700 font-bold text-center my-3">{error}</p>

          {/* display loading state  */}
          {loading && (
            <div className="text-green-700 font-bold text-center my-3 flex flex-col items-center">
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="40"
                visible={true}
              />
              <span className="text-yellow-600">User Creating......</span>
            </div>
          )}
          <p className="text-center my-3">
            Already have an account?
            <Link
              className="hover:underline font-bold text-[#ED4A43] ml-1"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default Register;
