import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const PrivateRoutes = () => {
  const auth = useSelector(state=>state.auth.authenticate);
  return (
    auth === true? <ProductDetail/> : <Navigate to='/h&m/login'/>
  )
}

export default PrivateRoutes