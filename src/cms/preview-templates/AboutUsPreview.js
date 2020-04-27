import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/all.css'


const AboutUsPreview = ({ entry, widgetFor, widgetsFor, getAsset }) => {


    const image1 = widgetsFor('upperGalleryImages').getIn(['data', 'image1'])
    const image1Link = getAsset(image1)
    const image2 = widgetsFor('upperGalleryImages').getIn(['data', 'image2'])
    const image2Link = getAsset(image2)
    const image3 = widgetsFor('upperGalleryImages').getIn(['data', 'image3'])
    const image3Link = getAsset(image3)
    const image4 = widgetsFor('upperGalleryImages').getIn(['data', 'image4'])
    const image4Link = getAsset(image4)


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
                            <h1><span className="page__title-ttd">{entry.getIn(['data', 'subTitle'])} </span><span className="page__title-e">{entry.getIn(['data', 'title'])}</span></h1>
                        </div>
                        <div className="site-gallery">
                            <div className="ttde-gallery">
                            <div className="ttde-gallery-inner">
                                <div className="ttde-gallery-top ttdegalleryitem" data-pswp-uid="1">
                                <figure className="ttde-gallery-top-inner"> <a className="ttde-gallery-url" href="#top"><img src={image1Link.path == null ? "" : image1Link.toString()} className="loading" alt=""/>
                                    </a> </figure>
                                </div>
                                <div className="ttde-gallery-bottom">
                                <div className="ttde-gallery-col ttde-gallery-col-1 ttdegalleryitem" data-pswp-uid="1">
                                    <figure className="ttde-gallery-col-inner"> <a className="ttde-gallery-url" href="#top"><img className="loaded" src={image2Link.path == null ? "" : image2Link.toString()} alt=""/></a>
                                    </figure>
                                </div>
                                <div className="ttde-gallery-col ttde-gallery-col-2 ttdegalleryitem" data-pswp-uid="1">
                                    <figure className="ttde-gallery-col-inner"> <a className="ttde-gallery-url" href="#top"><img className="loaded" src={image3Link.path == null ? "" : image3Link.toString()} alt=""/></a>
                                    </figure>
                                </div>
                                <div className="ttde-gallery-col ttde-gallery-col-3 ttdegalleryitem ttde-gallery-open" data-pswp-uid="1">
                                    <figure className="ttde-gallery-col-inner"> <a className="ttde-gallery-url" href="#top"><span className="ttde-gallery-open-btn"><span>More
                                            images 20+</span></span><img className="loaded" src={image4Link.path == null ? "" : image4Link.toString()} alt=""/></a>
                                    </figure>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="site-bb">
                            <ul>
                            <li><span>Home</span></li>
                            <li><span>{entry.getIn(['data', 'title'])}</span></li>
                            </ul>
                        </div>
                        <div className="site-text">
                            {widgetFor('body')}
                        </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    )
}


AboutUsPreview.propTypes = {
    entry: PropTypes.shape({
      getIn: PropTypes.func,
    }),
    widgetFor: PropTypes.func,
  }

export default AboutUsPreview