import React from 'react'
import { Layout } from 'layouts'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { navigate } from 'gatsby-link'
import remark from 'remark'
import remarkHTML from 'remark-html'
import { SEO, BackgroundImage } from 'components'

const Container = styled.div`
  margin: 0 auto;
  width: 100vw;
  display: flex;
`

const FormWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3.5rem 1rem 2rem;

  @media (min-width: 900px) {
    width: 50%;
    padding: 3.5rem 4rem 2rem;
  }
`
const IntroTextWrapper = styled.div`
  margin: 0 1%;
  max-width: 600px;

  @media (max-width: 400px) {
    word-break: break-word;
  }
`
const InputWrapper = styled.div`
  display: inline-block;
  width: 48%;
  margin: 1rem 1%;
  position: relative;
  border-radius: 4px;

  input,
  textarea {
    padding: 5% 5%;
    border: 0;
    width: 90%;
    font-size: 1rem;
    background-color: #2d2d2d;
    color: white;
    border-radius: 4px;
  }

  textarea {
    min-height: 17rem;
  }
  label {
    color: #999;
    padding: 1.1rem 2% 1rem 2%;
    position: absolute;
    top: 0;
    left: 2%;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    pointer-events: none;
  }

  input:focus ~ label,
  textarea:focus ~ label,
  input:valid ~ label,
  input[type='email']:placeholder-shown ~ label,
  textarea:valid ~ label {
    font-size: 0.75em;
    color: #999;
    top: -13px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
  }

  & input:focus ~ span,
  textarea:focus ~ span {
    width: 94%;
    -webkit-transition: all 0.075s ease;
    transition: all 0.075s ease;
  }

  @media (max-width: 650px) {
    margin: 0.3rem 1%;

    input {
      height: 30px;
    }
    label {
      padding-top: 0.8rem;
    }
  }
`

const SubmitButton = styled.button`
  float: right;
  padding: 7px 35px;
  margin: 0 1% 1rem;
  border-radius: 60px;
  display: block;
  background-color: #e53132;
  color: white;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06), 0 2px 10px 0 rgba(0, 0, 0, 0.07);
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;

  &:hover {
    transform: translateY(1px);
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.09);
  }

  @media (max-width: 768px) {
    width: 100%;
    float: none;
    text-align: center;
  }
`

const ContactUs = ({ data }) => {
  const toHTML = value => remark().use(remarkHTML).processSync(value).toString()

  const [state, setState] = React.useState({})

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(data => console.log(data))
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <SEO
        title="Contact Us | ImpressionistArts.com"
        description="Want To Get In Touch? Feel free to contact us using our contact form below or message us directly at info@impressionistarts.com..."
      />
      <Container>
        <BackgroundImage />
        <FormWrapper>
          <IntroTextWrapper
            dangerouslySetInnerHTML={{
              __html: toHTML(data.markdownRemark.frontmatter.text),
            }}
          ></IntroTextWrapper>
          <form
            name="contact-us"
            method="POST"
            data-netlify="true"
            // data-netlify-recaptcha="true"
            action="/thank-you"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact-us" />
            <InputWrapper>
              <input type="text" name="name" onChange={handleChange} required />
              <label>Name</label>
            </InputWrapper>
            <InputWrapper>
              <input
                type="email"
                name="email"
                placeholder=""
                onChange={handleChange}
                required
              />
              <label>Email</label>
            </InputWrapper>
            <InputWrapper style={{ width: '98%', marginTop: '0' }}>
              <textarea
                type="text"
                name="message"
                onChange={handleChange}
                required
              />
              <label>Message</label>
            </InputWrapper>
            {/* <div data-netlify-recaptcha="true"></div> */}
            <SubmitButton type="submit">Send Message</SubmitButton>
          </form>
        </FormWrapper>
      </Container>
    </Layout>
  )
}

export default ContactUs

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/pages/contact-us.md/" }) {
      html
      frontmatter {
        text
      }
    }
  }
`
