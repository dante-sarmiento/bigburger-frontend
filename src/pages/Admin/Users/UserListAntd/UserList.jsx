import { Checkbox, Button, Modal, Input } from 'antd'
import { useEffect, useState } from 'react'
import { UsersFromDB } from '../../../../constants/usersFromDB'
import { UserListItem } from './userListItem/UserListItem'
import { Table, Space  } from 'antd';
import { UpdateUser } from '../UpdateUser/UpdateUser'
const { Column } = Table




export const ListaUsuarios = ({functionDelete, changeStatus , users}) => {

  

  const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
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
                
              >
              </Checkbox>
              <Button type='primary' danger onClick={() => functionDelete(user._id)}>Eliminar Usuario </Button>
              <Button type="primary" onClick={() => changeStatus(user._id) } >
                Editar Usuario
            </Button>
            <Modal title="Editar Usuario" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <label htmlFor="">Nombre y Apellido</label>
                <Input key={`${user.fullName}`} />
                <label htmlFor="">Email</label>
                <Input placeholder="Email" />
                <label htmlFor="">Rol</label>
                <Input placeholder="Rol" />
                <label htmlFor="">Estado</label>
                <Input placeholder="Estado" />
            </Modal>
            </Space>
            
          )}
          
        />
      </Table>;

    </>
  )
}



