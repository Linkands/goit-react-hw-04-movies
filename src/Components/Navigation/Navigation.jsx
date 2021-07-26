import React from 'react'
import { StyledNavLink, StyledNav } from './Navigation.styled'

function Navigation() {
  return (
    <StyledNav>
      <StyledNavLink exact to="/" className="link" activeClassName="activeLink">
        Home
      </StyledNavLink>
      <StyledNavLink
        exact
        to="/movies"
        className="link"
        activeClassName="activeLink"
      >
        Movies
      </StyledNavLink>
    </StyledNav>
  )
}

export default Navigation
