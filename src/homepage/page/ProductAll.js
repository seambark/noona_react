import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// 1. 전체상품페이지, 로그인, 상품상세페이지
// 1-1. 네비게이션 바
// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품디테일을 눌렀으나, 로드인이 안되있을경우에는 로그인페이지가 먼저 나온다.
// 5. 로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 상품을 검색할 수 있다.

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const  getProducts = async() => {
    let url = `https://my-json-server.typicode.com/seambark/noona_react/products`;
    let response = await fetch(url);
    let data = await response.json();

    setProductList(data)
  }

  useEffect(() => {
    getProducts();
  },[]);

  return (
    <Container>
      <Row>
      {productList.map((menu) => (
        <Col lg={3}>
          <ProductCard item={menu}/>
        </Col>
      ))}
      </Row>
    </Container>
  )
}

export default ProductAll