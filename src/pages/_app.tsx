import Navigation from '@/shared/components/navigation'
import { useWindowSize } from '@/shared/hooks/use-window-size'
import { mockMenu, moreMenu } from '@/shared/mock/navigation';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const isMobile = useWindowSize().width < 800;
  return <div style={{
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: '16px'
  }}>
    <Navigation
      menuList={mockMenu}
      moreMenuList={moreMenu}
    />
    <Component {...pageProps} />
  </div>
}
