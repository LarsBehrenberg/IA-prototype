import React from 'react'
import PropTypes from 'prop-types'
import '../preview-styles/preview-styles.css'
import '../preview-styles/contact-preview.css'

const ContactUsPreview = ({ entry, widgetFor, getAsset }) => {
  let image = entry.getIn(['data', 'backgroundImage'])
  let imageLink = getAsset(image)
  return (
    <div className="site-content" style={{ paddingTop: '2rem' }}>
      <div className="preview-form-container">
        <div className="preview-image-wrapper">
          <img
            src={imageLink}
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
        </div>
        <div className="preview-form-wrapper">
          <div className="preview-text-wrapper">{widgetFor('text')}</div>
          <form>
            <div className="preview-input-wrapper">
              <input type="text" name="name" required />
              <label>Name</label>
            </div>
            <div className="preview-input-wrapper">
              <input type="text" name="name" required />
              <label>Email</label>
            </div>
            <div
              className="preview-input-wrapper"
              style={{ width: '98%', marginTop: '0' }}
            >
              <textarea type="text" name="message" required />
              <label>Message</label>
            </div>
            <button className="preview-submit-button" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactUsPreview.propTypes = {
  widgetFor: PropTypes.func,
}

export default ContactUsPreview
