import Link from 'next/link'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 8px;
  font-size: 12px;
`

export const Text = styled.span`
  color: white;
  font-weight: 700;
`

export const Hyperlink = styled(Link)`
  text-decoration: none;
  color: #8c8c8c;
  font-weight: 500;
  position: relative;

  svg {
    position: absolute;
    top: 2px;
    left: 120%;
  }
`