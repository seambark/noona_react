import React from 'react'
import { useNavigate } from 'react-router-dom'

const IndexPage = () => {
    const navigate = useNavigate();

    const goToPage = (link) => {
        console.log(link)
        navigate(link);
    }
  return (
    <div className='project_area'>
        <button onClick={() => goToPage('/weather&game/weather')}>Weather & Game</button>
        <button onClick={() => goToPage('/h&m/productAll')}>H&M homepage</button>
    </div>
  )
}

export default IndexPage