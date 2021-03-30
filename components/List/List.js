import React from 'react';
import { List, Card, Typography, Divider } from 'antd'

 import Avatar from '@material-ui/core/Avatar'

 
const PaymentsDueList = (props) => {
    return ( <div>
        <Card > 
            <List
        header={props.header}
        dataSource ={props.data}
       // pagination={{pageSize:props.pageSize}}
        renderItem={item=> (
        <List.Item key={item.id}>
            <List.Item.Meta 
           avatar={<Avatar src={props.avatar}/>}
            title={item.name}
            description= {`${item.email}  ${item.phone}`}
            />
           { <p>{props.date}</p>}
            </List.Item>)}
            
        /></Card>
       
    </div> );
}
 
export default PaymentsDueList;