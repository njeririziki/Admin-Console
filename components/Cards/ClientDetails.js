import React, {useEffect}from 'react'
import {Card,Avatar} from 'antd'
import {EditOutlined,MoreHorizOutlined} from '@material-ui/icons'


const {Meta}= Card
const ClientDetails = ({details}) => {
 
    return (
        <div style={{ width:'400px',height:'400px'}}>
         <Card 
         actions={[
             <EditOutlined/>,
              <MoreHorizOutlined/>
         ]}>
         <Meta
         avatar={<Avatar src={details.avatar}/>}
         title={details.name}
         description={details.description}
         />
          
        </Card>   
        </div>
    )
}

export default ClientDetails
