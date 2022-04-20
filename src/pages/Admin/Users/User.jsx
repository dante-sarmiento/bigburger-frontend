import { Typography } from 'antd'
import React from 'react'
import { UserList } from './UserListAntd/UserList'
import { ListaUsuarios } from './UserListAntd/UserList'

export const User = () => {
  return (
      <>
      <Typography.Title level={1}>Usuarios</Typography.Title>
        <UserList/>
        <ListaUsuarios/>
      
      
      </>
    
    
  )
  
}