import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ContactItem = ({item}) => {
  return (
    <li>
        <div className='contact'>
            <span className='img'>
                <FontAwesomeIcon icon={faUser} />
            </span>
            <div className='info'>
                <p className='name'>{item.name}</p>
                <p className='phone_number'>{item.phoneNumber}</p>
            </div>
        </div>
    </li>
  )
}

export default ContactItem