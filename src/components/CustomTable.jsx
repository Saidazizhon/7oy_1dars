import React from 'react';
import { Table } from 'antd';
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';

const CustomTable = ({columns, data, isLoading}) => {
  // const columns = [
  //   {
  //     title: 'ID',
  //     dataIndex: 'id',
  //   },
  //   {
  //     title: 'Tashkilot nomi',
  //     dataIndex: 'companyName',
  //   },
  //   {
  //     title: 'INN',
  //     dataIndex: 'inn',
  //   },
  //   {
  //     title: 'Holati',
  //     dataIndex: 'status',
  //   },
  //   {
  //     title: 'Manzil',
  //     dataIndex: 'address',
  //   },
  //   {
  //     title: 'Yaratilgan vaqti',
  //     dataIndex: 'createdAt',
  //   },
  //   {
  //     title: 'Batafsil',
  //     dataIndex: 'action',
  //   },
  // ];
  // const data = [
  //   {
  //     key: '1',
  //     id:1,
  //     companyName: "Najot Talim",
  //     inn:"222333658",
  //     status:"faol",
  //     address: "Toshkent, Chilonzor 9kv",
  //     createdAt:"05.11.2018",
  //     action: <div className='flex items-center gap-10'>
  //       <DeleteOutlined className='scale-[1.3] cursor-pointer hover:scale-[1.5] duration-300'/>
  //       <EditOutlined className='scale-[1.3] cursor-pointer hover:scale-[1.5] duration-300'/>
  //       <MoreOutlined className='scale-[1.3] cursor-pointer hover:scale-[1.5] duration-300 rotate-[90deg]'/>
  //     </div>
  //   },
    
  // ];
  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={isLoading}
    />
  )
}
export default CustomTable;