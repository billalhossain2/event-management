import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../AuthProvider/AuthProvider";
import { CirclesWithBar } from "react-loader-spinner";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  //accessing context
  const {
    user,
    loginWithGoogle,
    loginWithFacebook,
    loginWithEmailAndPassword,
  } = useContext(UserAuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate()
  const from = useLocation()?.state?.from || "/";

  //login with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    setError("");
    setSuccess("")
    setLoading(true);
    loginWithEmailAndPassword(email, password)
      .then((user) =>{
        setError("")
        setLoading(false)
        setSuccess("Login success")
        toast("Login Successfully!")
        navigate(from)
      })
      .catch((error) => {
        setError(error.message)
        setSuccess("")
        setLoading(false);
      });
  };


  //login with third party social app
  const handleLoginWithFacebook = () => {
    setError("");
    setSuccess("")
    setLoading(true);
    loginWithFacebook()
      .then((user) => {
        console.log("Successfully logged in with facebook");
        setError("");
        setLoading(false);
        setSuccess("Login success")
        toast("Login Successfully!")
        navigate(from)
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleLoginWithGoogle = () => {
    setError("");
    setSuccess("")
    setLoading(true);
    loginWithGoogle()
      .then((user) => {
        console.log("Successfully logged in with google");
        setError("");
        setLoading(false);
        setSuccess("Login success")
        toast("Login Successfully!")
        navigate(from)
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg border-[1px] border-solid border-[#ee494356]">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
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
          {/* display error message */}
          {error && (
            <p className="text-red-700 font-bold text-center my-3">{error}</p>
          )}

          {/* display success message  */}
          {success && (
            <p className="text-green-700 font-bold text-center my-3">{success}</p>
          )}

          {/* display loading state  */}
          {loading && (
            <div className="text-green-700 font-bold text-center my-3 flex flex-col items-center">
              <CirclesWithBar
                height="40"
                width="40"
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel="circles-with-bar-loading"
              />
              <span>Logging in.....</span>
            </div>
          )}
          <p className="text-center my-3">
            New to this website?{" "}
            <Link
              className="hover:underline font-bold text-[#ED4A43]"
              to="/register"
            >
              Register
            </Link>{" "}
          </p>
          <p className="text-center my-3">or Login with</p>
        </form>
        {/* socila login options  */}
        <div className="flex md:flex-row flex-col justify-center items-center gap-5">
          <button
            onClick={handleLoginWithFacebook}
            className="bg-blue-600 text-white px-4 py-2 rounded-full"
          >
            Facebook
          </button>
          <button
            onClick={handleLoginWithGoogle}
            className="bg-red-600 text-white px-4 py-2 rounded-full"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
