import React from 'react';
import { List, Card, Typography, Divider } from 'antd'
import Link from 'next/link'
import Avatar from '@material-ui/core/Avatar'

 
const PaymentsDueList = ({data,date,header,actions,pageSize}) => {
    return ( <div>
        <Card > 
         <List
        header={header}
        dataSource ={data}
       // rowKey={data[0].key}
        pagination={{pageSize:pageSize}}
        renderItem={item=> (
        <List.Item key={item.key}
        //actions={[ ]}
        >
            <List.Item.Meta 
           avatar={<Avatar src={item.avatar}/>}
            title={item.name}
            description= {<p>{item.email} <br/> {item.phone}</p>}
            />
           
         { item.avatar? <Link href='/client_id' as={`/client_${item.key}`}>
        <a>Manage</a>
        </Link>:'' } 
            </List.Item>)}
            
        /></Card>
       
    </div> );
}
 
export default PaymentsDueList;