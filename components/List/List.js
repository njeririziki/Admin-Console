import React from 'react';
import { List, Card, Typography, Divider } from 'antd'
import Link from 'next/link'
import Avatar from '@material-ui/core/Avatar'

 
const PaymentsDueList = ({data,date,header,actions}) => {
    return ( <div>
        <Card > 
            <List
        header={header}
        dataSource ={data}
       // rowKey={}
       // pagination={{pageSize:props.pageSize}}
        renderItem={item=> (
        <List.Item key={item.id}
        actions={[<Link href='/client_id' as={`/client_${item.id}`}>
        <a>Manage</a>
        </Link>   ]}>
            <List.Item.Meta 
           avatar={<Avatar src={item.avatar}/>}
            title={item.name}
            description= {<p>{item.email} <br/> {item.phone}</p>}
            />
           { date? <p>{date}</p>:''}
            </List.Item>)}
            
        /></Card>
       
    </div> );
}
 
export default PaymentsDueList;