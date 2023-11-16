import Link from "next/link";
import styled from "styled-components";

export const Container = styled.nav<{ open?: boolean }>`
  z-index: 10;
  width: 14rem;
  position: sticky;
  top: 0%;
  left: 0%;
  bottom: auto;
  height: 100vh;
  border-top-right-radius: .875rem;
  border-bottom-right-radius: .875rem;
  background-color: #171717;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 799px) {
    width: 80%;
    transition: left ease .6s;
    position: fixed;
    ${({ open }) => open ? 'left: 0%;' : 'left: -100%;'}
  }
`

export const HamburgerButton = styled.button<{ open?: boolean }>`
  width: 48px;
  height: 48px;
  background: inherit;
  padding: 7px;
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  border: none;
  gap: 10px;
  
  div {
    width: 100%;
    height: 3px;
    background: #bfbfbf;
  }

  ${({ open }) => open ? `
    div {
      &:first-child {
        transform: rotate(45deg) translate(10px, 8px);
      }

      &:last-child {
        transform: rotate(-45deg);
      }
    }
  ` : ''}
`

export const LogoWrapper = styled.div<{isMobile: boolean }>`
  width: inherit;
  padding: 14px;
  ${({ isMobile }) => isMobile ? 'display: flex; gap: 16px;' : ''}
`
export const MenuWrapper = styled.div`
  padding: 14px;
  ul {
    list-style: none;
  }
`

export const NavMenu = styled.li<{ active?: boolean }>`
  cursor: pointer;
  width: inherit;
  padding: 14px;
  border-radius: 4px;  

  a {
    color: #bfbfbf;
    text-decoration: none;
  }

  &:hover {
    background-color: #212121;
    a {
      color: white;
      width: 100%;
      display: block;
    }
  }

  ${({ active }) => active ? 'background-color: #303030;' : ''}
`

export const Mail = styled(Link)`
  height: 3rem;
  min-height: 3rem;
  border-top: 1px solid #dedede;
  color: #bfbfbf;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  text-decoration: none;
  transition: color .1s;
  display: flex;
`

export const MenuContainer = styled.div`
  height: 75vh;
  overflow: hidden;
  overflow-y: scroll;
`