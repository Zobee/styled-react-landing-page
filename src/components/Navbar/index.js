import { useState } from "react"
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink } from "./NavElems"
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar/'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return <>
    <Nav>
      <NavContainer>
        <NavLogo to='/'>LOGO</NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(prev => !prev)}/>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to='about'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='discover'>Discover</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='services'>Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='signup'>Get Started</NavLink>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </NavContainer>
    </Nav>
    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
  </>
}

export default Navbar