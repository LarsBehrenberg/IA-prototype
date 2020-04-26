import React from 'react'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import {graphql, useStaticQuery} from 'gatsby'

const Wrapper = styled.div`
    height: 403px;
    width: 100vw;
`

const SearchWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Search = styled.input`
    padding: 8px 16px 4px!important;
    line-height: 1!important;
    color: #ffffff;
    background-color: transparent;
    font-size: 32px!important;
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



const SearchBar = () => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "claude-monet-nympheas.jpg" }) {
            childImageSharp {
                fluid (
                    maxWidth: 600
                    quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
            }
        }
    }
    `)
    return (
        <Wrapper>
            <Img fluid={data.file.childImageSharp.fluid} style={{height: "100%", boxShadow: "0 15px 25px rgba(0, 0, 0, 0.2)"}}/>
            <SearchWrapper>
                <Headline>Find your favorite impressionist</Headline>
                <Search placeholder="Search..."/>
            </SearchWrapper>
        </Wrapper>
    )
}

export default SearchBar