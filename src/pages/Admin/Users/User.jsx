import { Typography } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { UserList } from './UserListAntd/UserList'
import { ListaUsuarios } from './UserListAntd/UserList'

export const User = () => {
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    const res = await axios.get('http://localhost:3000/api/users');
    console.log(res.data);
    setUsers(res.data.users)
  }

  

  useEffect(() => {
    loadUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    // const deletedUser = await axios.delete()
    const u = users.filter(user => user._id !== id);
    setUsers(u)
  }

  
  return (
      <>
      <Typography.Title level={1}>Usuarios</Typography.Title>
        {/* <UserList/> */}
        <ListaUsuarios functionDelete={handleDeleteUser} users={users}/>
      
      
      </>
    
    
  )
  
}