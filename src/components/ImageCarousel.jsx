import React from 'react'
import Carousel, { Dots } from '@brainhubeu/react-carousel'
import '../styles/imagecarousel.css'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

const StyledLink = styled(Link)`
  width: 100%;
  height: 450px;
`

const OverlayBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  z-index: 10;
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.7) 80%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: -10;
  }
`

const Info = styled.div`
  color: #f0f0f0;
  z-index: 15;

  position: relative;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 2.6rem;
    max-width: 500px;

    @media (max-width: 500px) {
      max-width: 350px;
    }
    @media (max-width: 350px) {
      max-width: 300px;
    }
  }

  @media (max-width: 1200px) {
    margin: 0 2rem 0 4rem;
  }
  @media (max-width: 1000px) {
    margin: 0 2rem 0 2rem;
  }
  @media (max-width: 700px) {
    margin: 0 1rem 0 1rem;
    span {
      font-size: 2.3rem;
    }
  }
  @media (min-width: 1200px) {
    width: 1150px;
    margin: 0 auto;
  }
`
const Title = styled.h2`
  margin-bottom: 0.6rem;
  color: #f3f3f380;
  font-weight: 400;
`

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  position: absolute;
  top: 0;
  bottom: 0;
`

const ImageCarousel = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/pages/image-carousel/" } }
      ) {
        nodes {
          frontmatter {
            carouselImages {
              title
              text
              url
              image {
                childImageSharp {
                  fluid(
                    maxWidth: 800
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
      }
    }
  `)

  const { nodes } = data.allMarkdownRemark

  return (
    <div>
      <Carousel
        dots // Show dots below Carousel
        animationSpeed="2000" // Determines transition duration in milliseconds.
        autoPlay="7000" // Slide change interval in milliseconds
        infinite // Loops through side indefinitely
        stopAutoPlayOnHover // Stop loop on hovering
      >
        {nodes[0].frontmatter.carouselImages.map(image => {
          return (
            <StyledLink to={`/${image.url}`} key={image.title}>
              <Info>
                <Title>{image.title}</Title>
                <span>{image.text}</span>
              </Info>
              <CarouselImage src={image.image.childImageSharp.fluid.srcWebp} />
              <OverlayBackground />
            </StyledLink>
          )
        })}
      </Carousel>
    </div>
  )
}

export default ImageCarousel
