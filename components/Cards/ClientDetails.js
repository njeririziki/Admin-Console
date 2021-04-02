import React, {useEffect,useState}from 'react'
import {Card,Avatar,Typography,Tooltip} from 'antd'
import {EditOutlined,MoreHorizOutlined} from '@material-ui/icons'
import Issuesmodal from '@/components/Modal/IssuesForm'
import AddButton from '@/components/AddButton'

const {Meta}= Card
const ClientDetails = ({details,id}) => {
    const [visible, setVisible] = useState(false)
    return (
        <div >
         <Card 
         style={{  display:'flex', flexDirection:'column', justifyContent:'center',}}
         //cover={<img alt='client photo' src ={details.photo}/>}
         actions={[
            <Tooltip title="edit details">
                    <AddButton icon={ <EditOutlined/>} openModal={()=>setVisible(true)}/>,
            </Tooltip>,
              <Tooltip title="raise an issue">
                 <AddButton icon={ <MoreHorizOutlined/>}  openModal={()=>setVisible(true)}/> ,
              </Tooltip>
              
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
        <Issuesmodal visible={visible} onCancel={()=>setVisible(false)}/>
        </div>
    )
}

export default ClientDetails
