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

const DropdownWrapper = styled.div`
  &:focus {
    outline: none;
  }
`

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/backgrounds/claude-monet-nympheas.jpg/" }) {
        childImageSharp {
          fixed(height: 60, width: 800, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      markdownRemark(fileAbsolutePath: { regex: "/pages/menu-links.md/" }) {
        frontmatter {
          menuLinkList {
            label
            path
            dropdown {
              label
              path
            }
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
                  fixed(width: 80, height: 50, quality: 60) {
                    ...GatsbyImageSharpFixed_withWebp
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
  const { menuLinkList } = data.markdownRemark.frontmatter

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
        (tags && tags.toLowerCase().includes(query.toLowerCase()))
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
  let buttonCounter = 0
  return (
    <Wrapper id="nav-wrapper">
      <BackgroundImage>
        <Img
          fixed={data.file.childImageSharp.fixed}
          style={{
            height: '100%',
            width: '100%',
          }}
          className="nav-image"
        />
      </BackgroundImage>
      <Container>
        <StyledLink to="/">
          <img src={logo} alt="Impressionist Arts" />
        </StyledLink>
        <Search
          type="search"
          placeholder="Search..."
          onChange={handleInputChange}
          id="nav_search"
          aria-label="Search"
          name="navSearch"
        />
        <SearchResults searchResults={posts} />
        <Menu
          styles={styles}
          pageWrapId={'childWrapper'}
          outerContainerId={'gatsby-focus-wrapper'}
          right
          disableAutoFocus
        >
          {menuLinkList.map(item => {
            if (item.dropdown === null || item.dropdown.length === 0) {
              return (
                <NavLink className="menu-item" to={item.path} key={item.label}>
                  {item.label}
                </NavLink>
              )
            }
            buttonCounter += 1
            const currentButton = buttonCounter - 1
            return (
              <DropdownWrapper key={item.label}>
                <DropDownButton
                  className="dropdown-btn"
                  onClick={() => dropDownPressed(currentButton)}
                >
                  {item.label}
                  <span
                    className="caret"
                    style={{ marginTop: '9px', float: 'right' }}
                  />
                </DropDownButton>
                <DropdownContainer
                  className="dropdown-container"
                  style={{ display: 'none' }}
                >
                  {item.dropdown.map(dropdownItem => (
                    <NavLink to={dropdownItem.path} key={dropdownItem.label}>
                      {dropdownItem.label}
                    </NavLink>
                  ))}
                </DropdownContainer>
              </DropdownWrapper>
            )
          })}
        </Menu>
      </Container>
    </Wrapper>
  )
}

export default Navbar
