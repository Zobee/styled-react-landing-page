import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink } from "./NavElems"
import { FaBars } from 'react-icons/fa'
const Navbar = () => {
  return <>
    <Nav>
      <NavContainer>
        <NavLogo to='/'>LOGO</NavLogo>
        <MobileIcon>
          <FaBars/>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to='about'>About</NavLink>
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
  </>
}

export default Navbar