import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

const ImageWrapper = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: inline-block;
    width: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

const BackgroundImage = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/pages/contact-us.md/" }) {
        html
        frontmatter {
          text
          backgroundImage {
            childImageSharp {
              fluid(
                maxWidth: 750
                quality: 90
                traceSVG: { color: "#2B2B2F" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)
  return (
    <ImageWrapper>
      <Img
        fluid={
          data.markdownRemark.frontmatter.backgroundImage.childImageSharp.fluid
        }
        style={{ objectFit: 'cover', height: '100%' }}
      />
    </ImageWrapper>
  )
}

export default BackgroundImage
