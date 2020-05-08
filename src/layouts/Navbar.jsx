import React from 'react'
import { graphql, Link } from 'gatsby'
import Headroom from 'react-headroom'
import logo from '../../static/logo/logo.png'
import styled from '@emotion/styled'
import { stack as Menu } from 'react-burger-menu'

const Wrapper = styled.div`
  width: 100%;
  background-color: #161b2e;
  position: fixed;
  z-index: 40;
  height: 60px;
`

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 10px 0;
  height: '100%';
  /* background-image: url('./assets/claude-monet-nympheas.jpg'); */
  margin: 0 4rem;

  @media (max-width: 1000px) {
    margin: 0 2rem;
  }
  @media (max-width: 700px) {
    margin: 0 1rem;
  }
  @media (min-width: 1200px) {
    width: 1170px;
    margin: 0 auto;
  }
`

const StyledLink = styled(Link)`
  font-weight: 700;
  width: 33.3%;
`

const Search = styled.input`
  padding: 2px 0px 2px !important;
  line-height: 1 !important;
  color: #ffffff;
  width: 33%;
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

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '30px',
    height: '25px',
    right: '5px',
    top: '18px',
  },
  bmBurgerBars: {
    background: '#fefefe',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '0',
  },
  bmMenu: {
    background: 'rgb(22, 27, 46)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: 'white',
    padding: '0.8em',
  },
  bmItem: {
    display: 'block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: '0',
    left: '0',
    width: '100vw',
  },
}

const NavLink = styled(Link)`
  color: #fefefe;
  padding: 0.8rem;
  &:visited {
    color: #fefefe;
  }
`

const Navbar = () => {
  return (
    // <Headroom calcHeightOnResize disableInlineStyles>
    <Wrapper>
      <Container>
        <StyledLink to="/">
          <img src={logo} alt="Impressionist Arts" />
        </StyledLink>
        <Search placeholder="Search..." />
        <Menu
          styles={styles}
          pageWrapId={'childWrapper'}
          outerContainerId={'gatsby-focus-wrapper'}
          right
        >
          <NavLink className="menu-item">Home</NavLink>
          <NavLink className="menu-item">The Painters</NavLink>
          <NavLink className="menu-item">Gallery</NavLink>
          <NavLink className="menu-item">Quiz</NavLink>
          <NavLink className="menu-item">More</NavLink>
        </Menu>
        {/* </Headroom> */}
      </Container>
    </Wrapper>
  )
}

export default Navbar
