import Navbar from './component/Navbar';
import { Outlet } from 'react-router-dom';
import '../assets/css/homepage.css';

const Main = ({authenticate, setAuthenticate}) => {

  return (
    <div className='homepage_wrap'>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <div className='section'>
        <Outlet />
      </div>
    </div>
  )
}

export default Main