import React, {useState} from 'react';
import Link from 'next/link'
import { Menu, Button,Grid} from 'antd';
import { DollarSign, ChevronRight, Home,Tool,Clipboard,Settings, Users} from 'react-feather';


import styles from '@/styles/Layout.module.scss'
import { useRouter } from "next/router";

const ActiveLink = ({ children, href }) => {
  const router = useRouter();
  return (
    <Link href={href} >
      <a
      //* to be changed accordingly
        className ={styles[router.pathname === href? 'active'
        : 'in-active']}
      >
        {children}
      </a>
    </Link>
  );
};




const MenuComponent = ({setVisible}) => {
   const screen = Grid.useBreakpoint()
 //icon={item.icon}
    return (  
        
             <Menu
        className={styles.drawer} 
       theme= {screen.xs? 'light':'dark'}
       style={screen.xs? null:{backgroundColor:' #39796b',fontSize:'16px'}}
        mode='inline'
        defaultSelectedKeys={['1']}
        
       >
           <Menu.Item key={9} placement='flex-end'>{screen.xs?  
            <Button
            type='text'
            onClick={setVisible}>
                <ChevronRight/>
       </Button>: null}</Menu.Item>
          <Menu.Item key={1} icon={<Home size={16}/>}
          >
              <ActiveLink href={'/'} >
          Dashboard 
              </ActiveLink>
          </Menu.Item>
          <Menu.Item key={2} icon={<DollarSign size={16}/>} 
          className={styles.activeitem}>
          <ActiveLink href={'/billing'} > 
          Billing 
          </ActiveLink>
          </Menu.Item>
          <Menu.Item key={3} icon={<Tool size={16}/>}>
          <ActiveLink href={'/issues'}> 
          Issues 
          </ActiveLink>
           </Menu.Item>
           <Menu.Item key={4} icon={<Clipboard size={16}/>}>
           <ActiveLink href={'/onboarding'} >
           Onboarding 
            </ActiveLink>
         </Menu.Item>
          <Menu.Item key={5} 
           icon={<Users size={16}/>}> 
          <ActiveLink href={'/clients'} >
           Clients 
            </ActiveLink> </Menu.Item>
          <Menu.Item key={6} icon={<Settings size={16}/>}>
          <ActiveLink href={'/settings'} >
           Settings 
            </ActiveLink> 
            </Menu.Item>
        </Menu>
          
      
        
    );
}
 
export default MenuComponent;