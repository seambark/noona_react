import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

const ContactForm = ({setAddList}) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const dispatch = useDispatch();

    const addContact = (e) => {
        e.preventDefault();
        dispatch({type:"ADD_CONTACT",payload:{name, phoneNumber}})
        setAddList(true)
    }

  return (
    <Form onSubmit={(e) => addContact(e)}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" placeholder="이름을 입력해주세요." onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>전화번호</Form.Label>
        <Form.Control type="number" placeholder="전화번호를 입력해주세요." onChange={(e) => setPhoneNumber(e.target.value)}/>
      </Form.Group>
      <div className='align_right'>
        <Button variant="primary" type="submit">
            연락처 추가
        </Button>
      </div>
    </Form>
  )
}

export default ContactForm