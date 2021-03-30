import axios from '@/utils/Api'

export const logIn = async({email,password})=>{
   try{
     const res= await axios.post('/login',{
          email,
          password
     });
     console.log(res.data);
   
   } catch(error){
    console.log(`Encountered ${error} logging in`)
   }
}
// not yet implemented in the backend
/** would be used in the useUser hook to fetch user info
 * for authentication or to display userprofile info  */ 
export const getUser = async()=>{
    try{
      const res = await axios.get('/user')
      return res.data
      
    } catch (error){
     console.log( `Encountered ${error} getting user`)
    }
}
 // unimplemented in backend.... currently handled through session
export const logOut = async() =>{
   try{
      const res= await axios.get('/user/logout');
      console.log('logged out')
   } catch(error){
    console.log( `Encountered ${error} logging out`)
   }
}