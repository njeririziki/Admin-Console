import React from 'react';
import { List, Card, Typography, Divider } from 'antd'

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
        <List.Item key={item.key}
        actions={[<a>Manage</a>,<a>Close</a>]}>
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