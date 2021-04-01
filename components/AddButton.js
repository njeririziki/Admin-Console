import React from 'react';
import {Typography,Button} from 'antd'
import {Plus} from 'react-feather'
import {Plu} from '@material-ui/icons'

const AddButton = ({openModal,buttonName,tableTitle}) => {
    return ( 
        <div style={{  display:'flex',justifyContent:'space-between'}}>
         <Typography.Title level={5}>
             {tableTitle}
             </Typography.Title>   
        <Button
        style={{ alignSelf:'flex-end',backgroundColor:'#000000',color:'#ffffff' }}
        
        type='default'
        onClick={openModal}
       // icon={<Plus size={'1em'}/>}
       >
         {buttonName}
        </Button>
        </div>
       
     );
}
 
export default AddButton;