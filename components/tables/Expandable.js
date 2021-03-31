import React,{useState} from 'react'
import { Grid,Table} from 'antd';


 

 const NestedTable =({columns,data}) => {
    const screens = Grid.useBreakpoint()
    const [expandedRow, setExpandedRow] = useState()
    const onExpand=(expanded,record)=>{
      console.log('it rendered before')
      let keys=[]
      if(expanded){
        keys.push(record.key);
        setExpandedRow(keys);
        console.log('it rendered onExpand')
      }
      console.log('it rendered after')
    }
    return (
      <Table
         //style={{backgroundColor:''}}
        columns={columns}
        expandedRowKeys={expandedRow}
        onExpand={()=>onExpand}
        expandable={{   
         expandedRowRender:  screens.xs? (item=> 
          <pre key={item.key}> 
           {item.location? <p>Location:{item.location}</p>: null}<br/>
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