import '@/styles/globals.scss'
import 'antd/dist/antd.css';
import Layout from '@/components/Layout'
//import router from 'next/router'

function MyApp({ Component, pageProps,router }) {

  // making sure that the Layout is not passed into the sign in page
  if(router.pathname === '/signIn'){
    return  <Component {...pageProps} />
  }
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout> 
  )
}

export default MyApp
