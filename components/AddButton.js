import React from 'react';
import {Typography,Button} from 'antd'
import {Plus} from 'react-feather'


const AddButton = ({openModal,buttonName}) => {
    return ( 
          
        <Button
        style={{ alignSelf:'flex-end',backgroundColor:'#000000',color:'#ffffff' }}
        
        type='dashed'
        onClick={openModal}
        icon={<Plus size={'1em'}/>}
       >
         {buttonName}
        </Button>
       
       
     );
}
 
export default AddButton;