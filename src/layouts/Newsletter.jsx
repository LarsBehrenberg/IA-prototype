import React, { useState } from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Wrapper = styled.div`
  margin-top: 4rem;
  height: 25rem;
  padding: 1rem;
  position: relative;
  background: #22262d;
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

const Form = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 25;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 1rem;
  background: #22262d80;
  height: 15rem;

  @media (max-width: 1200px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
    margin: 2rem 1rem 2rem 1rem;
  }
  @media (min-width: 1200px) {
    width: 1120px;
    margin: 4rem auto 3rem auto;
  }
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 70%;
  max-width: 70%;
  width: 70%;
  justify-content: center;

  & input {
    margin-bottom: 0.5rem;
    padding: 5px 4% !important;
    font-size: 16px;
    color: #666;
    background-color: #fff;
    font-weight: 400;
    border-width: 0;
    border-radius: 3px;
  }

  & input,
  button {
    height: 2.6rem;
  }

  @media (max-width: 700px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }

  & button {
    font-weight: 700 !important;
    text-transform: uppercase !important;

    line-height: 1.7em !important;
    border-width: 0 !important;
    color: #ffffff;
    border-color: #94a6bf;
    border-radius: 3px;
    background: #94a6bf;
    letter-spacing: 2px;
    font-size: 14px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3rem;
  color: #fff;
  & h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  & p {
    line-height: 1.5rem;
  }

  @media (max-width: 700px) {
    padding-right: 0;
    margin-top: 0.3em;
  }
`
const Newsletter = () => {
  // const [email, setEmail] = useState('');

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  // e.preventDefault();
  // };

  // const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // setEmail(event.currentTarget.value);
  // };

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
    <Wrapper id="newsletter">
      <Image>
        <Img fluid={data.file.childImageSharp.fluid} />
      </Image>
      <Form /* onSubmit={handleSubmit} */>
        <TextWrapper>
          <h2>Join The Monthly Newsletter!</h2>
          <p>
            Sign up to receive our free monthly email covering the latest
            exhibitions, auctions and more.
          </p>
        </TextWrapper>
        <InputWrapper>
          <input
            placeholder="Email address"
            name="email"
            type="email"
            aria-label="email"
            // onChange={handleEmailChange}
          />
          <button type="submit">Subscribe</button>
        </InputWrapper>
      </Form>
    </Wrapper>
  )
}

export default Newsletter
