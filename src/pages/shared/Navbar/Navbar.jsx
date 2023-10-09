import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { UserAuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

import { ToastContainer, toast, useToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { user, signOutUser } = useContext(UserAuthContext);
  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast("Logout Successful!", { position: "top-left", autoClose: 2000 });
      })
      .catch((error) => console.log(error.message));
  };
  const navList = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/event-booking">Booking</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/user-profile">
              <div
                className="tooltip tooltip-open md:tooltip-bottom tooltip-left"
                data-tip={user?.displayName}
              >
                <img
                className="w-10 h-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />
              </div>
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <nav className="flex justify-between items-center my-10 relative">
      <div className="text-[#ED4A43] font-bold md:text-3xl text-2xl">
        <p>Event Masters Hub</p>
      </div>
      <ul className="md:flex  gap-10 text-[20px] hidden">{navList}</ul>

      {/* mobile menu  */}
      <div className="absolute right-0 top-0 md:hidden block">
        <div onClick={() => setShow(!show)} className="flex justify-end">
          {!show ? (
            <FaBars className="text-3xl"></FaBars>
          ) : (
            <ImCross className="text-3xl"></ImCross>
          )}
        </div>
        <ul
          className={`z-50 flex w-[250px] gap-5 text-[20px] items-end  flex-col bg-[#000000e8] text-white px-5 py-3 absolute right-0 duration-500 top-[-500px] ${
            show ? "top-[35px]" : "top-[-500px]"
          }`}
        >
          {navList}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
