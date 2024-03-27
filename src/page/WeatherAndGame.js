import React from 'react'
import { Outlet } from 'react-router-dom';
import Menu from '../component/Menu';

const WeatherAndGame = () => {
  return (
    <div className='fix_menu'>
        <Menu />
        <Outlet />
    </div>
  )
}

export default WeatherAndGame