import React from 'react'
import { Grid,Table} from 'antd';

 

 const NestedTable =(props) => {
    const screens = Grid.useBreakpoint()
    return (
      <Table
        style={{backgroundColor:''}}
        columns={props.columns}
        
       
        expandRowByClick={true}
        expandable={  screens.xs? {
          expandedRowRender: item=>
          (<pre key={item.number}> {item.location? <p>Location:{item.location}</p>: null}<br/>
           Client ID : {item.client}<br/>
           {item.number? <p> Invoice Number:{item.number}</p>: null}
           Date: {item.date}
           {item.amount? <p>Amount:{item.amount}</p>: null}
           {item.description? <p> Description: {item.description}</p>:''}
           {item.status? <p>Status: {item.status}</p>: ''}
             </pre>)}:{
                    expandedRowRender: item=> <p>{item.description}</p>
                }
        }
        dataSource={props.data}
        
      />
    );
  }

  export default NestedTable;