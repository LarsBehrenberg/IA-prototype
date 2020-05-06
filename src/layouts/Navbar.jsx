import React from 'react'
import { graphql, Link } from 'gatsby'
import Headroom from 'react-headroom'
import logo from '../../static/logo/logo.png'
import styled from '@emotion/styled'

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  width: 31%;
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  /* font-family: ${props => props.theme.fontFamily.body}; */
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 1rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
`

const Search = styled.input`
  padding: 2px 16px 2px !important;
  line-height: 1 !important;
  color: #ffffff;
  background-color: transparent;
  font-size: 23px !important;
  border: none;
  border-bottom: 1.3px solid #fff;
  text-align: center;
  outline: none;
  &::placeholder {
    color: #fff;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`

const NavBar = () => {
  return (
    <Headroom calcHeightOnResize disableInlineStyles>
      <StyledLink to="/">
        <img src={logo} alt="Impressionist Arts" />
      </StyledLink>
      <Search placeholder="Search..." />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/">The Painters</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/impressionism-quiz">Quiz</Link>
        <Link to="/">More</Link>
      </Nav>
    </Headroom>
  )
}

export default NavBar
