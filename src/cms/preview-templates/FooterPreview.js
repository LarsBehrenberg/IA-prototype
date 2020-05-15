import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/all.css'
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
              data.pageLinkObject.leftButton.path !== undefined
                ? data.pageLinkObject.leftButton.path
                : ''
            }
            style={{
              lineHeight: '30px',
              color: 'white',
            }}
          >
            {data.pageLinkObject.leftButton.label !== undefined
              ? data.pageLinkObject.leftButton.label
              : 'fillin'}
          </a>
        </div>
        <div className="col-sm-3">
          <a
            href={
              data.pageLinkObject.centerLeftButton.path !== undefined
                ? data.pageLinkObject.centerLeftButton.path
                : ''
            }
            style={{
              lineHeight: '30px',
              color: 'white',
            }}
          >
            {data.pageLinkObject.centerLeftButton.label !== undefined
              ? data.pageLinkObject.centerLeftButton.label
              : 'fillin'}
          </a>
        </div>
        <div className="col-sm-3">
          <a
            href={
              data.pageLinkObject.centerRightButton.path !== undefined
                ? data.pageLinkObject.centerRightButton.path
                : ''
            }
            style={{
              lineHeight: '30px',
              color: 'white',
            }}
          >
            {data.pageLinkObject.centerRightButton.label !== undefined
              ? data.pageLinkObject.centerRightButton.label
              : 'fillin'}
          </a>
        </div>
        <div className="col-sm-3">
          <a
            href={
              data.pageLinkObject.rightButton.path !== undefined
                ? data.pageLinkObject.rightButton.path
                : ''
            }
            style={{
              lineHeight: '30px',
              color: 'white',
            }}
          >
            {data.pageLinkObject.rightButton.label !== undefined
              ? data.pageLinkObject.rightButton.label
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
