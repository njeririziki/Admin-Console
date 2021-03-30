import React, {useState} from 'react';
import { Grid, Button,Drawer,Typography, Layout} from 'antd';
import { ChevronLeft} from 'react-feather';
import{ MenuOutlined } from '@material-ui/icons'
import styles from '../styles/Layout.module.scss'
import Menu from '@/components/drawer'

const { Header, Content, Sider } = Layout;


// This is the layout of all pages ....rendered only when  a user is authenticated
const Authenticated = (props) => {
    const screen = Grid.useBreakpoint()
    const [collapse,setCollapse] = useState(true );
    const [visible,setVisible] = useState(false );

  
    return ( 
    <Layout hasSider={true} className={styles.root}>
      {screen.xs? 
      <Drawer 
      className={styles.sider}
        placement="left"
        closable={false}
        onClose={()=>setVisible(true)}
        visible={visible}> 
         <Menu setVisible={()=>setVisible(false)}/>
      </Drawer> :  
      <Sider  className={styles.sider}
        style={collapse? {width:'80px',position:'fixed'}:{width:'200px',position:'fixed'}}
        trigger={null} collapsible collapsed={collapse} >
         <Menu/>
        </Sider>} 
        <Layout  style={screen.xs? null:(collapse? {marginLeft:'80px'}:{marginLeft:'200px'})}
        className={styles.layout2}
         >
            <Header className={styles.header}  >
            {screen.xs? 
            <Button
            type='text' 
            onClick={()=>setVisible(true)}>
                <MenuOutlined/>
           </Button>
           :<Button
                 type='text' 
                 onClick={()=>setCollapse(!collapse)}>
                    {collapse? <MenuOutlined/>: <ChevronLeft/>}
                </Button>
            }
                <Typography.Title  style={{paddingLeft:'1.5em'}} level={5}>
                {// implemented optionally
                props.title || ''}
                </Typography.Title>

            </Header>
            <Content className={styles.content}
                    // style={{backgroundColor:'#ffffff',padding: '3em 3em 3em 3em', display: 'flex',
                    // flexDirection: 'column',
                    // justifyContent: 'space-between'}}
            >
             {props.children}
            </Content>
        </Layout>

    </Layout> );
}

// This is displayed when a user is not authenticated
const Unauthenticated = ()=>{
 return(
      <div className={styles.unauth}>
          <Typography level={1}>
          404| This page does not exist
          </Typography>
    
  </div>
 )
}
 
// This is the component passed on to all pages
const LayoutComponent = (props) => {

    const [isLoggedIn, setIsLoggedIn] = React.useState(true)
    return ( 
        <div>
            {isLoggedIn? <Authenticated {...props}/>:<Unauthenticated/>}
        </div>
     );
}
 
export default LayoutComponent;