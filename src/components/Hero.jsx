import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby'
const Wrapper = styled.article`
  margin-top: 20px;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  height: 450px;
  width: 100%;
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
  object-fit: cover;
  > div {
    position: static !important;
  }
  > div > div {
    position: static !important;
  }
`

const Info = styled.div`
  color: #f0f0f0;

  @media (max-width: 1200px) {
    margin: 5rem 2rem 1rem 3.3rem;
  }
  @media (max-width: 1000px) {
    margin: 5rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 3rem 1rem 1rem 1rem;
    span {
      font-size: 2.4rem;
    }
  }
  @media (min-width: 1200px) {
    width: 1180px;
    margin: 5rem auto 1rem auto;
  }
  span {
    font-size: 2.6rem;
  }
`

const Title = styled.h2`
  margin-bottom: 0.6rem;
  color: #f3f3f380;
  font-weight: 400;
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
    // <Wrapper>
    //   <ImageWrapper to="gallery">
    //     <Img
    //       fluid={data.file.childImageSharp.fluid}
    //     />
    //   </ImageWrapper>
    //   <TextContainer>
    //     <h1>
    //       I don't like art. Not most of it. <br />
    //       But I have always loved{' '}
    //       <span style={{ color: '#e53132' }}>impressionism</span>. Always.
    //     </h1>
    //   </TextContainer>
    // </Wrapper>
    <Wrapper>
      <Image>
        <Img fluid={data.file.childImageSharp.fluid} />
      </Image>
      <StyledLink to={'path'}>
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
  )
}

export default Hero

// const Wrapper = styled.div`
//   margin: 0;
//   height: 300px;
// `
// const TextContainer = styled.div`
//   & h1 {
//     font-size: 3rem;
//   }

//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   padding: 1rem;
//   z-index: 3;
//   border-radius: 0.4rem;
//   &:after {
//     content: '';
//     position: absolute;
//     display: block;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(
//       to right,
//       rgba(0, 0, 0, 0) 0%,
//       rgba(0, 0, 0, 0.3) 50%,
//       rgba(0, 0, 0, 0.7) 80%,
//       rgba(0, 0, 0, 1) 100%
//     );
//   }
// `

// const ImageWrapper = styled(Link)`
//   margin: 0 auto;
//   position: absolute;
//   top: 60;
//   z-index: -1;
//   left: 0;
//   width: 100%;
//     z-index: -1;
//   }
// `
