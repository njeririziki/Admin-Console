import React, {useEffect} from 'react';
import Layout from '@/components/Layout'
import List from '@/components/List/List'
import realapi from '@/utils/Api'
import axios from 'axios'

const data=[
    { id:'33462',  name:'Teaji Ltd'},
    {id:'37312', name: ' Geray Ltd'},
    { id:'39212',  name: ' Cesay Ltd'},
    { id:'33902',  name: ' CLay Ltd'},
    { id:'49212',  name: ' Waky Ltd'},
    { id:'34902',  name: ' CPlar Ltd'},
    { id:'39412',  name: ' Yevwa Ltd'},
    { id:'33942',  name: ' Poela Ltd'},
]


const Clients = () => {
   
const [profile,setProfile]= React.useState()
    // fetching the client list .... query the db   
    useEffect(() => {
     let profile =[]
   async function getData (){
       const request= await axios.get( 'https://randomuser.me/api/',{
           params:{
               results:10,
               inc:'name ,email,gender,phone, picture'
           }
       })
      
       const profiles = request.data.results;
        
       profiles.forEach(element => {
           profile.push({
              name: `${element.name.first} ${element.name.last}`,
              email: element.email,
              phone: element.phone,
              avatar: element.picture.medium,
           })
           
       });
     
      setProfile(profile)
       
       return request
   }
  getData();  
},[] )
    
    return ( 
        <div >
            <List header='Clients' data={profile} />
        </div>
     );
}

 
export default  Clients;
 
