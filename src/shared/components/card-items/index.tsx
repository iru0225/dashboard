import Card from "./item"
import { Container } from "./styled"

interface CardItemsType {
  cardList: {
    href: string
    src: string
    alt: string
  }[]
}

const CardItems = ({
  cardList
}: CardItemsType) => {
  return(
    <Container>
      {
        cardList.map((elem, idx) => (
          <Card
            key={idx}
            {...elem}
          />
        ))
      }
    </Container>
  )
}

export default CardItems