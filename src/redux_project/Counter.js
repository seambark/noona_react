import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Counter = () => {
    const countNum = useSelector(state => state.count);
    const [active, setActive] = useState(false);
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();
    

    const numberCheck = (name) => {
        if(name === "DECREMENT" && countNum <= 0) {
            alert('숫자는 0 이하로 감소할 수 없습니다.')
        } else {
            dispatch({type:name})
            setActive(true)
        }
    }

    const increment = (e) => {
        numberCheck("INCREMENT")
        setIcon('+')
    }

    const decrement = (e) => {
        numberCheck("DECREMENT")
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
                    <Button type='button'variant="primary" size="lg" onMouseDown={(e) => check(e)} onClick={(e) => increment(e)}>
                        <FontAwesomeIcon icon={faPlus} /> 증가
                    </Button>
                    <Button type='button' variant="danger" size="lg" onMouseDown={(e) => check(e)} onClick={(e) => decrement(e)}>
                        <FontAwesomeIcon icon={faMinus} /> 감소
                    </Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Counter