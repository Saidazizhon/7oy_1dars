import { LineOutlined, MedicineBoxOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import CustomSelect from '../components/CustomSelect'
import CustomTable from "../components/CustomTable"
import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons';
import axios from 'axios'


function Organization() {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Tashkilot nomi',
      dataIndex: 'companyName',
    },
    {
      title: 'INN',
      dataIndex: 'inn',
    },
    {
      title: 'Holati',
      dataIndex: 'status',
    },
    {
      title: 'Manzil',
      dataIndex: 'address',
    },
    {
      title: 'Yaratilgan vaqti',
      dataIndex: 'createdAt',
    },
    {
      title: 'Batafsil',
      dataIndex: 'action',
    },
  ];
  const [data, setData] = useState()

  const [isLoading, setIsLoading] = useState(false)
  const [regionId, setRegionId] = useState(null)
  const RegionsList = [
    {
      value:1,
      label:"Toshkent shahar",

    },
    {
      value:2,
      label:"Samarqand vilayati",

    },
    {
      value:3,
      label:"Xorazm vilayati",

    },
    {
      value:4,
      label:"Adijon vilayati",

    },
  ]

  useEffect(() => {
    axios.get("http://localhost:3000/organization").then(res => {
      // console.log(res);
      
      setData(res.data.map(item => {
        item.companyName = item.companyName ? item.companyName : <LineOutlined/>
        item.inn = item.inn ? item.inn : <LineOutlined/>

        item.action = <div className='flex items-center gap-10'>
          <DeleteOutlined className='scale-[1.3] cursor-pointer hover:scale-[1.5] duration-300'/>
          <EditOutlined className='scale-[1.3] cursor-pointer hover:scale-[1.5] duration-300'/>
          <MoreOutlined className='scale-[1.3] cursor-pointer hover:scale-[1.5] duration-300 rotate-[90deg]'/>
        </div>
        return item
      }))
    })
  },[])
  return (
    <div className='p-5'>
      <div className="flex items-center justify-between">
        <div className="">
          <h2 className='font-bold text-[25px]'>Tashkilotlar</h2>
          <span className='text-[15px] pl-1 text-slate-500'>tashkilotlar (0)</span>
        </div>
        <Button icon={<MedicineBoxOutlined/>} size='large' htmlType='submit' type='primary' >Qo'shish</Button>
      </div>
      <div className="flex mt-5 items-center space-x-5">
        <Input className='w-[350px]' placeholder='Qidirish...' size='large'  type='text' allowClear />
        <CustomSelect placeholder={"Tanlash..."} setChooseId={setRegionId} option={RegionsList} />
      </div>

      <div className="mt-5">
        <CustomTable columns={columns} data={data} isLoading={isLoading}/>
      </div>
    </div>
  )
}

export default Organization
