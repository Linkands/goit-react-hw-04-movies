import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
  &.link {
    text-decoration: none;
    color: black;
    margin: 10px;
    text-shadow: 1px 1px grey;
  }
  &.activeLink {
    color: blue;
    text-decoration: underline;
    font-size: 20px;
  }
`
export const StyledNav = styled.nav`
  padding: 10px;
  border-bottom: solid 1px black;
  max-width: 700px;
`
