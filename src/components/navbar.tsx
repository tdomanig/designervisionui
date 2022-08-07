import { Icon } from '@rsuite/icons';
import { Navbar,Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import 'rsuite/styles/index.less'; 
import { BiCookie } from "react-icons/bi";

export const Menu=()=> {
  
    return( 
      <div className='h-[45px]'>
        <Navbar className="flex w-screen justify-between h-[45px] bg-gray-300">
        <Nav className="flex w-screen  ">
          <Nav.Item className="navbarItem " >
          <HomeIcon className='my-auto' />
            Home</Nav.Item>
          <Nav.Item className="navbarItem">News</Nav.Item>
          <Nav.Item className="navbarItem ">Products</Nav.Item>
          <Nav.Item className="navbarItem">
          <CogIcon className='my-auto' />
            Settings</Nav.Item>
          <Icon as={BiCookie} fill="#e2800f" spin className="h-[25px] w-[25px] my-auto  mx-5"  />
         </Nav>
        </Navbar></div> )}
    
   



