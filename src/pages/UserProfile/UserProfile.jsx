import React, { useContext } from "react";
import { UserAuthContext } from "../../AuthProvider/AuthProvider";

function UserProfile() {
  // Replace this with your user data or fetch it from an API
  const {user} = useContext(UserAuthContext)
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "John Doe is an enthusiastic event organizer with a keen passion for creating memorable experiences. With a diverse background in event management, John excels in curating and executing events that leave a lasting impact. Known for their attention to detail and dedication, John is committed to delivering exceptional events that bring people together and create unforgettable moments.",
    profileImage: "https://i.ibb.co/r43mpKL/client-2.jpg",
};

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-center mb-6">
          <img
            src={user.photoURL}
            alt={`${user.name}'s profile`}
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <h1 className="text-3xl font-semibold">{user.name}</h1>
        <p className="text-gray-600 text-sm mb-4">{user.email}</p>
        <p className="text-gray-800">{user.displayName} is an enthusiastic event organizer with a keen passion for creating memorable experiences. With a diverse background in event management, John excels in curating and executing events that leave a lasting impact. Known for their attention to detail and dedication, John is committed to delivering exceptional events that bring people together and create unforgettable moments.</p>
      </div>
    </div>
  );
}

export default UserProfile;
