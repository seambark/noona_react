import Navbar from './component/Navbar';
import { Outlet } from 'react-router-dom';
import '../assets/css/homepage.css';

const Main = () => {

  return (
    <div className='homepage_wrap'>
      <Navbar/>
      <div className='section'>
        <Outlet />
      </div>
    </div>
  )
}

export default Main