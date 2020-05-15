import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/pages/footer-links.md/" }) {
        frontmatter {
          buttonLinkObject {
            leftButton {
              label
              path
            }
            centerButton {
              label
              path
            }
            rightButton {
              label
              path
            }
          }
          pageLinkObject {
            leftString {
              label
              path
            }
            centerLeftString {
              label
              path
            }
            centerRightString {
              label
              path
            }
            rightString {
              label
              path
            }
          }
          socialButtons {
            url
          }
        }
      }
    }
  `)
  const {
    leftButton,
    centerButton,
    rightButton,
  } = data.markdownRemark.frontmatter.buttonLinkObject

  const { socialButtons } = data.markdownRemark.frontmatter

  const {
    leftString,
    centerLeftString,
    centerRightString,
    rightString,
  } = data.markdownRemark.frontmatter.pageLinkObject
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="col-md-4">
          <Link className="btn btn-white-outline" to={`/${leftButton.path}`}>
            {leftButton.label}
          </Link>
        </div>
        <div className="col-md-4">
          <Link className="btn btn-white-outline" to={`/${centerButton.path}`}>
            {centerButton.label}
          </Link>
        </div>
        <div className="col-md-4">
          <Link className="btn btn-white-outline" to={`/${rightButton.path}`}>
            {rightButton.label}
          </Link>
        </div>
      </div>
      <div className="container" style={{ color: 'white', display: 'flex' }}>
        <div
          className="col-sm-12"
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {socialButtons.map((button, index) => (
            <SocialIcon
              key={button.url}
              url={button.url}
              className="social-icon"
              style={{
                width: '30px',
                height: '30px',
                marginLeft: `${index === 0 ? '0' : '30px'}`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="container footer-link-container">
        <div className="col-sm-3">
          <Link
            to={`/${leftString.path}`}
            style={{
              lineHeight: '30px',
              color: 'white',
            }}
          >
            {leftString.label}
          </Link>
        </div>
        <div className="col-sm-3">
          <Link
            to={`/${centerLeftString.path}`}
            style={{
              lineHeight: '30px',
              color: 'white',
            }}
          >
            {centerLeftString.label}
          </Link>
        </div>
        <div className="col-sm-3">
          <Link
            to={`/${centerRightString.path}`}
            style={{
              lineHeight: '30px',
              color: 'white',
            }}
          >
            {centerRightString.label}
          </Link>
        </div>
        <div className="col-sm-3">
          <Link
            to={`/${rightString.path}`}
            style={{
              lineHeight: '30px',
              color: 'white',
            }}
          >
            {rightString.label}
          </Link>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ lineHeight: '30px', fontSize: '15px', color: '#ffffff50' }}>
          &copy; {new Date().getFullYear()} ImpressionistArts.com
        </p>
      </div>
    </footer>
  )
}

export default Footer
