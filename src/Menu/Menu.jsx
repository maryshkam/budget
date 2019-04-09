import React from 'react';
import './Menu.css';
import {NavLink} from 'react-router-dom';

const Menu = () => {
  return (
    <div className='menu'>
    <NavLink className='menu-item' to='/accounts'>Accounts</NavLink>
    <NavLink className='menu-item' to='/categories'>Categories</NavLink>
    <NavLink className='menu-item' to='statistic'>Statistic</NavLink>
      
    </div>
  );
};

export default Menu;