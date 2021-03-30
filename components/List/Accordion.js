import React from 'react';
import { Collapse ,Card} from 'antd';

const { Panel } = Collapse;
const data={
  id: 1,
  title:'Issues Raised',
  body:' Authentication '

}

const Accordion = (props) => {
    return ( 
       
        <Card title= {props.title} >
        <Collapse 
         bordered={false}
         accordion
           >
             {props.events.map(data=>( 
             <Panel header={data.issue} key={data.id}>
                 <p>{data.description}</p>
               </Panel>))}
      </Collapse>
          </Card> 
              );
}
 
export default Accordion;