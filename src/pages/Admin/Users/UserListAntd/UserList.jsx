import { Checkbox, Button, Modal, Input, Form} from 'antd'
import { useEffect, useState } from 'react'
import { Table, Space } from 'antd';
import { UpdateUser } from '../UpdateUser/UpdateUser'
import axios from 'axios';
const { Column } = Table




export const ListaUsuarios = ({ functionDelete, functionUserEdit, changeStatus, editModal, users, handleActiveStatus }) => {

  const [isModalVisible, setUserEdit] = useState(false);
  const [userEditing, setUserEditing] = useState(true)

  const showModal = (id) => {
    setUserEdit(true);
    //guardo el usuario en userED
    let userED = users.find(user => user._id === id)
    console.log(userED)
    setUserEditing(userED)

  };

  async function userEdit(upd_id) {
    let userUD = await axios.put(`http://localhost:3000/api/user/${upd_id}`);
    setUserEdit()
    console.log(userUD)
    handleOk()
  }

  const handleOk = () => {
    setUserEdit(false);
  };

  const handleCancel = () => {
    setUserEdit(false);
  };


  // function onChange(pagination, filters, sorter, extra) {
  //   console.log('params', pagination, filters, sorter, extra);
  // }

  return (
    <>
      <Table dataSource={users}>
        <Column title="Nombre y Apellido" dataIndex="fullName" key="fullName" />
        <Column title="Correo electrónico" dataIndex="email" key="email" />
        <Column title="Rol" dataIndex="role" key="role" />
        <Column
          title="Active"
          key="action"
          dataIndex="active"
          render={(active, user) => (
            <Space size="middle">
              <Checkbox
                checked={active}
                onChange={(e) => {
                  handleActiveStatus(e.target.checked, 'active', user._id)
                }}
              >
              </Checkbox>
              <Button type='primary' danger onClick={() => functionDelete(user._id)}>Eliminar Usuario </Button>

              <Button type='secondary' onClick={() => functionUserEdit(user._id)}>EDIT</Button>


              <Button type="primary" onClick={() => showModal(user._id)} onFocus={() => changeStatus(user._id)} >
                Editar Usuario
              </Button>
              <Modal title="Editar Usuario"
                visible={isModalVisible}
                onOk={userEdit}
                onCancel={handleCancel}>
                <Form>
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
            </Space>

          )}

        />
      </Table>;

    </>
  )
}





