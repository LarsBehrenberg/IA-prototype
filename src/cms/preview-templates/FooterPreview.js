import React from 'react'
import PropTypes from 'prop-types'
import '../preview-styles/preview-styles.css'
import { SocialIcon } from 'react-social-icons'

const FooterPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()
  const buttonLinks = data.buttonLinkObject

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="col-md-4">
          <a
            className="btn btn-white-outline"
            href={
              buttonLinks.leftButton !== undefined &&
              buttonLinks.leftButton.path !== undefined
                ? buttonLinks.leftButton.path
                : ''
            }
            target="_blank"
            rel="noopener norefferrer"
          >
            {buttonLinks.leftButton !== undefined &&
            buttonLinks.leftButton.label !== undefined
              ? buttonLinks.leftButton.label
              : ''}
          </a>
        </div>
        <div className="col-md-4">
          <a
            className="btn btn-white-outline"
            href={
              buttonLinks.centerButton !== undefined &&
              buttonLinks.centerButton.path !== undefined
                ? buttonLinks.centerButton.path
                : ''
            }
            target="_blank"
            rel="noopener norefferrer"
          >
            {buttonLinks.centerButton !== undefined &&
            buttonLinks.centerButton.label !== undefined
              ? buttonLinks.centerButton.label
              : ''}
          </a>
        </div>
        <div className="col-md-4">
          <a
            className="btn btn-white-outline"
            href={
              buttonLinks.rightButton !== undefined &&
              buttonLinks.rightButton.path !== undefined
                ? buttonLinks.rightButton.path
                : ''
            }
            target="_blank"
            rel="noopener norefferrer"
          >
            {buttonLinks.rightButton !== undefined &&
            buttonLinks.rightButton.label !== undefined
              ? buttonLinks.rightButton.label
              : ''}
          </a>
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
          {data.socialButtons !== undefined
            ? data.socialButtons.map((button, index) => (
                <SocialIcon
                  url={button.url !== undefined ? button.url : ''}
                  className="social-icon"
                  style={{
                    width: '30px',
                    height: '30px',
                    marginLeft: `${index === 0 ? '0' : '30px'}`,
                  }}
                />
              ))
            : null}
        </div>
      </div>
      <div className="container footer-link-container">
        <div className="col-sm-3">
          <a
            href={
              data.pageLinkObject.leftString.path !== undefined
                ? data.pageLinkObject.leftString.path
                : ''
            }
            style={{
              lineHeight: '30px',
              color: 'white',
            }}
          >
            {data.pageLinkObject.leftString.label !== undefined
              ? data.pageLinkObject.leftString.label
              : 'fillin'}
          </a>
        </div>
        <div className="col-sm-3">
          <a
            href={
              data.pageLinkObject.centerLeftString.path !== undefined
                ? data.pageLinkObject.centerLeftString.path
                : ''
            }
            style={{
              lineHeight: '30px',
              color: 'white',
            }}
          >
            {data.pageLinkObject.centerLeftString.label !== undefined
              ? data.pageLinkObject.centerLeftString.label
              : 'fillin'}
          </a>
        </div>
        <div className="col-sm-3">
          <a
            href={
              data.pageLinkObject.centerRightString.path !== undefined
                ? data.pageLinkObject.centerRightString.path
                : ''
            }
            style={{
              lineHeight: '30px',
              color: 'white',
            }}
          >
            {data.pageLinkObject.centerRightString.label !== undefined
              ? data.pageLinkObject.centerRightString.label
              : 'fillin'}
          </a>
        </div>
        <div className="col-sm-3">
          <a
            href={
              data.pageLinkObject.rightString.path !== undefined
                ? data.pageLinkObject.rightString.path
                : ''
            }
            style={{
              lineHeight: '30px',
              color: 'white',
            }}
          >
            {data.pageLinkObject.rightString.label !== undefined
              ? data.pageLinkObject.rightString.label
              : 'fillin'}
          </a>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center' }}>
        <p
          style={{
            lineHeight: '30px',
            fontSize: '15px',
            color: '#ffffff50',
          }}
        >
          &copy; {new Date().getFullYear()} ImpressionistArts.com
        </p>
      </div>
    </footer>
  )
}

FooterPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default FooterPreview
