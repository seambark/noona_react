import React, { useEffect } from 'react';
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';
import Loading from '../../component/Loading';
import {productAction} from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. 네비게이션 바
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품디테일을 눌렀으나, 로드인이 안되있을경우에는 로그인페이지가 먼저 나온다.
// 5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 상품을 검색할 수 있다.

const ProductAll = () => {
  const productList = useSelector(state=>state.product.productList);
  // eslint-disable-next-line
  const [query, setQuery] = useSearchParams();
  const loading = useSelector(state=>state.product.loading);
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get('q')||'';

    dispatch(productAction.getProducts(searchQuery))
  }

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  },[query]);

  return (
    <Container>
      <Row>
      {productList?.length > 0 ? (
        productList?.map((menu, idx) => (
        <Col lg={3} key={idx}>
          <ProductCard item={menu}/>
        </Col>
      ))):(
        loading === true? <Loading />:
        <p className='no_data'>{query?.get('q')} 상품이 없습니다.</p>
      )}
      </Row>
    </Container>
  )
}

export default ProductAll