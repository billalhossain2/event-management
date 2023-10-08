import { Link, useRouteError } from "react-router-dom";
import React from 'react'

const ErrorPage = () => {
    const {status, statusText, data, error} = useRouteError() || {};
  return (
    <div className="flex flex-col items-center justify-center mt-20 space-y-2 font-bold">
        <img src="https://i.ibb.co/dfk8Ndz/404-page.png" alt="Not Found" />
        <p className="text-2xl">{statusText}</p>
        <p className="text-2xl">{error.message}</p>
        <Link to="/">
        <button className="bg-[#EE4D43] px-5 py-3 rounded-lg text-white">Go Home</button>
        </Link>
    </div>
  )
}

export default ErrorPage