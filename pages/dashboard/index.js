 import React from 'react';
 import {Grid} from 'antd'
import Layout from '@/components/Layout'
import TotalCards from '@/components/Cards/totals'
import GridList from '@/components/Cards/Grid'
import Table from '@/components/tables/Expandable'
import Timeline from '@/components/Cards/scheduler'
import Accordion from '@/components/List/Accordion'
import List from '@/components/List/List'
import CalenderCards from '@/components/Cards/Calender'
import styles from '@/styles/dashboard.module.scss'
import userUser from '@/utils/hooks/useUser'

const tableColumns = [
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Date ', dataIndex: 'date', key: 'date' },
    { title: 'Assigned to', dataIndex: 'assignedto', key: 'assignedto' },
    { title: 'Location', dataIndex: 'location', key: 'location' },
  ];

const events=[
    {id:'12/3/2021', issue:'Authentication', description:' authenticating employees', color:'red'},
    {id:'13/4/2021',issue: 'Invoicing', description:' generating invoices' , color:'red'},
    {id:'19/4/2021',issue:'Printing', description:' downloading reports',color:'brown'},
    {id:'21/4/2021',issue: 'Invoicing', description:' generating invoices' , color:'yellow'},
    {id:'23/4/2021',issue:'Printing', description:' downloading reports',color:'green'},
]
const totals=[
    {title:'Revenue', number: 134543},
    {title: 'Invoiced', number: 234225},
    {title: 'New Clients', number:34 }, 
    {title: 'Accounts ', number: 134 }, 
]
const data =[
    { issue: 'Authentication',
      description:' Sales people  ',
      date: '12/2/2021',
      assignedto:'Jerry',
      client:' ASDF34685'
    },
    { issue: 'Printing',
    description:' not printing ',
    date: '17/2/2021',
    assignedto:'Jerry',
    client:' ARTG38478'
    
    }]
    const clients =[
        { id:'33412', title:'Highest profile Accounts', email:'', location:'12'},
        {id:'33912',title: ' Upgraded Accounts', email:'', location:'34'},
        { id:'33402', title: 'Unsubscribed', email:'', location:'2'},
    ]

const Dash=({profiles})=>{
    const screens = Grid.useBreakpoint()
  
    return(
    <div className={styles.root}>
       <div className={styles.totalcards}>
        <GridList data={totals}/> 
      
        <List header='Client Retainership' data={profiles} />
        </div>
        <Timeline title='Issues' events = {events}/>
        <CalenderCards className={styles.calendercards}/>
        
       
     

    </div>
 )

}

const Dashboard = () => {
    return ( <div>
        <Layout
        title ='Dashboard'
        content={ <Dash/>}
       />
              
    </div> );
}

 
export default Dashboard;

// export const getStaticProps = async()=>{
//     const res= await fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
//     const profiles= await res.json()
//     return{
//         props:{
//             profiles
//         }
//     };
// }