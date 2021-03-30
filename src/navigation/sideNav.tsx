import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './navData';
import './sideNav.css'
import logo from '../assets/logo.png';
import { IconContext } from 'react-icons';

const sideNav = () => {

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
          </Link>
        </div>
        <nav className={ 'nav-menu active'}>
          <img className='logo' src={logo} alt={logo}/>
          <ul className='nav-menu-items'>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <div className='listedItems'>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default sideNav;