import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { addIncrement, addDecrement, addIncrementPayload, addDecrementPayload } from '../redux/reducer/counterSlice';

const Counter = () => {
    const countNum = useSelector(state => state.counter.count);
    const [active, setActive] = useState(false);
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();
    

    const numberCheck = (name, num) => {
        let payloadNum = num? num : 0;
        dispatch(name(payloadNum))
        setActive(true)
    }

    const increment = () => {
        numberCheck(addIncrement)
        setIcon('+')
    }

    const decrement = () => {
        numberCheck(addDecrement)
        setIcon('-')
    }

    const increment_payload = () => {
        numberCheck(addIncrementPayload, 5)
        setIcon('+')
    }

    const decrement_payload = () => {
        numberCheck(addDecrementPayload, 5)
        setIcon('-')
    }

    const check = () => {
        setActive(false)
    }


  return (
    <div className='counter_area'>
        <Container className='counter_box'>
            <Row>
                <Col className={`num ${active === true?'active':''}`}>
                    <span>
                        <span className={`active_icon ${icon === '-'?'minus':''}`}>{icon}</span>
                        {countNum}
                    </span>
                </Col>
            </Row>
            <Row>
                <Col className='counter_btn'>
                    <Button type='button'variant="primary" size="lg" onMouseDown={() => check()} onClick={() => increment()}>
                        <FontAwesomeIcon icon={faPlus} /> 1
                    </Button>
                    <Button type='button' variant="danger" size="lg" onMouseDown={() => check()} onClick={() => decrement()}>
                        <FontAwesomeIcon icon={faMinus} /> 1
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col className='counter_btn'>
                    <Button type='button'variant="primary" size="lg" onMouseDown={() => check()} onClick={() => increment_payload()}>
                        <FontAwesomeIcon icon={faPlus} /> 5
                    </Button>
                    <Button type='button'variant="danger" size="lg" onMouseDown={() => check()} onClick={() => decrement_payload()}>
                        <FontAwesomeIcon icon={faMinus} /> 5
                    </Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Counter