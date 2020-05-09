import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Carousel = styled.div`
  width: 100%;
  height: 450px;
`

const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  display: none;
`

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  z-index: 3;
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

const Image = styled.div`
  position: absolute;
  top: 0;
  overflow: hidden;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  visibility: visible;
  object-fit: cover;
  animation: fadeInHero 7s ease-in-out;
  transition: opacity 1s linear;
  > div {
    position: static !important;
  }
  > div > div {
    position: static !important;
  }
`

const Info = styled.div`
  color: #f0f0f0;

  animation: fadeInHero 7s ease-in-out;
  span {
    font-size: 2.6rem;
  }

  @media (max-width: 1200px) {
    margin: 5rem 2rem 1rem 3.3rem;
  }
  @media (max-width: 1000px) {
    margin: 6rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 3rem 1rem 1rem 1rem;
    span {
      font-size: 2.3rem;
    }
  }
  @media (min-width: 1200px) {
    width: 1150px;
    margin: 6rem auto 1rem auto;
  }
`

const Title = styled.h2`
  margin-bottom: 0.6rem;
  color: #f3f3f380;
  font-weight: 400;
`

const StopButton = styled.button`
  margin: 0 0 0 auto;
  z-index: 100;
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
      allFile(
        filter: { extension: { eq: "jpg" }, name: { regex: "/night/g" } }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 90, traceSVG: { color: "#2B2B2F" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `)

  const { nodes } = data.allFile

  // const stopAnimation = () => {
  //   document.getElementsByClassName(
  //     'carousel-slides'
  //   ).style.animationPlayState = 'paused'
  // }

  console.log(nodes)
  return (
    <Carousel className="carousel">
      <Wrapper className="carousel-slides">
        <Image>
          <Img fluid={data.file.childImageSharp.fluid} />
        </Image>
        <StyledLink to="/about-us">
          <Info>
            {/* <span>{date}</span> */}
            <Title>About us</Title>
            <span>
              I don't like art. Not most of it. <br />
              But I have always loved
              <br />
              <span style={{ color: '#e53132' }}>impressionism</span>. Always.
            </span>
          </Info>
        </StyledLink>
      </Wrapper>
      {nodes.map((node, index) => {
        return (
          <Wrapper className="carousel-slides">
            <Image>
              <Img fluid={node.childImageSharp.fluid} />
            </Image>
            <StyledLink to={index === 0 ? '/impressionism-quiz' : '/gallery'}>
              <Info>
                {/* <span>{date}</span> */}
                <Title>{index === 0 ? 'Our Quiz' : ' The Gallery'}</Title>
                <span>Text Here</span>
              </Info>
            </StyledLink>
          </Wrapper>
        )
      })}
      {/* <StopButton onClick={stopAnimation}>Stop animation</StopButton> */}
    </Carousel>
  )
}

export default Hero
