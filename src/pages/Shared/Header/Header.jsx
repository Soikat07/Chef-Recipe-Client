import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../providers/UserProvider';

const Header = () => {
  const { user, logOut } = useContext(UserContext);
  const handleLogout = () => {
    logOut()
    .then()
      .catch(error => {
        console.log(error);
    })
  }

  return (
    <nav className="bg-black text-white w-full p-7">
      <div className="flex justify-between items-center mx-12">
        <h3 className="text-3xl font-mono text-red-500">Nonna's Kitchen</h3>
        <ul className="flex space-x-10">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'default')}
              to="/"
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'default')}
              to="/blog"
            >
              BLOG
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            {user ? (
              <span className='flex space-x-2'>
                <img title={user.displayName}
                  className="w-10 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
                <button onClick={handleLogout} className="default">
                  Logout
                </button>
              </span>
            ) : (
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : 'default')}
                to="/login"
              >
                LOGIN
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;