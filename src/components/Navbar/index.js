import { useState, useEffect } from "react"
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnLink } from "./NavElems"
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar/'
import { animateScroll as scroll } from "react-scroll"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  },[])

  return <>
    <Nav scrollNav={scrollNav}>
      <NavContainer>
        <NavLogo to='/' onClick={() => scroll.scrollToTop()}>LOGO</NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(prev => !prev)}/>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink to='about' smooth duration={500} spy exact="true" offset={-80}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='discover' smooth duration={500} spy exact="true" offset={-80}>Discover</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='services' smooth duration={500} spy exact="true" offset={-80}>Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to='signup' smooth duration={500} spy exact="true" offset={-80}>Get Started</NavLink>
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