import React, {useState} from 'react';
import AddButton from '@/components/AddButton'
import {Tag, Space,Divider} from 'antd';
import NestedTable from '@/components/tables/Expandable'
import Issuesmodal from '@/components/Modal/IssuesForm'

const columns = [
    { title: 'Issue', dataIndex: 'issue', key: 'issue' },
    { title: 'Date ', dataIndex: 'date', key: 'date', responsive: ['md'] },
    { title: 'Assigned to', dataIndex: 'assignedto', key: 'assignedto',  },
    { title: 'Client', dataIndex: 'client', key: 'client', responsive: ['md'] },
      {
        title: 'Priority',
        key: 'priority',
        dataIndex: 'priority',
        render: (tag,color)=> {
              if (tag === 'High') {
                color = 'volcano';
              } else if (tag === 'Medium'){ 
                color ='purple'} else {color ='green'}
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            }
         
       , responsive: ['md']
      },
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
      key:0,
      issue: 'Authentication',
      description:' Sales people  ',
      date: '12/2/2021',
      assignedto:'Jerry',
      client:' ASDF34685',
      priority:'High'
    },
    { 
    key:1,
    issue: 'Printing',
    description:' not printing ',
    date: '17/2/2021',
    assignedto:'Jerry',
    client:' ARTG38478',
    priority:'Medium'
    },
    { 
     key:2,
    issue: 'Onboarding',
    description:' importing docs ',
    date: '19/2/2021',
    assignedto:'Jerry',
    client:' ARTG37658',
    priority:'low'
    }]
    

const Issues = () => {
   const [visible, setVisible] = useState(false)

    return ( <div>
        <NestedTable data={data} columns={columns}/>,
           
           <AddButton buttonName='Raise an issue' openModal={()=>setVisible(true)} />,
           {/* <Divider dashed={true} plain > Recurring issues </Divider>, 
            <NestedTable data={data} columns={columns}/>,  */}
           <Issuesmodal visible={visible} onCancel={()=>setVisible(false)}/>
         

    </div> );
}
 
export default Issues;