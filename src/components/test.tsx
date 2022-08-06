import { Icon } from '@rsuite/icons';
import { Button,Navbar,Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import 'rsuite/styles/index.less'; 
import { BsFillCloudDrizzleFill } from "react-icons/bs";




export const Test=()=> {
    return( <Navbar className="flex w-3/4 justify-between">
        <Navbar.Brand  ></Navbar.Brand>
        <Nav className="flex w-3/4 justify-between">
          <Nav.Item className="flex" icon={<HomeIcon />}>Home</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Nav.Menu title="About">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Menu title="Contact">
              <Nav.Item>Via email</Nav.Item>
              <Nav.Item>Via telephone</Nav.Item>
            </Nav.Menu>
          </Nav.Menu>
        </Nav>
        <Nav pullRight >
          <Nav.Item className="flex" icon={<CogIcon />}>Settings</Nav.Item>
        </Nav>
        <Button className="border border-white">Hello World</Button>
        <BsFillCloudDrizzleFill className="h-[25px] w-[25px]"  />
      </Navbar>
       )
   

}

