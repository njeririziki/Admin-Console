import axios from 'axios'
import jwtDecode from 'jwt-decode'
import session from '@/utils/session'
import router from 'next/router'

// This instance is the template for axios functions to be used with the api 

const instance= axios.create({
    baseURL:'http://api.console.hasibu.africa/api/',
    responseType:'json'
});

//These interceptors intercept the GET, POST, PUT, DELETE etc...to access the 
// the token and refresh it.

instance.interceptors.request.use(function (config) {
  let tokened;
  // getting the token and decode it
  try {
      jwtDecode(session.retrieve());
      tokened = true;
  } catch (error) {
      tokened = false;
  }
  // might not be necessary .... delete or uncomment later
  //if ( !tokened) {
  //  config.headers['Authorization'] = session.destroy();
  // } 
  if(tokened){
    config.headers['Authorization'] = session.retrieve()
  }  
   
  return config;
}, function (error) {

  return Promise.reject(error);
});

// This is to intercept the response from the server 
// 1. Check if the response has a ststus 401-- meaning the user is unauthorised
// idealy there should be a different response status 'token expired' sth like 403
// 2. Refresh the token by passing in the expired token
// 3. Set new token 
// 4. Return the original request 
instance.interceptors.response.use(function (response) {
  
  return response;

}, function async(error) {
  const originalRequest = error.config;
  if( error.response.status === 401 && !originalRequest._retry){
    originalRequest._retry = true;
    return instance.post('/refresh-token',
     {headers:{'Authorization': session.retrieve()}})
     .then(res=>{
      const {success,data} = res.data;
      if(!success){
        //if token is not refreshed destroy the old token and 
        // take the user back to the sigh in page
        session.destroy();
        router.push('/signIn');
      }else {
        session.create(data);
        axios.defaults.headers.common['Authorization']= session.retrieve();
      }
     return instance(originalRequest)
     }).catch( error=>{
      alert(`Error refreshing token ${error}`);
      router.push('/signIn') ;});
    
  }
  return Promise.reject(error);
});
export default instance;