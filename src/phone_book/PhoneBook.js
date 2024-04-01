import React,{useState} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

const PhoneBook = () => {
    //1. 왼쪽에 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 있다.
    //2. 리스트에 유저 이름과 전화번호를 추가할 수 있다.
    //3. 리스트에 아이템이 몇개있는지 보인다.
    //4. 사용자가 유저를 이름검색으로 찾을 수 있다.
    const [addList, setAddList ] = useState(false);

  return (
    <div className='phone_book'>
        <h1 className='title'>연락처</h1>
        <Container>
            <Row>
                <Col className='left'>
                    <ContactForm setAddList={setAddList} />
                </Col>
                <Col className='right'>
                    <ContactList addList={addList} setAddList={setAddList}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default PhoneBook