// import { Button, Modal, Input } from 'antd';
// import axios from 'axios';
// import React, { useState } from 'react'

// export const UpdateUser =  (id) => {
//     console.log(id)

//     const [isModalVisible, setIsModalVisible] = useState(false);

//     const showModal = () => {
//         setIsModalVisible(true);
//     };

//     const handleOk = () => {
//         setIsModalVisible(false);
//     };

//     const handleCancel = () => {
//         setIsModalVisible(false);
//     };

//     return (
//         <>
//             <Button type="primary" onClick={showModal} >
//                 Editar Usuario
//             </Button>
//             <Modal title="Editar Usuario" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//                 <label htmlFor="">Nombre y Apellido</label>
//                 <Input placeholder="Nombre y Apellido" />
//                 <label htmlFor="">Email</label>
//                 <Input placeholder="Email" />
//                 <label htmlFor="">Rol</label>
//                 <Input placeholder="Rol" />
//                 <label htmlFor="">Estado</label>
//                 <Input placeholder="Estado" />
//             </Modal>



//         </>
//     )
// }
