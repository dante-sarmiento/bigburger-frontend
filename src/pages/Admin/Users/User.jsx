import { Form, Input, Modal, Typography } from 'antd'
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
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users`);
    const usersDB = res.data.users;
    setUsers(usersDB);
    console.log(usersDB);
  }

  const handleDeleteUser = async (id) => {
    try {
      console.log(id)
      let userDE = users.find(user => user._id === id)
      const deletedUser = await axios.delete(`http://localhost:3000/api/user/${id}`)
      console.log(deletedUser)
      const u = users.filter(user => user._id !== id);
      setUsers(u)
      setDialogMessage(deletedUser.data.msg);
      setDialogTitle(`USUARIO ${userDE.fullName} ELIMINADO`)
      toggleActionDialog(true)
    }
    catch (error) {
      console.log(error)
      setDialogMessage('Error al borrar el usuario');
      setDialogTitle(`ERROR`)
      toggleActionDialog(true)
    }
  }

  //EDITAR USUARIO 1

  const [isModalVisible, setUserEdit] = useState(false);
  const [userEditing, setUserEditing] = useState(true)

  const handleUserEdit = async (id) => {
    try {
      setUserEdit(true)
      let userDE = users.find(user => user._id === id)
      let userED = users.find(user => user._id === id)
      console.log(userED)
      console.log(userDE)
      setUserEditing(userED)
      
    }
    catch (error){
    console.log(error)
    }
  }

    const handleOk = async (id, req, body) => {
    try{
      await axios.put(`http://localhost:3000/api/user/${id}`)
      const userChangesToApply = req.body;
      const updatedUser = await User.findByIdAndUpdate(id, userChangesToApply, { new: true });
      console.log(updatedUser)
      setUserEdit(false);

    }
    catch{

    }
  };

  const handleCancel = () => {
    setUserEdit(false);
  };
  //EDITAR USUARIOS
  const UpdateUser = async (id) => {
    try{
      let userUD = users.find(user => user._id === id)
      console.log(userUD)
    }
    catch (error){
    console.log(error)
    }
  }

  const handleActiveStatus = async(value, property, id) => {
    try {
      const user = users.find(user => user._id === id);
      user[property] = value;
      const updUser = await axios.put(`${process.env.REACT_APP_SERVER_URL}/user/${id}`, user)
      setUsers([...users])
    } catch (error) {
      
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  const hiddeModal = () => toggleActionDialog(false)


  return (
    <>
      <Typography.Title level={1}>Usuarios</Typography.Title>
      {/* <UserList/> */}
      <ListaUsuarios handleActiveStatus={handleActiveStatus} functionDelete={handleDeleteUser} functionUserEdit={handleUserEdit} changeStatus={UpdateUser} users={users} />
      <Modal title={dialogTitle} visible={actionDialog} onOk={hiddeModal} onCancel={hiddeModal}>
        {dialogMessage}
      </Modal>
      <Modal title="Editar Usuario"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}>
                <Form>
                  {/* <Form.Item label="state">
                    <Input value={userEditing?.active} onChange={handleUserEdit}></Input>
                  </Form.Item> */}
                  <Form.Item label="Estado" >
                    <Input value={userEditing?.active} onChange={(e) => {
                      setUserEditing((pre) => {
                        return { ...pre, active: e.target.value }
                      })
                    }} />
                  </Form.Item>
                  <Form.Item label="Rol">
                    <Input value={userEditing?.role} onChange={(e) => {
                      setUserEditing((pre) => {
                        return { ...pre, role: e.target.value }
                      })
                    }} />
                  </Form.Item>
                </Form>
              </Modal>
    </>


  )

}