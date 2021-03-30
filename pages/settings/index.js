import React from 'react';
import Pie from '@/components/Cards/Pie'
import Layout from '@/components/Layout'

const data=[
    {
       // id:'Paid',
        label: 'Paid ',
        value: 30,
        color: '#2e7d32'
    },
    {
       // id:'Invoiced',
        label: ' Invoiced',
        value: 60,
        color: '#fdd835'
    },
    {
       // id:'Lost',
        label: 'Lost ',
        value: 10,
        color: '#c62828'
    }
]

const Settings = () => {
    return ( 
    <div>
      <Pie data={data}/>
      
        
    </div> );
}
 
export default Settings;