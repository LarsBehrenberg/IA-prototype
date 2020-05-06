import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Wrapper = styled.div`
  background-color: #f3f3f3;
  margin: 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0rem 0rem auto;
  @media (max-width: 1200px) {
    margin: 1rem 2rem 0rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 1rem 1rem 0rem 1rem;
    flex-direction: column;
  }
  @media (min-width: 1200px) {
    width: 1170px;
    margin: 2rem auto 1rem auto;
  }
`

const TextContainer = styled.div`
  max-width: 680px;
  margin: 100px 0;
  margin-right: 1rem;

  & h1 {
    font-size: 3rem;
  }
`

const ImageWrapper = styled(Link)`
  width: 500px;
  margin: 0 auto;
  border-radius: 1rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    box-shadow: 0 40px 45px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }

  & img,
  div {
    border-radius: 1rem;
  }
`

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "berthe-morisot-grain-field.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90, traceSVG: { color: "#2B2B2F" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <Container>
        <TextContainer>
          <h1>
            I don't like art. Not most of it. <br />
            But I have always loved{' '}
            <span style={{ color: '#e53132' }}>impressionism</span>. Always.
          </h1>
        </TextContainer>
        <ImageWrapper to="gallery">
          <Img
            fluid={data.file.childImageSharp.fluid}
            style={{
              height: '300px',
              boxShadow: '0 15px 25px rgba(0, 0, 0, 0.2)',
            }}
          />
        </ImageWrapper>
      </Container>
    </Wrapper>
  )
}

export default Hero
