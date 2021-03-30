import React from 'react';
import {Button} from 'antd'
import {Plus} from 'react-feather'
import {PlusOneOutlined} from '@material-ui/icons'

const AddButton = (props) => {
    return ( 
        <Button
        style={{ display:'flex', justifyContent:'space-around ', width: '200px',  }}
        type='dashed '
        onClick={props.openModal}
        icon={<Plus/>}>
         {props.buttonName}
        </Button>
     );
}
 
export default AddButton;