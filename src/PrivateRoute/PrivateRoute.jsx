import React, { useContext } from 'react'
import { UserAuthContext } from '../AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(UserAuthContext)

  const destination = useLocation()?.pathname;

  if(!user){
    return <Navigate to="/login" state={{from:destination}} replace></Navigate>
  }

  return children;

}

export default PrivateRoute