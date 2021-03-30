import React from 'react';
import {Tag, Space, Divider} from 'antd'
import Layout from '@/components/Layout'
import Table from '@/components/tables/Expandable'
import List from '@/components/List/List'
import GridList from '@/components/Cards/Grid'
import Pie from '@/components/Cards/Pie'
import styles from '@/styles/Billing.module.scss'
import {DollarSign,UserCheck,UserMinus,Send}  from 'react-feather'

const dollar= <DollarSign size='20px'/>
const userCheck= <UserCheck size='20px'/>
const userMinus= < UserMinus size='20px'/>
const send=< Send size='20px'/>

const columns = [
    { title: 'Client', dataIndex: 'client', key: 'client',  },
    { title: 'Transaction ', dataIndex: 'number', key: 'number ',  responsive: ['sm'] },
    { title: ' Date ', dataIndex: 'date', key: 'date',  responsive: ['md'] },
     
    { title: 'Amount', dataIndex: 'amount', key: 'amount', 
    defaultSortOrder:'descend',
    sorter: (a,b)=> a.amount - b.amount,
    responsive: ['sm']},
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (tag,color)=> {
              if (tag === 'Past due') {
                color = 'volcano';
              } else { color ='green'}
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            }
         
       , responsive: ['md'],
       filters: [
        {
          text: 'Paid',
          value: 'Paid',
        },
        {
          text: 'Past due',
          value: 'Past due',
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
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

  const tableData =[
    { client: 'Sheridan',
     number: 6788,
      date: '12/2/2021',
      amount: 12783,
      status: 'Paid',
    },
    { client: 'Brandon',
    number: 8765,
    date: '17/2/2021',
    amount: 15783,
    status: 'Past due',
    },
    { client: 'Gerald',
     number: 5368,
      date: '14/2/2021',
      amount: 32243,
      status: 'Paid',
    },
    
    { client: 'Brandon',
    number: 9345,
    date: '18/2/2021',
    amount: 45703,
    status: 'Past due',
    }]


const totals=[
    {title:'Sent Invoices', number: 134, icon:send, },
    {title: 'Credited', number: 234, icon:userMinus},
    {title: 'Paid Acc', number:34, icon:userCheck}, 
    {title: ' Monthly Total', number: 134310, icon:dollar}, 
]
const pieData=[
        {
          id:'pending',
          label: 'Pending ',
          value: 20,
          color: '#ff5252'
      },
    {
        id:'invoiced',
        label: ' Invoiced',
        value:30,
        color: '#ede7f6'
    },
 
    {
      id:'paid',
      label: 'Paid ',
      value: 50,
      color: '#39796b'
  },
]

const Billing =({profiles})=> {
    
    return(
        <div>
            <GridList data={totals}/>
            <div className={styles.rowTwo} >
            <List header='Open Invoices' data={profiles}
             date='12/09/2021' />
            <Pie data={pieData}/> 
            </div>
            <Divider orientation='left' plain>Recent Transactions</Divider>
            <Table data={tableData} columns={columns}  />
        </div>
   
    );
    }



 
export default Billing;




export const getStaticProps = async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
    const profiles= await res.json()
    return{
        props:{
            profiles
        }
    };
}