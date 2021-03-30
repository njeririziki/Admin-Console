import axios from '@/utils/Api'

export const getPaidAccounts = async()=>{
    try{
      const res = await axios.get('/payments', {
          total_paid_accounts
      })
      console.log(res.data.total)
    } catch (error){
     console.log( `Encountered ${error} getting user`)
    }
}