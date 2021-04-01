import React, {useEffect,useState} from 'react';
import AddButton  from '@/components/AddButton'
import {Tag, Space, Divider, Popconfirm} from 'antd';
import AddClient from '@/components/Modal/AddBusiness'
import List from '@/components/List/List'
import Table from '@/components/tables/Expandable'
import realapi from '@/utils/Api'
import axios from 'axios'

const data=[
    { id:'33462',  name:'Teaji Ltd'},
    {id:'37312', name: ' Geray Ltd'},
    { id:'39212',  name: ' Cesay Ltd'},
    { id:'33902',  name: ' CLay Ltd'},
    { id:'49212',  name: ' Waky Ltd'},
    { id:'34902',  name: ' CPlar Ltd'},
    { id:'39412',  name: ' Yevwa Ltd'},
    { id:'33942',  name: ' Poela Ltd'},
]


const Clients = () => {
    const [visible, setVisible] = useState(false)
const [profile,setProfile]= React.useState()
    // fetching the client list .... query the db   
    useEffect(() => {
     let profile =[]
   async function getData (){
       const request= await axios.get( 'https://randomuser.me/api/',{
           params:{
               results:10,
               inc:'name ,email,gender,phone, picture,id,registered'
           }
       })
      
       const profiles = request.data.results;
        
       profiles.forEach(element => {
           profile.push({
              name: `${element.name.first} ${element.name.last}`,
              email: element.email,
              phone: element.phone,
              avatar: element.picture.medium,
              key:element.id.value,
              date: element.registered.date
           })
           
       });
     
      setProfile(profile)
       
       return request
   }
  getData();  
},[] )
const columns = [
    { title: 'Client', dataIndex: 'name', key: 'name',  },
    { title: 'Email ', dataIndex: 'email', key: 'email ', 
     responsive: ['sm'] },
    { title: ' Date ', dataIndex: 'date', key: 'date',  
    sortOrder: 'descend',
    responsive: ['md'] },
    { title: 'Phone', dataIndex: 'phone', key: 'phone', 
    defaultSortOrder:'descend',
    sorter: (a,b)=> a.amount - b.amount,
    responsive: ['sm']},
    {
        title: 'Subcription',
        key: 'subcription',
        dataIndex: 'subcription',
        render: (tag,color)=> {
              if (tag === 'Trial') {
                color = 'volcano';
              } 
              if(tag === 'Premium'){ 
                  color ='green'}
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            }
         
       , responsive: ['md'],
       filters: [
        {
          text: 'Trial',
          value: 'Trial',
        },
        {
          text: 'Premium',
          value: 'Premium',
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
      },
      {
        title: 'Action', key: 'action',
        render: (text, record) => (
        <Popconfirm title='This record will not be permanently deleted 'onConfirm={()=>console.log(deleted)}>
             <a>Manage</a>
        </Popconfirm>
           
        ), 
      },
    
  ];
    return ( 
        <div >
            
            <List 
         header= {<AddButton  tableTitle='Client List' buttonName='New Client' openModal={()=>setVisible(true)}/>}
            data={profile} />
            <Divider/>
            <Table title={<AddButton  tableTitle='Client List' buttonName='New Client' openModal={()=>setVisible(true)}/>}
            data={profile} columns={columns}/>
     
            <AddClient  visible={visible} onCancel={()=>setVisible(false)}/>
        </div>
     );
}

 
export default  Clients;
 
