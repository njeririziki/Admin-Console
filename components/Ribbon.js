import React from 'react';
import {Typography,Button} from 'antd'
import {Plus} from 'react-feather'


const Ribbon = ({openModal,buttonName,tableTitle}) => {
    return ( 
        <div style={{  display:'flex',justifyContent:'space-between',paddingLeft:' 2em '}}>
         <Typography.Title level={5}>
             {tableTitle}
             </Typography.Title>   
        <Button
        style={{ alignSelf:'flex-end',backgroundColor:'#88c399',color:'#ffffff' }}
        
        type='default'
        onClick={openModal}
       // icon={<Plus size={'1em'}/>}
       >
         {buttonName}
        </Button>
        </div>
       
     );
}
 
export default Ribbon;