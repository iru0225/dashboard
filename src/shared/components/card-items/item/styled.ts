import Link from 'next/link'
import styled from 'styled-components'

export const CardLink = styled(Link)`
  width: fit-content;
  padding: 16px;
  text-decoration: none;
  transition: transform .3s;
  background-color: #D9D9D9;
  border-radius: .75rem;

  &:hover {
    transform: scale(1.05);
  }
`