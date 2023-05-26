import React, { useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const { user,loading } = useContext(UserContext);
  const location = useLocation();
  if (loading) {
      return (
        <div className="radial-progress text-center text-blue-600" style={{ '--value': 70 }}>
          100%
        </div>
      );
  }
  if (user) {
    return children;
  }
  return <Navigate state={{from: location}} to='/login' replace></Navigate>
};

export default PrivateRoutes;