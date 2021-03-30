import React,{useEffect,useState} from 'react';
import {LogIn,Unlock} from 'react-feather'
import {useRouter} from 'next/router'
import {logIn} from '@/http/UserApi'
import axios from '@/utils/Api'
import {mutate} from 'swr'
import sessions from '@/utils/session'
import {Row, Grid, Form, Space, Input, Button, message, Card, Typography} from 'antd';
import styles from '../styles/signInPage.module.scss'
import {LockOpenOutlined, PermIdentityOutlined, VisibilityOutlined, VisibilityOffOutlined, ContactSupportOutlined} from '@material-ui/icons';

const {Item: FormItem} = Form;
const SignIn = () => {
    const [form] = Form.useForm();
    const initialValues = {};
    const screens = Grid.useBreakpoint();
    const [disable, setDisable] = React.useState(true);
    const router = useRouter()
  
    const [loading,setLoading]= useState(false)

    // useEffect(() => {
    //  if(loading){
    //      setLoad(true)
    //  }
    //  if(loggedIn){
    //      router.push('/')
    //  }
    // }, [loggedIn,loading])
    const onFinish = async(values)=>{
        setLoading(true)
        try{
         const res= await axios.post('/login',values);
         console.log(res)
          const {success, data} = await res.data;
            
         if(success){
             message.success('Successful login')
             sessions.create(data);
             router.push('/')
         } else{
            message.error('You entered the wrong username or password. Please try again');
         }
        }catch(error){
           alert(` Encountering ${error}`);

        };
        setLoading(false)
            
    }

    const onFinishFailed=(errorInfo)=>{
    alert(`Failed to submit form ${errorInfo}`)
    }

    return (
             <Space size="large" direction="horizontal" className={styles[screens.xs ?'':'root']}>
            < Card className={styles[screens.xs ? 'mobile-form-wrapper' : 'desktop-form-wrapper']}>

                <Form
                    form={form}
                    name="basic"
                    layout="vertical"
                    onFinish={onFinish}
                    {...{initialValues}}
                     onFinishFailed={onFinishFailed}
                    requiredMark={false}
                    className={styles[screens.xs ? 'mobile-form' : 'desktop-form']}>
                    <FormItem style={{textAlign:'center'}}>
                     <Unlock/>
                    </FormItem>
                    <FormItem
                        name="username"
                        label="Username"
                        rules={[{required: true, message: 'Username is required'}]}>
                        <Input size="large" placeholder="Username" 
                        prefix={<PermIdentityOutlined/> }
                        />
                    </FormItem>

                    <FormItem
                        name="password"
                        label="Password"
                        rules={[{required: true, message: 'Password is required'}]}>

                        <Input.Password 
                        placeholder="Password" 
                        size="large" 
                        onChange={()=>setDisable(false)}
                           iconRender={(visible) => (visible ? <VisibilityOutlined /> : <VisibilityOffOutlined />)} 
                           />
                    </FormItem>
                    <FormItem
                        // className={styles[screens.xs ? 'mobile-button' : 'desktop-button']}
                    >
                        <Button
                            size="large"
                            type= 'primary'
                            disabled={ disable}
                            style={disable
                                ? { width:'max-content',}
                                : { width:'max-content',
                                    backgroundColor: '#000000',
                                    color: '#ffffff',
                                    boxShadow: 'none'}}
                            loading={loading}
                            htmlType="submit"
                           
                           >
                            Sign in 
                        </Button>
                    </FormItem>
                    <FormItem>
                        <Typography.Text type='secondary'> <b>Forgot password? </b><br/>
                           <ContactSupportOutlined/> 
                           
                             Please contact your system administrator</Typography.Text>
                    </FormItem>

            
                </Form>
            </Card>




    </Space>
      
      );
}
 
export default SignIn;