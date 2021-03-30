import useSWR, {mutate} from 'swr'
import {getUser} from '@/http/UserApi'

const useUser = () => {

    const {data,error} =useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`,getUser, {revalidateOnMount})
    const revalidate = mutate(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`)
   
    return {
      loading:!data &&!error,
      loggedIn:!error&& data,
      user:data,
      error,
      revalidate
    };
}
 
export default useUser;