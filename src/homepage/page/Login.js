import React from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    
    navigate('/h&m/productAll')
  };

  return (
    <div className='login_area'>
      <Form onSubmit={(e) => loginUser(e)} className='d-grid'>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-4" placeholder="password">
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