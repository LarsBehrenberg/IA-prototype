import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { SearchResults } from 'layouts'
import logo from '../../static/logo/logo.png'
import styled from '@emotion/styled'
import { stack as Menu } from 'react-burger-menu'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  width: 100%;
  background-color: #161b2e;
  position: fixed;
  z-index: 30;
  height: 60px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
`

const BackgroundImage = styled.div`
  height: 60px;
  width: 100%;
  position: fixed;
`

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 10px 0;
  height: '100%';
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
  padding: 8px 0px 2px !important;
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
  @media screen and (max-width: 730px) {
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
  padding: 0;
  &:visited {
    color: #fefefe;
  }
  &:after {
    content: '';
    display: block;
    margin: 1rem 0;
    border-bottom: 1px solid #fefefe80;
  }
  &:hover {
    color: #e53132;
  }
  &:focus {
    outline: none;
  }
`
const DropDownButton = styled.button`
  color: #fefefe;
  padding: 0;
  border: none;
  width: 100%;
  font-size: 1em;
  text-align: left;
  background: none;
  cursor: pointer;
  &:visited {
    color: #fefefe;
  }
  &:after {
    content: '';
    display: block;
    margin: 1rem 0;
    border-bottom: 1px solid #fefefe90;
  }

  &:hover {
    color: #e53132;
  }
  &:focus {
    outline: none;
  }
  &.active {
    color: #e53132;
  }
`

const DropdownContainer = styled.div`
  display: none;
  padding-left: 20px;
  &:last-child {
  }
  & a {
    font-size: 0.9em;
    &:after {
      content: '';
      display: block;
      margin: 0.5rem 0;
      border-bottom: 1px solid #fefefe80;
    }
  }
  & a:last-child {
    &:after {
      content: '';
      display: block;
      margin: 0.5rem 0 0.8rem;
      border-bottom: none;
    }
  }
`

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "claude-monet-nympheas.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 500, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              tags
              cover {
                childImageSharp {
                  fixed(
                    width: 80
                    height: 50
                    quality: 80
                    traceSVG: { color: "#2B2B2F" }
                  ) {
                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  // Store posts
  const { edges } = data.allMarkdownRemark

  // Declare emptyState
  const emptyQuery = ''
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  // fired when user searches through posts
  const handleInputChange = event => {
    const query = event.target.value || ''
    const posts = edges || []

    // return all filtered posts
    const filteredData = posts.filter(post => {
      // destructure data from post frontmatter
      const { title, tags } = post.node.frontmatter
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join('') // convert tags from an array to string
            .toLowerCase()
            .includes(query.toLowerCase()))
      )
    })
    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  // if we have a search query then return filtered data instead of all posts; else return allPosts
  const posts = hasSearchResults ? filteredData : null

  const dropDownPressed = button => {
    const dropdown = document.getElementsByClassName('dropdown-btn')

    dropdown[button].classList.toggle('active')

    const dropdownContent = dropdown[button].nextElementSibling

    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none'
    } else {
      dropdownContent.style.display = 'block'
    }
  }

  return (
    <Wrapper id="nav-wrapper">
      <BackgroundImage>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{
            height: '100%',
          }}
          className="nav-image"
        />
      </BackgroundImage>
      <Container>
        <StyledLink to="/">
          <img src={logo} alt="Impressionist Arts" />
        </StyledLink>
        <Search placeholder="Search..." onChange={handleInputChange} />
        <SearchResults searchResults={posts} />
        <Menu
          styles={styles}
          pageWrapId={'childWrapper'}
          outerContainerId={'gatsby-focus-wrapper'}
          right
          disableAutoFocus
        >
          <NavLink className="menu-item" to="/">
            Home
          </NavLink>
          <DropDownButton
            className="dropdown-btn"
            onClick={() => dropDownPressed(0)}
          >
            The Painters
            <span
              className="caret"
              style={{ marginTop: '9px', float: 'right' }}
            />
          </DropDownButton>
          <DropdownContainer
            className="dropdown-container"
            style={{ display: 'none' }}
          >
            <NavLink to="#">Paul Cezanne</NavLink>
            <NavLink to="#">Edgar Degas</NavLink>
            <NavLink to="#">Edouard Manet</NavLink>
            <NavLink to="#">Claude Monet</NavLink>
          </DropdownContainer>
          <NavLink className="menu-item" to="/gallery">
            Gallery
          </NavLink>
          <NavLink className="menu-item" to="/impressionism-quiz">
            Quiz
          </NavLink>
          <DropDownButton
            className="dropdown-btn"
            onClick={() => dropDownPressed(1)}
          >
            More
            <span
              className="caret"
              style={{ marginTop: '9px', float: 'right' }}
            />
          </DropDownButton>
          <DropdownContainer
            className="dropdown-container"
            style={{ display: 'none' }}
          >
            <NavLink to="/about-us">About us</NavLink>
          </DropdownContainer>
        </Menu>
      </Container>
    </Wrapper>
  )
}

export default Navbar
