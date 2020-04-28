import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Header = ({ title, subTitleText, intro, bodyTitles, images, showGallery, openGallery, sideLinks }) => {
    const { topImage, leftImage, middleImage, rightImage } = images

    return (
    <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <section className="site-block top">
                  <div className="site-title">
                    <h1><span className="page__title-ttd">{subTitleText} </span><span className="page__title-e" itemprop="name">{title}<span></span> </span></h1>
                  </div>
                  <div className="site-gallery">
                    <div className="ttde-gallery">
                      <div className="ttde-gallery-inner">
                        <div className="ttde-gallery-top ttdegalleryitem" data-pswp-uid="1">
                          <figure className="ttde-gallery-top-inner" onClick={() => { openGallery(); showGallery(1);}}>
                            <span className="ttde-gallery-url" data-index="0">
                              <Img
                                fluid={topImage.topImageUrl.childImageSharp.fluid}
                                alt={topImage.topImageTitle}
                                loading="lazy"
                              />
                            </span>
                          </figure>
                        </div>
                        <div className="ttde-gallery-bottom">
                          <div className="ttde-gallery-col ttde-gallery-col-1 ttdegalleryitem" data-pswp-uid="1">
                            <figure className="ttde-gallery-col-inner" onClick={() => { openGallery(); showGallery(2);}}>
                              <span className="ttde-gallery-url" data-index="1">
                                <Img
                                  fluid={leftImage.leftImageUrl.childImageSharp.fluid}
                                  alt={leftImage.leftImageTitle}
                                  loading="lazy"
                                />
                              </span>
                            </figure>
                          </div>
                          <div className="ttde-gallery-col ttde-gallery-col-2 ttdegalleryitem" data-pswp-uid="1">
                            <figure className="ttde-gallery-col-inner" onClick={() => { openGallery(); showGallery(3);}}>
                              <span className="ttde-gallery-url" href="#top" data-index="2">
                                <Img
                                  fluid={middleImage.middleImageUrl.childImageSharp.fluid}
                                  alt={middleImage.middleImageTitle}
                                  loading="lazy"
                                />
                              </span>
                            </figure>
                          </div>
                          <div className="ttde-gallery-col ttde-gallery-col-3 ttdegalleryitem ttde-gallery-open" data-pswp-uid="1">
                            <figure className="ttde-gallery-col-inner" onClick={() => { openGallery(); showGallery(4);}}>
                              <a className="ttde-gallery-url" href="#top" data-index="3">
                                <span className="ttde-gallery-open-btn"><span>More images 20+</span></span>
                                <Img
                                  fluid={rightImage.rightImageUrl.childImageSharp.fluid}
                                  alt={rightImage.rightImageTitle}
                                  loading="lazy"
                                />
                              </a>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="site-bb" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                    <ul>
                      <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a itemprop="item" href="https://impressionistarts.com/index.html"><span itemprop="name">Home</span></a>
                        <meta itemprop="position" content="1"/>
                      </li>
                      <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a itemprop="item" href="https://impressionistarts.com/paul-signac-biography.html"><span itemprop="name">{title}</span></a>
                        <meta itemprop="position" content="3"/>
                      </li>
                    </ul>
                  </div>
                  <div className="site-text" dangerouslySetInnerHTML={{ __html: intro}}>
                      {/* Intro text here */}
                  </div>
                </section>
              </div>
              <div className="col-sm-3">
                <section className="site-sidebar" id="sidebar-container">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-push-9 col-sm-3" id="sidebar">
                        <div className="list-group"> <a href="#top" className="list-group-item active">
                            <h4 className="list-group-item-heading">{title}</h4>
                          </a>
                          {bodyTitles.map((value, index) => {
                            return (<a href={"#"+(index+1)} className="list-group-item">
                            <h5 className="list-group-item-heading" dangerouslySetInnerHTML={{ __html: bodyTitles[index]}} ></h5>
                          </a>)
                            })}
                          {
                            sideLinks.map((link, index) => (
                              <Link to={link.frontmatter.path} className="list-group-item active"><h4 className="list-group-item-heading">{link.frontmatter.title}</h4></Link>
                            ))
                          }
                          {/* {nextNeighbor === null ? null : <Link to={nextNeighbor.frontmatter.path} className="list-group-item active"><h4 className="list-group-item-heading">{nextNeighbor.frontmatter.title}</h4></Link>}
                          {prevNeighbor === null ? null : <Link to={prevNeighbor.frontmatter.path} className="list-group-item active" style={{borderTop: "none"}}><h4 className="list-group-item-heading">{prevNeighbor.frontmatter.title}</h4></Link>} */}
                          </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
)}

export default Header