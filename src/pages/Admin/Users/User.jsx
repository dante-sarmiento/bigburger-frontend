import { Modal, Typography } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { UserList } from './UserListAntd/UserList'
import { ListaUsuarios } from './UserListAntd/UserList'

export const User = () => {
  const [users, setUsers] = useState([]);
  const [actionDialog, toggleActionDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [dialogTitle, setDialogTitle] = useState('');

  async function loadUsers() {
    const res = await axios.get('http://localhost:3000/api/users');
    console.log(res.data);
    setUsers(res.data.users)
  }

  const handleDeleteUser = async (id) => {
    try{
      console.log(id)
    const deletedUser = await axios.delete(`http://localhost:3000/api/user/${id}`)
    const u = users.filter(user => user._id !== id);
    setUsers(u)
    setDialogMessage(deletedUser.data.msg);
      setDialogTitle(`USUARIO ${id} ELIMINADO`)
      toggleActionDialog(true)
    }
    catch (error){
    console.log(error)
    setDialogMessage('Error al borrar el usuario');
      setDialogTitle(`ERROR`)
      toggleActionDialog(true)
    }
  }

  const UpdateUser = async (id) => {
    console.log(id)
  }


  useEffect(() => {
    loadUsers();
  }, []);
  
  const hiddeModal = () => toggleActionDialog(false)

  
  return (
      <>
      <Typography.Title level={1}>Usuarios</Typography.Title>
        {/* <UserList/> */}
        <ListaUsuarios functionDelete={handleDeleteUser} changeStatus={UpdateUser} users={users}/>
        <Modal title={dialogTitle} visible={actionDialog} onOk={hiddeModal} onCancel={hiddeModal}>
        {dialogMessage}
      </Modal>
      
      
      </>
    
    
  )
  
}