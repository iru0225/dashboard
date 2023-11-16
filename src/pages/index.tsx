import CardItems from '@/shared/components/card-items';
import FeatureHero from '@/shared/components/feature-hero'
import MoreText from '@/shared/components/more-text'
import { useWindowSize } from '@/shared/hooks/use-window-size';

export default function Home() {
  const isMobile = useWindowSize().width < 800;

  const hyperlinks = [
    {
      label: 'Speeches',
      href: '/speeches'
    },
    {
      label: 'Interviews',
      href: '/interviews'
    },
    {
      label: 'Letters',
      href: '/letters'
    },
    {
      label: 'Profiles',
      href: '/profiles'
    }
  ]

  const cardList = [
    {
      alt: 'book1',
      src: '/book1.jpg',
      href: '/books/book1'
    },
    {
      alt: 'book2',
      src: '/book2.jpg',
      href: '/books/book2'
    },
    {
      alt: 'book3',
      src: '/book3.jpg',
      href: '/books/book3'
    },
    {
      alt: 'book4',
      src: '/book4.jpg',
      href: '/books/book4'
    },
    {
      alt: 'book5',
      src: '/book5.jpg',
      href: '/books/book5'
    },
    {
      alt: 'book6',
      src: '/book6.jpg',
      href: '/books/book6'
    },
    {
      alt: 'book7',
      src: '/book7.jpg',
      href: '/books/book7'
    },
    {
      alt: 'book8',
      src: '/book8.jpg',
      href: '/books/book8'
    },
    {
      alt: 'book9',
      src: '/book9.jpg',
      href: '/books/book9'
    },
    {
      alt: 'book10',
      src: '/book10.jpg',
      href: '/books/book10'
    },
  ]
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: isMobile ? '100%' : '86%',
      margin: '0 auto',
      padding: '16px',
      gap: '32px',
      height: '100vh',
      overflow: 'hidden',
      overflowY: 'scroll'
    }}>
      <FeatureHero
        description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero vel quas nobis ipsum pariatur possimus harum quod accusamus, animi, labore adipisci. Architecto delectus excepturi alias eligendi omnis quas ad voluptatum?'
        imageSrc='/assets1.png'
        hyperlinks={hyperlinks}
      />
      <MoreText
        label='Book Breakdown'
        href='/books'
        hyperlinkLabel='More'
      />
      <CardItems cardList={cardList}/>
    </div>
  )
}
