import { useState } from 'react'
import LogoIcon from "@/shared/icons/logo-icon"
import { Container, HamburgerButton, LogoWrapper, Mail, MenuContainer, MenuWrapper, NavMenu } from "./styled"
import Link from "next/link"
import { useWindowSize } from "@/shared/hooks/use-window-size"
import { useRouter } from 'next/router'

interface NavigationType {
  menuList: {
    label: string
    href: string
  }[]
  moreMenuList: {
    label: string
    href: string
  }[]
}

const Navigation = ({
  menuList,
  moreMenuList
}: NavigationType) => {
  const isMobile = useWindowSize().width < 800;
  const router = useRouter()
  const {pathname} = router
  const [open, setOpen] = useState(false)

  console.log(pathname)

  return(
    <>
    {
      isMobile && <div style={{
        width: '100%',
        height: '60px',
        borderBottom: '1px solid #262626',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '8px'
      }}>
        <HamburgerButton
          onClick={() => setOpen(true)}
        >
          <div/>
          <div/>
        </HamburgerButton>
        <LogoIcon fill="#ffffff"/>
        <div></div>
      </div>
    }
    <Container open={open}>
      <div>
      <LogoWrapper isMobile={isMobile}>
        <LogoIcon fill='#ffffff'/>
        {
          isMobile && <HamburgerButton
            open={open}
            onClick={() => setOpen(false)}
          >
            <div/>
            <div/>
          </HamburgerButton>
        }
      </LogoWrapper>
      <MenuContainer>
      <MenuWrapper>
        <ul>
          {
            menuList?.map((item) => (
              <NavMenu key={item.href} active={item.href === pathname}>
                <Link href={item.href}>{item.label}</Link>
              </NavMenu>
            ))
          }
        </ul>
      </MenuWrapper>
      {
        moreMenuList?.length > 0 && (
          <>
            <div style={{
              fontSize: '12px',
              color: '#737373',
              paddingLeft: '30px',
              paddingTop: '20px'
            }}>
              More
            </div>
            <MenuWrapper>
              <ul>
              {
                  moreMenuList.map((item) => (
                    <NavMenu key={item.href} active={item.href === pathname}>
                      <Link href={item.href}>{item.label}</Link>
                    </NavMenu>
                  ))
                }
              </ul>
            </MenuWrapper>
          </>
        )
      }
      </MenuContainer>
      </div>
      <Mail href='/mail'>Try My News Letter</Mail>
    </Container>
    </>
  )
}

export default Navigation