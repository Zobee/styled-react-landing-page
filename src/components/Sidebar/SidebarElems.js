import styled, { keyframes } from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`
export const CloseIcon = styled(FaTimes)`
  color: #FFF;
`
export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows repeat(6, 60px);
  }
`

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-0.2rem);
  }
  50% {
    transform: translateY(-0.5rem);
  }
  75% {
    transform: translateY(-0.2rem);
  }
  100% {
    transform: translateY(0);
  }
`

export const SidebarLink = styled(ScrollLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #01BF71;
    animation: ${bounce} 0.5s ease-in-out;
    transition: 0.5s ease-in-out
  }
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const SidebarRoute = styled(RouterLink)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outilne: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`