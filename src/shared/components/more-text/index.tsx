import Chevron from "@/shared/icons/chevron-icon"
import { Container, Hyperlink, Text } from "./styled"

interface MoreTextType {
  label: string
  href: string
  hyperlinkLabel: string
}

const MoreText = ({
  label,
  href,
  hyperlinkLabel
}: MoreTextType) => {
  return(
    <Container>
      <Text>{label}</Text>
      <Hyperlink href={href}>{hyperlinkLabel} <Chevron width={10} height={10}/></Hyperlink>
    </Container>
  )
}

export default MoreText