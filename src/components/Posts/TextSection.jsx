/* eslint-disable no-undef */
import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { adsenseId } from '../../../config/site'
import AdSense from 'react-adsense'

const TextSection = ({
  title,
  text,
  textSectionImageArray,
  index,
  showGallery,
  openGallery,
  buttonToggle,
}) => {
  function ttdeToggleVisibility() {
    document.getElementById(`site-text-more-button-${index + 1}`).remove()
    document.getElementById(`view-content-${index + 1}`).classList.add('auto')
  }

  function findImage(num) {
    const arr = document.getElementsByClassName('smallery-item-psn')
    for (let x = 0; x < arr.length; x++) {
      if (arr[x] == arr.namedItem(num)) {
        openGallery()
        showGallery(x + 5)
        return x
      }
    }
    openGallery()
    showGallery(1)
    return 1
  }
  const newTitle = `${index + 1}. ${title}`
  return (
    <>
      <div className="container" id={index + 1}>
        <div className="row">
          <div className="col-sm-9">
            <section className="site-block">
              <h2>{newTitle}</h2>
              <div className="row">
                {textSectionImageArray !== null ? (
                  <div className="col-sm-3">
                    <div className="smallery">
                      {textSectionImageArray.map((image, arrayLocation) => {
                        return (
                          <div
                            className="smallery-item-wrp ttdegalleryitem"
                            data-pswp-uid="1"
                            key={arrayLocation}
                          >
                            <figure
                              className="smallery-item-psn"
                              id={index.toString() + arrayLocation.toString()}
                              onClick={() => {
                                findImage(
                                  index.toString() + arrayLocation.toString()
                                )
                              }}
                            >
                              <span className="smallery-item-uri">
                                <Img
                                  fixed={image.imageUrl.thumbImage.fixed}
                                  alt={image.imageTitle}
                                  className="smallery-item-img"
                                  style={{
                                    width: '100%',
                                    height: '100%',
                                  }}
                                />
                              </span>
                            </figure>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ) : null}
                <div
                  className={
                    textSectionImageArray === null ? 'col-sm-12' : 'col-sm-9'
                  }
                  style={
                    textSectionImageArray === null ? { padding: '0 15px' } : {}
                  }
                >
                  <div className="site-text">
                    {buttonToggle ? (
                      <>
                        <div
                          className="site-text-less"
                          id={`view-content-${index + 1}`}
                        >
                          <div id={`view-content-height-${index + 1}`}>
                            <div dangerouslySetInnerHTML={{ __html: text }} />
                          </div>
                        </div>
                        <div
                          className="site-text-more"
                          id={`site-text-more-button-${index + 1}`}
                        >
                          <span
                            className="btn btn-outline"
                            onClick={ttdeToggleVisibility}
                          >
                            Expand to read more
                          </span>
                        </div>
                      </>
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: text }} />
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {index % 2 === 0 && adsenseId !== '' ? (
        <div class="container">
          <div class="row">
            <div class="col-sm-9">
              <div class="related-wrp">
                <div class="adsbygoogle-wrp">
                  <AdSense.Google
                    client={adsenseId}
                    slot="7806394673"
                    style={{ display: 'block' }}
                    layout="in-article"
                    format="fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default TextSection

TextSection.propTypes = {
  title: PropTypes.any.isRequired,
  text: PropTypes.any.isRequired,
}
