import Image from "next/image"
import { CardLink } from "./styled"

interface CardType {
  alt: string
  src: string
  href: string
}

const Card = ({
  alt,
  src,
  href
}: CardType) => {
  return(
    <CardLink href={href}>
      <Image alt={alt} src={src} width={175} height={175}/>
    </CardLink>
  )
}

export default Card