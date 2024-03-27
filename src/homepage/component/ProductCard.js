import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({item}) => {
  return (
    <div className='item'>
        <Link to={`/h&m/product/${item.id}`}>
            <div className='img'>
                <p className='tag'>
                    {item?.choice === true? (<span className='choice'>Conscious choice</span>):''}
                    {item?.new === true? (<span className='new'>신제품</span>):''}
                </p>
                <img src={item?.img} alt=''/>
            </div>
            <div className='info'>
                <p className='title'>{item?.title}</p>
                <p className='price'>₩ {item?.price}</p>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard