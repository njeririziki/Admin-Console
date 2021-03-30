import axios from '@/utils/Api'

export const getRevenue = async()=>{
    try{
      const res = await axios.get('/payments', {
          totalAmount
      })
      //returning fetched data 
      console.log(res.data.total)
    } catch (error){
     console.log( `Encountered ${error} getting user`)
    }
}

export const getInvoiced = async()=>{
    try{
      const res = await axios.get('/invoices', {
          total_amount
      })
      console.log(res.data.total)
    } catch (error){
     console.log( `Encountered ${error} getting user`)
    }
}

export const getInvoicedAccounts = async()=>{
    try{
      const res = await axios.get('/invoices', {
          totalAccounts
      })
     return res.data.total_accounts
    } catch (error){
     console.log( `Encountered ${error} getting user`)
    }
}

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