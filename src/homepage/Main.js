import React from 'react';
import Navbar from './component/Navbar';
import { Outlet } from 'react-router-dom';
// eslint-disable-next-line
import '../assets/css/homepage.css';

const main = () => {
  return (
    <div className='homepage_wrap'>
      <Navbar />
      <div className='section'>
        <Outlet />
      </div>
    </div>
  )
}

export default main