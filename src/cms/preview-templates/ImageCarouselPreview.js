import React from 'react'
import PropTypes from 'prop-types'
import '../preview-styles/preview-styles.css'

const ImageCarouselPreview = ({ entry }) => {
  const { carouselImages } = entry.getIn(['data']).toJS()
  console.log(carouselImages)
  return (
    <div>
      {carouselImages !== undefined
        ? carouselImages.map(image => {
            return (
              <div className="CMSImageContainer">
                <div
                  className={
                    image.image !== undefined ? 'CMSoverlayBackground' : ''
                  }
                />
                <div className="CMSinfo">
                  <h2 className="CMStitle">
                    {image.title !== undefined ? image.title : null}
                  </h2>
                  <span>{image.text !== undefined ? image.text : null}</span>
                </div>
                <img
                  src={image.image !== undefined ? image.image : null}
                  className="CMScarouselImage"
                />
              </div>
            )
          })
        : null}
    </div>
  )
}

ImageCarouselPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default ImageCarouselPreview
