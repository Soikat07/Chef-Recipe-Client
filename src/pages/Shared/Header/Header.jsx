import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
      <nav className="bg-black text-white w-full p-7">
        <div className="flex justify-between items-center mx-10">
          <h3 className="text-xl font-mono">Nonna's Kitchen</h3>
          <ul className="flex space-x-10">
            <li>
              <NavLink
              className={({isActive})=>(isActive ? 'active': 'default')} 
              to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink
              className={({isActive})=>(isActive ? 'active': 'default')} 
              to="/blog">BLOG</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
              className={({isActive})=>(isActive ? 'active': 'default')} 
              to="/login">LOGIN</NavLink>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Header;