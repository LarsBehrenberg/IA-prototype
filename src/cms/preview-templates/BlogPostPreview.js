import React from 'react'
import PropTypes from 'prop-types'
import '../preview-styles/preview-styles.css'

const BlogPostPreview = ({ entry, widgetFor, widgetsFor }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data)

  // function ttdeToggleVisibility (self, id, idInner) {
  //     document.getElementById("site-text-more-button-"+(index+1)).remove()
  //     document.getElementById("view-content-"+(index+1)).classList.add("auto")
  // }

  return (
    <>
      <div className="site-content">
        <main className="site-main">
          {/* This is the upperGallery & sideBar */}
          <div className="col-sm-12">
            <section className="site-block top">
              <div className="site-title">
                <h1>
                  <span className="page__title-ttd">
                    {entry.getIn(['data', 'subTitle'])}{' '}
                  </span>
                  <span className="page__title-e">
                    {entry.getIn(['data', 'title'])}
                  </span>
                </h1>
              </div>
              <div className="site-gallery">
                <div className="ttde-gallery">
                  <div className="ttde-gallery-inner">
                    <div
                      className="ttde-gallery-top ttdegalleryitem"
                      data-pswp-uid="1"
                    >
                      <figure className="ttde-gallery-top-inner">
                        {' '}
                        <a className="ttde-gallery-url">
                          <img
                            src={
                              !!data.upperGalleryImages &&
                              data.upperGalleryImages.topImage &&
                              data.upperGalleryImages.topImage.topImageUrl
                                ? data.upperGalleryImages.topImage.topImageUrl
                                : ''
                            }
                            alt=""
                          />
                        </a>{' '}
                      </figure>
                    </div>
                    <div className="ttde-gallery-bottom">
                      <div
                        className="ttde-gallery-col ttde-gallery-col-1 ttdegalleryitem"
                        data-pswp-uid="1"
                      >
                        <figure className="ttde-gallery-col-inner">
                          {' '}
                          <a className="ttde-gallery-url">
                            <img
                              src={
                                data.upperGalleryImages &&
                                data.upperGalleryImages.leftImage &&
                                data.upperGalleryImages.leftImage.leftImageUrl
                                  ? data.upperGalleryImages.leftImage
                                      .leftImageUrl
                                  : ''
                              }
                              alt=""
                            />
                          </a>
                        </figure>
                      </div>
                      <div
                        className="ttde-gallery-col ttde-gallery-col-2 ttdegalleryitem"
                        data-pswp-uid="1"
                      >
                        <figure className="ttde-gallery-col-inner">
                          {' '}
                          <a className="ttde-gallery-url">
                            <img
                              src={
                                data.upperGalleryImages &&
                                data.upperGalleryImages.middleImage &&
                                data.upperGalleryImages.middleImage
                                  .middleImageUrl
                                  ? data.upperGalleryImages.middleImage
                                      .middleImageUrl
                                  : ''
                              }
                              alt=""
                            />
                          </a>
                        </figure>
                      </div>
                      <div
                        className="ttde-gallery-col ttde-gallery-col-3 ttdegalleryitem ttde-gallery-open"
                        data-pswp-uid="1"
                      >
                        <figure className="ttde-gallery-col-inner">
                          {' '}
                          <a className="ttde-gallery-url">
                            <span className="ttde-gallery-open-btn">
                              <span>More images 20+</span>
                            </span>
                            <img
                              src={
                                data.upperGalleryImages &&
                                data.upperGalleryImages.rightImage &&
                                data.upperGalleryImages.rightImage.rightImageUrl
                                  ? data.upperGalleryImages.rightImage
                                      .rightImageUrl
                                  : ''
                              }
                              alt=""
                            />
                          </a>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="site-bb">
                <ul>
                  <li>
                    <span>Home</span>
                  </li>
                  <li>
                    <span>{entry.getIn(['data', 'title'])}</span>
                  </li>
                </ul>
              </div>
              <div className="site-text">{widgetFor('body')}</div>
            </section>
          </div>
          {/* These are the TextSections */}
          {widgetsFor('textSections').map((textBlock, index) => {
            // function ttdeToggleVisibility (self, id, idInner) {
            //     document.getElementById("site-text-more-button-"+(index+1)).remove()
            //     document.getElementById("view-content-"+(index+1)).classList.add("auto")
            // }

            const hasSideGallery = array =>
              array === undefined || array.length === 0 ? true : false

            return (
              <div className="container" id={index + 1}>
                <div className="row">
                  <div className="col-sm-12">
                    <section className="site-block">
                      <h2>
                        {index + 1}. {textBlock.getIn(['data', 'textTitle'])}
                      </h2>
                      <div className="row">
                        {hasSideGallery(
                          data.textSections[index].sideGalleryImages
                        ) ? null : (
                          <div className="col-sm-3">
                            <div className="smallery">
                              {data.textSections[index].sideGalleryImages.map(
                                image => (
                                  <div className="smallery-item-wrp ttdegalleryitem">
                                    <figure className="smallery-item-psn">
                                      <a className="smallery-item-uri">
                                        <img
                                          className="smallery-item-img loaded"
                                          src={image.imageUrl}
                                          alt=""
                                        />
                                      </a>
                                    </figure>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                        <div
                          className={
                            hasSideGallery(
                              data.textSections[index].sideGalleryImages
                            )
                              ? ''
                              : 'col-sm-9'
                          }
                        >
                          <div
                            className="site-text"
                            style={
                              hasSideGallery(
                                data.textSections[index].sideGalleryImages
                              )
                                ? { padding: '0 15px' }
                                : {}
                            }
                          >
                            <div>{textBlock.getIn(['widgets', 'text'])}</div>
                            {/* <div className="site-text-more" id={"site-text-more-button-"+(index+1)}>
                                            <a className="btn btn-outline" onClick={ttdeToggleVisibility}>Expand to read more</a>
                                          </div> */}
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            )
          })}
        </main>
      </div>
    </>
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
