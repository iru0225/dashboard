import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: fit-content;
  gap: 20%;

  @media (max-width: 799px) {
    width: 100%;
    margin: 0;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  color: white;
`

export const LinkWrapper = styled.div`
  display: flex;
  gap: 16px;

  a {
    color: #5acc61;
  }
`