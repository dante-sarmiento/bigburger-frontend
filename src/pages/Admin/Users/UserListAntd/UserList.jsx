import { List, Skeleton,  } from 'antd'
import axios from 'axios'
import { Component } from 'react'
import { UsersFromDB } from '../../../../constants/usersFromDB'
import { UserListItem } from './userListItem/UserListItem'


export class ListaUsuarios extends Component {

  state = {
    users: []
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:3000/api/users');
    this.setState({ users: res.data });
    console.log(this.state.users);
  }
    
  
  
  render() {
    return (
      <>
       <List>
            {this.state.users.map(user => {
                return (
                    <List.Item key={user._id}>
                        <Skeleton avatar title={false} loading={false} active>
                            <List.Item.Meta
                                title={<a href="https://ant.design">{user.fullName}</a>}
                                
                            />
                            <div>{user.active}</div>
                        </Skeleton>
                    </List.Item>
                )
            })
            }
        </List >
      </>
    )
  }
}



export const UserList = () => {

  return (
    <>
      <ul>
        {UsersFromDB.map(users =>
          <UserListItem users={users} key={users._id} />
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


