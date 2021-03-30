import React from 'react'
import { Grid,Table} from 'antd';

 

 const NestedTable =({columns,data}) => {
    const screens = Grid.useBreakpoint()
    return (
      <Table
        style={{backgroundColor:''}}
        columns={columns}
        key={data.number}
        expandRowByClick={true}
        expandable={{
          expandedRowRender:  screens.xs? (item=> 
          <pre key={item.number}> {item.location? <p>Location:{item.location}</p>: null}<br/>
           Client ID : {item.client}<br/>
           {item.number? <p> Invoice Number:{item.number}</p>: null}
           Date: {item.date}
           {item.amount? <p>Amount:{item.amount}</p>: null}
           {item.description? <p> Description: {item.description}</p>:''}
           {item.status? <p>Status: {item.status}</p>: ''}
             </pre>): (item=> <p>{item.description}</p>)
        }}
        dataSource={data}
        
      />
    );
  }

  export default NestedTable;