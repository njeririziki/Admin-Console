import React, {useEffect}from 'react'
import {Card,Avatar,Typography} from 'antd'
import {EditOutlined,MoreHorizOutlined} from '@material-ui/icons'


const {Meta}= Card
const ClientDetails = ({details}) => {
 
    return (
        <div style={{ width:'400px',height:'400px'}}>
         <Card 
          style={{  display:'flex',
            justifyContent:'center'}}
         //cover={<img alt='client photo' src ={details.photo}/>}
         actions={[
             <EditOutlined/>,
              <MoreHorizOutlined/>
         ]}>
         <Avatar style={{ width:'200px',height:'200px'}}
         src={details.photo}/>
         <Typography.Title level={4}>
         {details.name}
         </Typography.Title>
         <Typography.Text>
         {details.description}
         </Typography.Text>
          
        </Card>   
        </div>
    )
}

export default ClientDetails
