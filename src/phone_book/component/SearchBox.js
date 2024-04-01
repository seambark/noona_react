import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';

const SearchBox = ({setSearch}) => {
    const [keyWord, setKeyword] = useState('');
    const [value, setValue] = useState('');
    // eslint-disable-next-line

    const search = (e) => {
        e.preventDefault();
        
        if(value === '') {
            setSearch('')
            alert("빈값은 검색할 수 없습니다.")
        } else {
            setSearch(keyWord)
            setValue('')
        }
    }

    const searchKeyword = (e) => {
        setKeyword(e.target.value)
        setValue(e.target.value)
    }

  return (
    <Form onSubmit={(e) => search(e)} className="search_area">
        <Row className="align-items-center">
            <Col sm={9} className="my-1">
                <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                    Name
                </Form.Label>
                <Form.Control id="inlineFormInputName" placeholder="검색할 이름을 입력해주세요." onChange={(e) => searchKeyword(e)} value={value}/>
            </Col>
            <Col sm={3}>
                <Button type="submit">검색</Button>
            </Col>
        </Row>
    </Form>
  )
}

export default SearchBox