import React from 'react'
import './UserListItem.scss';

export const UserListItem = ({users}) => {
  return (
    <li className='custom-li'>
      <div className='description'>
        <div className='nombre'>{users.fullName}</div>
        <div className='email'>{users.email}</div>
        <div className='role'>{users.role}</div>
      </div>
      <div className='active'>
        <div>{users.active}</div>
      </div>
    </li>
  )
}

