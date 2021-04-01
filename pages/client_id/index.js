import React , {useEffect} from 'react'
import ClientDetails from '@/components/Cards/ClientDetails'
import Table from '@/components/tables/Expandable'
import Ribbon  from '@/components/Ribbon'
import List from '@/components/List/List'
import axios from 'axios'

// const details={
//     name:'Bazuu Wdadu',
//     description:'LPG distributor'
// }
const columns = [
    { title: 'Street', dataIndex: 'street', key: 'street',  },
    { title: 'city ', dataIndex: 'city', key: 'city ', 
     responsive: ['sm'] },
    { title: ' state ', dataIndex: 'state', key: 'state',  
    sortOrder: 'descend',
    responsive: ['md'] },
    { title: 'postcode', dataIndex: 'postcode', key: 'postcode', 
    defaultSortOrder:'descend',
    sorter: (a,b)=> a.amount - b.amount,
    responsive: ['sm']},
]

const Client = ({}) => {
    const [profile,setProfile]= React.useState({
        avatar:'',
        name:'',
        description:'',
        photo:''
    })
    const [location,setLocation]= React.useState()

    useEffect(() => {
      
        let location =[]
        async function getData (){
            const request= await axios.get( 'https://randomuser.me/api/',{
                params:{
                    results:10,
                    inc:'name ,email,gender,phone, picture,cell,id,registered,login,location'
                }
            })
           
            const profiles = request.data.results[0];
             const details= {
                   name: `${profiles.name.first} ${profiles.name.last}`,
                   description: profiles.email,
                   phone: profiles.phone,
                   avatar: profiles.picture.medium,
                   photo:profiles.picture.large,
                   date: profiles.registered.date
                }
            const locations= request.data.results;
            locations.forEach( element => {
                location.push({
                   key: element.login.uuid,
                   street: element.location.street,
                   city: element.location.city,
                   state: element.location.state,
                   postcode: element.location.postcode,
                   
     
                })
                
            }

            )

            setLocation(location)
           setProfile(details)
            // console.log(details)
            // console.log(location)
            return request
        }
     
        getData();
    }, [])
    return (
        <div style={{display:'flex', flexDirection:'row',justifyContent:'space-around'}}>
           <ClientDetails details ={profile}/>
           <Table title={<Ribbon  tableTitle='Locations' buttonName='New location' openModal={()=>setVisible(true)}/>}
            data={location} columns={columns}/>
         
        </div>
    )
}



export default Client
