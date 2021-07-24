import {
  SidebarContainer, 
  Icon, 
  CloseIcon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink,
  SideBtnWrap,
  SidebarRoute} from './SidebarElems'
const Sidebar = ({isOpen, setIsOpen}) => {
  return <SidebarContainer isOpen={isOpen}>
    <Icon>
      <CloseIcon onClick={() => setIsOpen(prev => !prev)}/>
    </Icon>
    <SidebarWrapper>
      <SidebarMenu>
        <SidebarLink to='about'>About</SidebarLink>
        <SidebarLink to='services'>Services</SidebarLink>
        <SidebarLink to='signup'>Get Started</SidebarLink>
      </SidebarMenu>
    </SidebarWrapper>
    <SideBtnWrap>
      <SidebarRoute to='/signin'>Sign In</SidebarRoute>
    </SideBtnWrap>
  </SidebarContainer>
}

export default Sidebar;