import React, { useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Loading from '../../component/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../../redux/actions/productAction';

const ProductDetail = () => {
  let {id} = useParams();
  const detail = useSelector(state=>state.product.productDetail);
  const loading = useSelector(state=>state.product.loading);
  const dispatch = useDispatch();

  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id))
  }

  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <Container>
      {loading === true? <Loading /> : (
        
      <Row className='detail'>
        <Col lg="6" className='img'>
          <img src={detail?.img} alt=''/>
        </Col>
        <Col lg="6" className='info'>
          <p className='tag'>
              {detail?.choice === true? (<span className='choice'>Conscious choice</span>):''}
              {detail?.new === true? (<span className='new'>신제품</span>):''}
          </p>
          <h2 className="title mb-3">{detail?.title}</h2>
          <p className="price mb-3">₩ {detail?.price}</p>
          <Form.Select className="mb-3" >
            {detail?.size.map((size,idx) => {
              return (<option key={idx}>{size}</option>)
            })}
          </Form.Select>
          <div className='button_box'>
            <Button variant="danger" type="button">
              추가
            </Button>
          </div>
        </Col>
      </Row>
      )}
    </Container>
  )
}

export default ProductDetail