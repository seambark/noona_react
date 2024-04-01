import React, { useEffect, useState } from 'react';
import SearchBox from './SearchBox';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

const ContactList = ({addList, setAddList}) => {
  const contactList = useSelector(state => state.contact.contactList);
  const [search, setSearch] = useState('');
  const [list, setList] = useState([])

  const listFilter = () => {
    let searchList = contactList.filter((item)=> {
      return item.name === search
    });
    if(addList === true){
      setList(contactList)
      setAddList(false)
    } else if(search !== '') {
      setList(searchList)
    } else {
      setList(contactList)
    }
  }

  useEffect(() => {
    listFilter()
     // eslint-disable-next-line
  },[search,contactList])

  return (
    <>
        <SearchBox setSearch={setSearch}/>
        <div className='contact_list'>
          <div className='total'>
            <span>총 개수 : <b>{list.length}</b></span>
          </div>
          <ul>
            {
              list.length > 0 ?
              list.map((item, key) => {
                return <ContactItem item={item} key={key}/>
              }) : <li className='no_data'>{search && <b>{search} </b>}연락처 목록이 없습니다.</li>
            }
          </ul>
        </div>
    </>
  )
}

export default ContactList