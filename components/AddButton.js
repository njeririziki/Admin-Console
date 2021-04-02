import React from 'react';
import {Typography,Button} from 'antd'
import {Plus} from 'react-feather'


const AddButton = ({openModal,buttonName,icon}) => {
    return ( 
          
        <Button
        //style={{ width}}
        size ='large'
        type='text'
        onClick={openModal}
        icon={icon}
       >
         {buttonName}
        </Button>
       
       
     );
}
 
export default AddButton;