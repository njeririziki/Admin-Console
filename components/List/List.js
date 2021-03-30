import React from 'react';
import { List, Card, Typography, Divider } from 'antd'

 import Avatar from '@material-ui/core/Avatar'

 
const PaymentsDueList = ({data,date,header}) => {
    return ( <div>
        <Card > 
            <List
        header={header}
        dataSource ={data}
       // pagination={{pageSize:props.pageSize}}
        renderItem={item=> (
        <List.Item key={item.id}>
            <List.Item.Meta 
           avatar={<Avatar src={item.avatar}/>}
            title={item.name}
            description= {`${item.email}  ${item.phone}`}
            />
           { date? <p>{date}</p>:''}
            </List.Item>)}
            
        /></Card>
       
    </div> );
}
 
export default PaymentsDueList;