import Link from "next/link"
import { Container, ContentWrapper, LinkWrapper } from "./styled"
import Image from "next/image"
import { useWindowSize } from "@/shared/hooks/use-window-size"

interface FeatureHeroType {
  description: string
  hyperlinks: {
    href: string
    label: string
  }[]
  imageSrc: string
}

const FeatureHero = ({
  description,
  hyperlinks,
  imageSrc
}: FeatureHeroType) => {
  const isMobile = useWindowSize().width < 600

  return(
    <Container>
      <ContentWrapper>
        <p>{description}</p>
        <span>Explore with me:</span>
        <LinkWrapper>
          {
            hyperlinks.map((elem, idx) => (
              <Link href={elem.href} key={idx}>{elem.label}</Link>
            ))
          }
        </LinkWrapper>
      </ContentWrapper>
      {
        !isMobile && <Image alt="image" src={imageSrc} width={200} height={200}/>
      }
    </Container>
  )
}

export default FeatureHero