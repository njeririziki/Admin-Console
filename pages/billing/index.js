import React, {useState} from 'react';
import {Tag, Space, Divider, Popconfirm} from 'antd';
import Table from '@/components/tables/Expandable'
import List from '@/components/List/List'
import Link from 'next/link'
import GridList from '@/components/Cards/Grid'
import Pie from '@/components/Cards/Pie'
import styles from '@/styles/billing.module.scss'
import {DollarSign,UserCheck,UserMinus,Send}  from 'react-feather'


const dollar= <DollarSign size='20px'/>
const userCheck= <UserCheck size='20px'/>
const userMinus= < UserMinus size='20px'/>
const send=< Send size='20px'/>


   
const columns = [
    { title: 'Client', dataIndex: 'client', key: 'client',  },
    { title: 'Transaction ', dataIndex: 'number', key: 'number ',  sortOrder: 'descend',
     responsive: ['sm'] },
    { title: ' Date ', dataIndex: 'date', key: 'date',  
    sortOrder: 'descend',
    responsive: ['md'] },
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
          <Link href='/client_id' as={`/client_${record.key}`}>
          <a>Manage</a>
          </Link>   
          ), 

      },
    
  ];

  const tableData =[
    { key: 0,
      client: 'Sheridan',
     number: 6788,
      date: '12/2/2021',
      amount: 12783,
      status: 'Paid',
    },
    { 
      key:1,
      client: 'Brandon',
      number: 8765,
      date: '17/2/2021',
      amount: 15783,
      status: 'Past due',
    },
    { 
      key: 2,
      client: 'Gerald',
      number: 5368,
      date: '14/2/2021',
      amount: 32243,
      status: 'Paid',
    },
    
    { 
      key:3,
      client: 'Brandon',
      number: 9345,
      date: '18/2/2021',
      amount: 45703,
      status: 'Past due',
    }]


const totals=[
    {title:'Sent Invoices', number: 134, icon:send, },
    {title: 'Invoices Due', number: 234, icon:userMinus},
    {title: 'Paid Accounts', number:34, icon:userCheck}, 
    {title: ' Amount Billed', number: 134310, icon:dollar}, 
]
const pieData=[
     {
          id:'unrealised',
          label: 'Unrealised ',
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
  const [tabledata, setTableData] = useState( tableData)
  // const handleDelete = ()=>{
  //   setTableData(tableData.filter(item=> item.key !== key)) 
  // } 
    return(
        <div>
            <GridList data={totals}/>
            <div className={styles.rowTwo} >
            <List header='Open Invoices' data={profiles}
             date='12/09/2021' pageSize={3}/>
            <Pie data={pieData}/> 
            </div>
            <Divider orientation='left' plain>Recent Transactions</Divider>
            <Table data={tabledata} columns={columns}  />
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