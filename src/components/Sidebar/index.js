import {SidebarContainer, Icon, CloseIcon} from './SidebarElems'
const Sidebar = ({isOpen, setIsOpen}) => {
  return <SidebarContainer isOpen={isOpen}>
    <Icon>
      <CloseIcon onClick={() => setIsOpen(prev => !prev)}/>
    </Icon>
  </SidebarContainer>
}

export default Sidebar;