import React, {useState,useEffect} from 'react';
import Ribbon from '@/components/Ribbon'
import {Tag, Space,Divider,message} from 'antd';
import NestedTable from '@/components/tables/Expandable'
import Issuesmodal from '@/components/Modal/IssuesForm'
import axios from '@/utils/Api'

const columns = [
  { title: 'Ref', dataIndex: 'reference_number', key: 'key' },
    { title: 'Subject', dataIndex: 'subject', key: 'subject' },
    { title: 'Date ', dataIndex: 'date_raised', key: 'date_raised', responsive: ['md'] },
    { title: 'Due Date ', dataIndex: 'due_date', key: 'due_date', responsive: ['md'] },
    { title: 'Assigned to', dataIndex: 'employee_id', key: 'employee_id', responsive: ['md']  },
    { title: 'Client', dataIndex: 'business_id', key: 'business_id', responsive: ['md'] },
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
   const [ticket,setTicket] =useState([])

   useEffect(() => {
     const unsub=()=>{
      try{
         axios.get('/ticket').then(res=> {
          const {success,data}= res.data;
         
          //console.log()
          if(res.status===200){
            //message.success('Successfully submitted an issue')
            console.log(data);
            setTicket(data)
        }
      }).catch(error=> console.log(` Error encountered ${error}`) )
     } catch(error){
        console.log(`Error fetching ticket:${error}`)
      }
     }
     return () => unsub()
   }, [])

    return ( <div>
        
            <NestedTable title={<Ribbon tableTitle='Issues' 
            buttonName='Raise an issue' openModal={()=>setVisible(true)} />}
            data={ticket} columns={columns}/>,
           
         
           {/* <Divider dashed={true} plain > Recurring issues </Divider>, 
            <NestedTable data={data} columns={columns}/>,  */}
           <Issuesmodal visible={visible} onCancel={()=>setVisible(false)}/>
          {/* {ticket.map(item=>{
            <p> {item.subject} {item.description} {item.business_id}<br/>
            {item.due_date}{item.date_raised}{item.employee_id}</p>
          })} */}

    </div> );
}
 
export default Issues;