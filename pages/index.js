import React from 'react';
import {Grid, Divider} from 'antd'
import Retention from '@/components/Cards/Retention'
import TotalCards from '@/components/Cards/totals'
import GridList from '@/components/Cards/Grid'
import Table from '@/components/tables/Expandable'
import Timeline from '@/components/Cards/scheduler'
import Accordion from '@/components/List/Accordion'
import Pie from '@/components/Cards/Pie'
import List from '@/components/List/List'
import CalenderCards from '@/components/Cards/Calender'
import styles from '@/styles/dashboard.module.scss'
 import {DollarSign,UserPlus,Users}  from 'react-feather'

 const dollar= <DollarSign size='20px'/>
 const userPlus= <UserPlus size='20px'/>
const users= <Users size='20px'/>


const events=[
   {id:'12/3/2021', issue:'Authentication', description:' authenticating employees', color:'red'},
   {id:'13/4/2021',issue: 'Invoicing', description:' generating invoices' , color:'red'},
   {id:'19/4/2021',issue:'Printing', description:' downloading reports',color:'brown'},
   {id:'21/4/2021',issue: 'Invoicing', description:' generating invoices' , color:'yellow'},
   {id:'23/4/2021',issue:'Printing', description:' downloading reports',color:'green'},
]
const totals=[
   {title:'Revenue', number: 134543,icon: dollar,color:'#00c853', percent:'50'},
   {title: 'Invoiced', number: 234225, icon: dollar, color:'#e91e63', percent:'30'},
   {title: 'New Clients', number:34,icon: userPlus,color:'#4dd0e1', percent:'12'}, 
   {title: 'Accounts ', number: 134,icon: users ,color:'#ff7043', percent:'8'}, 
]
const retention=[
  
   {title:'Total Accounts ', number: 134,color:'#00c853', percent:'50'},
   {title: ' New Accounts ', number: 94,  color:'#e91e63', percent:'38'},
   {title: 'Disabled Accounts', number:34,color:'#4dd0e1', percent:'12'}, 
  
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
      { id:'33', name:'Highest profile Accounts', email:'', phone:'25%'},
      {id:'39',name: ' Upgraded Accounts', email:'', phone:'30%'},
      { id:'3', name: 'Unsubscribed', email:'', phone:'2%'},
  ]

const Dashboard =({profiles})=>{
   const screens = Grid.useBreakpoint()

   return(
      <div>
          <GridList data={totals}/> <br/> 
     <div className={styles.root}>
        <div>
       
        <Retention  totals={retention}  retainershipPercent='50.67 %'/>
       <CalenderCards />
        </div>
      
       <Timeline title='Systemic Issues' events = {events}/>   
   </div>
   
      </div>)

}



export default Dashboard;

export const getStaticProps = async()=>{
   const res= await fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
   const profiles= await res.json()
   return{
       props:{
           profiles
       }
   };
}