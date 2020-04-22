import React from 'react'
import { Link } from 'gatsby'

const Header = ({ title, subTitleText, intro, bodyTitles, images, showGallery, openGallery, prevNeighbor, nextNeighbor}) => {
    const { topImage, leftImage, middleImage, rightImage } = images

    return (
    <div class="container">
            <div class="row">
              <div class="col-sm-9">
                <section class="site-block top">
                  <div class="site-title">
                    <h1><span class="page__title-ttd">{subTitleText} </span><span class="page__title-e" itemprop="name">{title}<span></span> </span></h1>
                  </div>
                  <div class="site-gallery">
                    <div class="ttde-gallery">
                      <div class="ttde-gallery-inner">
                        <div class="ttde-gallery-top ttdegalleryitem" data-pswp-uid="1">
                          <figure class="ttde-gallery-top-inner" onClick={() => { openGallery(); showGallery(1);}}> <a class="ttde-gallery-url" href="#top" title="alt here" data-pid={topImage[0].topImageUrl.childImageSharp.fluid.src} data-index="0"><img src={topImage[0].topImageUrl.childImageSharp.fluid.src} alt={topImage[0].topImageTitle} class="loading" data-was-processed="true" />
                            </a> </figure>
                        </div>
                        <div class="ttde-gallery-bottom">
                          <div class="ttde-gallery-col ttde-gallery-col-1 ttdegalleryitem" data-pswp-uid="1">
                            <figure class="ttde-gallery-col-inner" onClick={() => { openGallery(); showGallery(2);}}> <a class="ttde-gallery-url" href="#top" title="alt here" data-pid={leftImage[0].leftImageUrl.childImageSharp.fluid.src} data-index="1"><img data-src={leftImage[0].leftImageUrl.childImageSharp.fluid.src} alt={leftImage[0].leftImageTitle} class="loaded" src={leftImage[0].leftImageUrl.childImageSharp.fluid.src} data-was-processed="true"/></a>
                            </figure>
                          </div>
                          <div class="ttde-gallery-col ttde-gallery-col-2 ttdegalleryitem" data-pswp-uid="1">
                            <figure class="ttde-gallery-col-inner" onClick={() => { openGallery(); showGallery(3);}}> <a class="ttde-gallery-url" href="#top" title="alt here" data-pid={middleImage[0].middleImageUrl.childImageSharp.fluid.src} data-index="2"><img data-src={middleImage[0].middleImageUrl.childImageSharp.fluid.src} alt={middleImage[0].middleImageTitle} class="loaded" src={middleImage[0].middleImageUrl.childImageSharp.fluid.src} data-was-processed="true"/></a>
                            </figure>
                          </div>
                          <div class="ttde-gallery-col ttde-gallery-col-3 ttdegalleryitem ttde-gallery-open" data-pswp-uid="1">
                            <figure class="ttde-gallery-col-inner" onClick={() => { openGallery(); showGallery(4);}}> <a class="ttde-gallery-url" href="#top" title="alt here" data-pid={rightImage[0].rightImageUrl.childImageSharp.fluid.src} data-index="3"><span class="ttde-gallery-open-btn"><span>More
                                    images 20+</span></span><img data-src={rightImage[0].rightImageUrl.childImageSharp.fluid.src} alt={rightImage[0].rightImageTitle} class="loaded" src={rightImage[0].rightImageUrl.childImageSharp.fluid.src} data-was-processed="true"/></a>
                            </figure>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="site-bb" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                    <ul>
                      <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a itemprop="item" href="https://impressionistarts.com/index.html"><span itemprop="name">Home</span></a>
                        <meta itemprop="position" content="1"/>
                      </li>
                      <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem"><a itemprop="item" href="https://impressionistarts.com/paul-signac-biography.html"><span itemprop="name">{title}</span></a>
                        <meta itemprop="position" content="3"/>
                      </li>
                    </ul>
                  </div>
                  <div class="site-text" dangerouslySetInnerHTML={{ __html: intro}}>
                      {/* Intro text here */}
                  </div>
                </section>
              </div>
              <div class="col-sm-3">
                <section class="site-sidebar">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-push-9 col-sm-3">
                        <div class="list-group"> <a href="#top" class="list-group-item active">
                            <h4 class="list-group-item-heading">{title}</h4>
                          </a>
                          {bodyTitles.map((value, index) => {
                            return (<a href={"#"+(index+1)} class="list-group-item">
                            <h5 class="list-group-item-heading" dangerouslySetInnerHTML={{ __html: bodyTitles[index]}} ></h5>
                          </a>)
                            })}
                          {nextNeighbor === null ? null : <Link to={nextNeighbor.frontmatter.path} class="list-group-item active"><h4 class="list-group-item-heading">{nextNeighbor.frontmatter.title}</h4></Link>}
                          {prevNeighbor === null ? null : <Link to={prevNeighbor.frontmatter.path} class="list-group-item active" style={{borderTop: "none"}}><h4 class="list-group-item-heading">{prevNeighbor.frontmatter.title}</h4></Link>}
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