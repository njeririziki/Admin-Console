import React,{useState} from 'react'
import { Grid,Table,Typography} from 'antd';


 

 const NestedTable =({columns,data,title}) => {
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
        title={()=> title}
        expandable={{   
         expandedRowRender:  screens.xs? (item=> 
          <Typography.Text key={item.key}> 
           {item.location? <p>Location:{item.location}</p>: null}
          Account : {item.client}
           {item.name? <p> Name: {item.name}</p>: null}
           {item.phone? <p> Phone: {item.phone}</p>: null}
           {item.email? <p> Email: {item.email}</p>: null}
           {item.number? <p> Invoice Number: {item.number}</p>: null}
           {item.date? <p>Date: {item.date}</p>: ''}
           {item.amount? <p>Amount:{item.amount}</p>: null}
           {item.status? <p>Status: {item.status}</p>: ''}
           {item.description? <p> Description: {item.description}</p>:''}
          </Typography.Text>): (item=> <p>{item.description}</p>)
        }}
        dataSource={data}
     
      />
    );
  }

  export default NestedTable;