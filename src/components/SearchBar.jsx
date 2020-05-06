/* eslint-disable react/forbid-prop-types */
import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import { graphql, useStaticQuery, Link } from 'gatsby'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  height: 300px;
  width: 100vw;
`

const SearchWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Search = styled.input`
  padding: 8px 16px 4px !important;
  line-height: 1 !important;
  color: #ffffff;
  background-color: transparent;
  font-size: 32px !important;
  border: none;
  border-bottom: 2px solid #fff;
  text-align: center;
  outline: none;
  &::placeholder {
    color: #fff;
  }
`

const Headline = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 26px;
  line-height: 33px;
  color: #fff;
  margin: 10px 0 40px;
  font-weight: 700;
`

const ResultWrapper = styled.div`
  top: 250px;
  position: absolute;
  width: 250px;
  background-color: white;
  margin-top: 0.2em;
  z-index: 20;
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
    0 2px 10px 0 rgba(34, 36, 38, 0.15);
  border: 1px solid #d4d4d5;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 0.7em;
  height: 5em;
  border-bottom: 1px solid rgba(34, 36, 38, 0.1);
`
const PostTitle = styled.h3`
  width: 50%;
  font-size: 1em;
  text-align: center;
  margin: 0 auto;
  color: #333;
`
const SearchBar = ({ onChange, searchResults }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "claude-monet-nympheas.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{ height: '100%', boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)' }}
      />
      <SearchWrapper>
        <Headline>Find your favorite impressionist</Headline>
        <Search placeholder="Search..." onChange={onChange} />
        {searchResults !== null ? (
          <ResultWrapper>
            {searchResults.length !== 0 ? (
              searchResults.map(({ node }) => {
                const { frontmatter } = node
                const { cover, path, title } = frontmatter
                return (
                  <StyledLink to={path}>
                    <PostTitle>{title}</PostTitle>
                    <Img
                      fluid={cover.childImageSharp.fluid}
                      style={{
                        width: '80px',
                        height: '50px',
                        margin: '0 0 0 auto',
                        borderRadius: '0.4rem',
                      }}
                    />
                  </StyledLink>
                )
              })
            ) : (
              <div style={{ textAlign: 'center' }}>
                <h5 style={{ marginBottom: '0.4em' }}>No results</h5>
                <h4 style={{ fontWeight: '400', marginTop: '0.4em' }}>
                  Your search returned no results
                </h4>
              </div>
            )}
          </ResultWrapper>
        ) : null}
      </SearchWrapper>
    </Wrapper>
  )
}

export default SearchBar

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired,
}
