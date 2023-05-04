import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../providers/UserProvider';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';

const Header = () => {
  const { user, logOut } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    logOut()
    .then()
      .catch(error => {
        console.log(error);
    })
  }

  return (
    <nav className="bg-black text-white w-full p-10 lg:p-7">
      <div className="flex lg:justify-between items-center lg:mx-12 relative">
        <h3 className="text-3xl font-mono text-red-500 tracking-wide">
          Nonna's Kitchen
        </h3>
        {/* conditional rendering */}
        <div onClick={() => setOpen(!open)} className="lg:hidden me-10">
          <span>
            {open === true ? (
              <AiOutlineClose className="h-6 w-6 text-yellow-600" />
            ) : (
              <HiMenu className="h-6 w-6 text-yellow-600" />
            )}
          </span>
        </div>
        <ul
          className={`justify-around space-x-4 flex lg:flex absolute lg:static duration-500 ${
            open ? 'top-[80px] right-1' : '-top-36'
          }`}
        >
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
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : 'default')}
              to="/contact"
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            {user ? (
              <span className="flex space-x-2">
                <img
                  title={user.displayName}
                  className="w-10 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
                <button onClick={handleLogout} className="default pe-4">
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