import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticateAction } from '../../redux/actions/authenticateAction';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (e) => {
    e.preventDefault();
    dispatch(authenticateAction.login(id,password))
    navigate('/h&m/productAll')
  };

  return (
    <div className='login_area'>
      <Form onSubmit={(e) => loginUser(e)} className='d-grid'>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setId(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-4" placeholder="password" onChange={(e) => setPassword(e.target.value)}>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password'/>
        </Form.Group>

        <Button variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </div>
  )
}

export default Login