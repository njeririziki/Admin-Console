import React, {useState} from 'react';
import Layout from '@/components/Layout'
import {Space} from 'antd'
import NestedTable from '@/components/tables/Expandable'
import Ribbon from '@/components/Ribbon'
import OnboardForm from '@/components/Modal/OnboardForm'

const columns = [
    { title: 'Type', dataIndex: 'type', key: 'type',  },
    { title: 'Date ', dataIndex: 'date', key: 'date',  responsive: ['md'] },
    { title: 'Assigned to', dataIndex: 'assignedto', key: 'assignedto', },
    { title: 'Location', dataIndex: 'location', key: 'location',  responsive: ['sm'] },
    {
      title: 'Action', key: 'action',
      render: (text, record) => (

        <Space size="middle">
       
          <a>Close</a>
        </Space>
      ), 
    },
  ];

const data =[
{ 
  key: 0,
  type: 'Software',
  description:' Basic software installation',
  date: '12/2/2021',
  assignedto:'Jerry',
  location:' Nyundo Drive'
},
{ 
 key: 1,
type: 'Hardware',
description:' Printer configuration',
date: '17/2/2021',
assignedto:'Jerry',
location:' Mango Drive'

}]





const Onboarding = () => {
  const [visible, setVisible] = useState(false)
    return ( 
    <div>
       <NestedTable data={data} columns={columns} 
       title={<Ribbon  tableTitle='New Clients' buttonName='Onboard Client' openModal={()=>setVisible(true)}/>}/>,
          
            <OnboardForm visible={visible} onCancel={()=>setVisible(false)}
            modalTitle={'Vendors'} itemslabel={'List of vendors'}
            apiEndpoint={`vendors`}/> 
      
    </div> );
}

 
 
export default Onboarding;