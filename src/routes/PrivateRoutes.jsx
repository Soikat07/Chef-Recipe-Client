import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  if (user) {
    return children;
  }
  return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoutes;