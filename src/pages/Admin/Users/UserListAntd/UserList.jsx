import { Divider, List, } from 'antd'
import React from 'react'
import { UsersFromDB } from '../../../../constants/usersFromDB'
import { UserListItem } from './userListItem/UserListItem'


export const UserList = () => {
  return (
    <>
    <ul>
          {UsersFromDB.map(users => 
            <UserListItem users={users} key={users._id}/>
          )}
    </ul>
    




    {/* <Divider orientation="left">Lista de usuarios</Divider>
    <List
      size="large"
      bordered
      dataSource={UsersFromDB}
      renderItem={users =>
        <List.Item>
          <span>{users._id}, </span>
          {users.fullName}
        </List.Item>}
    /> */}
    </>
  )
}


