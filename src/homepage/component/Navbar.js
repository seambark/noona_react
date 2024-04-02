import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import logoImg from '../../assets/images/hm-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateAction } from '../../redux/actions/authenticateAction';

const Navbar = () => {
    const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M HOME','Sale','지속가능성'];
    const [menuActive, setMenuActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const navigate = useNavigate();
    const auth = useSelector(state=>state.auth.authenticate);
    const dispatch = useDispatch();

    const menuClick = () => {
        menuActive === false ? setMenuActive(true) : setMenuActive(false);
    }
    const searchClick = () => {
        searchActive === false ? setSearchActive(true) : setSearchActive(false);
    }

    const handleOnKeyPress = (e) => {
        let inputValue = e.target.value;

        if (e.key === 'Enter') {
            navigate(`/h&m/productAll?q=${inputValue}`);
        }
    }
    const logoutClick = () => {
        dispatch(authenticateAction.logout())
    }

    return (
    <header className='header'>
        <div className='unit_area'>
            {auth === false?(
                <Link to='/h&m/login' className='login_btn'>
                    <FontAwesomeIcon icon={faUser} />
                    <span>로그인</span>
                </Link>
            ):(
                <button type='button' className='login_btn' onClick={() => logoutClick()}>
                    <FontAwesomeIcon icon={faUser} />
                    <span>로그아웃</span>
                </button>
            )}
            
        </div>
        <div>
            <h1 className='logo'>
                <Link to='/h&m/productAll' className='login_btn'>
                    <img src={logoImg} alt='H&M logo'/>
                </Link>
            </h1>
        </div>
        <div className='menu_area'>
            <button type='button' onClick={() => menuClick()} className='menu_btn'>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <button type='button' onClick={() => searchClick()} className='search_btn'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <nav className={`menu_list ${menuActive !== false?'active':''}`}>
                <ul>
                    {menuList.map((menu, idx) => {
                        return (<li key={idx}>{menu}</li>)
                    })}
                </ul>
                <button type='button' className='close_btn' onClick={() => menuClick()}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </nav>
            <div className={`search_box ${searchActive !== false?'active':''}`}>
                <span className='search_input'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type='search' placeholder='제품검색' onKeyUp={(e) => handleOnKeyPress(e)}/>
                </span>
            </div>
        </div>
    </header>
  )
}

export default Navbar