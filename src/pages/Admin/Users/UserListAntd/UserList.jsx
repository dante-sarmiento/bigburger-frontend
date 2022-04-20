import { List, Skeleton,Checkbox } from 'antd'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { UsersFromDB } from '../../../../constants/usersFromDB'
import { UserListItem } from './userListItem/UserListItem'
import { Table, Space  } from 'antd';
const { Column } = Table




export const ListaUsuarios = ({functionDelete, users}) => {
  

  
  

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
                // onChange={changeStatus}
              >
              </Checkbox>
              <a onClick={() => functionDelete(user._id)}>Delete </a>
            </Space>
          )}
        />
      </Table>;

    </>
  )
}



