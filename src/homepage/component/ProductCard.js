import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='item'>
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
    </div>
  )
}

export default ProductCard