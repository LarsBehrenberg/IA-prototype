import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'

const ResultWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%);
  background-color: white;
  margin-top: 0.2em;
  z-index: 20;
  border-radius: 0.28571429rem;
  box-shadow: 0 2px 4px 0 rgba(34, 36, 38, 0.12),
    0 2px 10px 0 rgba(34, 36, 38, 0.15);
  border: 1px solid #d4d4d5;

  max-width: 1500px;
  display: flex;
  flex-flow: row wrap;
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  height: 5em;
  border-bottom: 1px solid rgba(34, 36, 38, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  flex-basis: calc(99.9% * 1 / 2);
  width: calc(99.9% * 1 / 2);
  max-width: calc(99.9% * 1 / 2);

  &:first-child:nth-last-child(1) {
    width: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }

  &:hover {
    box-shadow: 0 5px 8px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.04);
    border-radius: 0.3em;
    background-color: #fff;
  }
`
const PostTitle = styled.h3`
  width: 50%;
  font-size: 1em;
  text-align: center;
  padding: 0 0 0 0.5em;
  color: #333;
  @media screen and (max-width: 800px) {
    font-size: 0.6em;
  }
`

const SearchResults = ({ searchResults }) => (
  <>
    {searchResults !== null ? (
      <ResultWrapper>
        {searchResults.map(({ node }) => {
          const { frontmatter } = node
          const { cover, path, title, id } = frontmatter
          return (
            <StyledLink to={path} key={`result-${id}`}>
              <PostTitle>{title}</PostTitle>
              <Img
                fixed={cover.childImageSharp.fixed}
                style={{
                  width: '80px',
                  height: '50px',
                  borderRadius: '0.4rem',
                }}
              />
            </StyledLink>
          )
        })}
      </ResultWrapper>
    ) : null}
    {searchResults !== null && searchResults.length == 0 ? (
      <ResultWrapper>
        <div style={{ textAlign: 'center' }}>
          <h5 style={{ marginBottom: '0.4em' }}>No results</h5>
          <h4 style={{ fontWeight: '400', margin: '.8rem 1rem' }}>
            Your search returned no results
          </h4>
        </div>
      </ResultWrapper>
    ) : null}
  </>
)

export default SearchResults
