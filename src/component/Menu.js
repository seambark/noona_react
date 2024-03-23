import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    const menuList = [
        {
            menu: '날씨',
            link: '/'
        },
        {
            menu: '게임',
            link: '/page/RockPaperScissor'
        }
    ];

  return (
    <nav className='menu'>
        <ul>
            {
                menuList.map((item, index) => {
                    return(
                        <li key={index}>
                            <NavLink to={item.link} >{item.menu}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
    </nav>
  )
}

export default Menu