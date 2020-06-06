import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Header = ({
  title,
  subTitleText,
  intro,
  bodyTitles,
  images,
  showGallery,
  openGallery,
  sideLinks,
}) => {
  const { topImage, leftImage, middleImage, rightImage } = images

  return (
    <div className="container" style={{ paddingTop: '40px' }}>
      <div className="row">
        <div className="col-sm-9">
          <section className="site-block top">
            <div className="site-title">
              <h1>
                <span className="page__title-ttd">{subTitleText} </span>
                <span className="page__title-e" itemProp="name">
                  {title}
                  <span />{' '}
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
                    <figure
                      className="ttde-gallery-top-inner"
                      onClick={() => {
                        openGallery()
                        showGallery(1)
                      }}
                    >
                      <span className="ttde-gallery-url" data-index="0">
                        <Img
                          fixed={topImage.topImageUrl.thumbImage.fixed}
                          alt={topImage.topImageTitle}
                          style={{
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </span>
                    </figure>
                  </div>
                  <div className="ttde-gallery-bottom">
                    <div
                      className="ttde-gallery-col ttde-gallery-col-1 ttdegalleryitem"
                      data-pswp-uid="1"
                    >
                      <figure
                        className="ttde-gallery-col-inner"
                        onClick={() => {
                          openGallery()
                          showGallery(2)
                        }}
                      >
                        <span className="ttde-gallery-url" data-index="1">
                          <Img
                            fixed={leftImage.leftImageUrl.thumbImage.fixed}
                            alt={leftImage.leftImageTitle}
                            style={{
                              width: '100%',
                              height: '100%',
                            }}
                          />
                        </span>
                      </figure>
                    </div>
                    <div
                      className="ttde-gallery-col ttde-gallery-col-2 ttdegalleryitem"
                      data-pswp-uid="1"
                    >
                      <figure
                        className="ttde-gallery-col-inner"
                        onClick={() => {
                          openGallery()
                          showGallery(3)
                        }}
                      >
                        <span className="ttde-gallery-url" data-index="2">
                          <Img
                            fixed={middleImage.middleImageUrl.thumbImage.fixed}
                            alt={middleImage.middleImageTitle}
                            style={{
                              width: '100%',
                              height: '100%',
                            }}
                          />
                        </span>
                      </figure>
                    </div>
                    <div
                      className="ttde-gallery-col ttde-gallery-col-3 ttdegalleryitem ttde-gallery-open"
                      data-pswp-uid="1"
                    >
                      <figure
                        className="ttde-gallery-col-inner"
                        onClick={() => {
                          openGallery()
                          showGallery(4)
                        }}
                      >
                        <span className="ttde-gallery-url" data-index="3">
                          <span className="ttde-gallery-open-btn">
                            <span>More images 20+</span>
                          </span>
                          <Img
                            fixed={rightImage.rightImageUrl.thumbImage.fixed}
                            alt={rightImage.rightImageTitle}
                            style={{
                              width: '100%',
                              height: '100%',
                            }}
                          />
                        </span>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="site-bb"
              itemScope=""
              itemType="http://schema.org/BreadcrumbList"
            >
              <ul>
                <li
                  itemProp="itemListElement"
                  itemScope=""
                  itemType="http://schema.org/ListItem"
                >
                  <Link itemProp="item" to="/">
                    <span itemProp="name" style={{ color: '#737373' }}>
                      Home
                    </span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <li
                  itemProp="itemListElement"
                  itemScope=""
                  itemType="http://schema.org/ListItem"
                >
                  <span itemProp="name">{title}</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ul>
            </div>
            <div
              className="site-text"
              dangerouslySetInnerHTML={{ __html: intro }}
            >
              {/* Intro text here */}
            </div>
          </section>
        </div>
        <div className="col-sm-3">
          <section className="site-sidebar" id="sidebar-container">
            <div className="container">
              <div className="row">
                <div className="col-sm-push-9 col-sm-3" id="sidebar">
                  <div className="list-group">
                    {' '}
                    <a href="#top" className="list-group-item active">
                      <h4 className="list-group-item-heading">{title}</h4>
                    </a>
                    {bodyTitles.length === 0 ? (
                      <>
                        <Link
                          to="/paul-cezanne-biography"
                          className="list-group-item"
                        >
                          <h5 className="list-group-item-heading">
                            Paul Cezanne
                          </h5>
                        </Link>
                        <Link
                          to="edouard-manet-biography"
                          className="list-group-item"
                        >
                          <h5 className="list-group-item-heading">
                            {' '}
                            Edouard Manet
                          </h5>
                        </Link>
                        <Link
                          to="claude-monet-biography"
                          className="list-group-item"
                        >
                          <h5 className="list-group-item-heading">
                            {' '}
                            Claude Monet
                          </h5>
                        </Link>
                        <Link
                          to="pierre-auguste-renoir-biography"
                          className="list-group-item"
                        >
                          <h5 className="list-group-item-heading">
                            {' '}
                            Pierre-Auguste Renoir
                          </h5>
                        </Link>
                        <Link
                          to="edgar-degas-biography"
                          className="list-group-item"
                        >
                          <h5 className="list-group-item-heading">
                            {' '}
                            Edgar Degas
                          </h5>
                        </Link>
                      </>
                    ) : bodyTitles.length > 7 ? (
                      <>
                        {bodyTitles.slice(0, 7).map((value, index) => {
                          return (
                            <a
                              href={`#${index + 1}`}
                              className="list-group-item"
                              key={`#${index + 1}`}
                            >
                              <h5
                                className="list-group-item-heading"
                                dangerouslySetInnerHTML={{
                                  __html: bodyTitles[index],
                                }}
                              />
                            </a>
                          )
                        })}
                        <a href="#8" className="list-group-item">
                          <h5 className="list-group-item-heading">
                            <svg
                              id="i-arrow-right"
                              viewBox="0 0 113.4 85"
                              fill="#dd3030"
                              style={{
                                display: 'inline',
                                width: '16px',
                                height: '11px',
                                marginRight: '5px',
                              }}
                            >
                              <path d="M109,35.4L70.9,3.8C68.7,2,67,0,63.8,0c-4.4,0-7.1,3.7-7.1,7.1v21.3H7.1c-3.9,0-7.1,3.2-7.1,7.1v14.2c0,3.9,3.2,7.1,7.1,7.1 h49.6V78c0,3.4,2.7,7.1,7.1,7.1c3.3,0,4.9-2,7.1-3.8L109,49.6c2.7-2.2,4.4-3.9,4.4-7.1S111.7,37.7,109,35.4z"></path>
                            </svg>
                            {bodyTitles.length - 7} more
                          </h5>
                        </a>
                      </>
                    ) : (
                      bodyTitles.map((value, index) => {
                        return (
                          <a
                            href={`#${index + 1}`}
                            className="list-group-item"
                            key={`#${index + 1}`}
                          >
                            <h5
                              className="list-group-item-heading"
                              dangerouslySetInnerHTML={{
                                __html: bodyTitles[index],
                              }}
                            />
                          </a>
                        )
                      })
                    )}
                    {sideLinks.map(link => (
                      <Link
                        to={`/${link.frontmatter.path}`}
                        className="list-group-item active"
                        key={link.frontmatter.path}
                      >
                        <h4 className="list-group-item-heading">
                          {link.frontmatter.title}
                        </h4>
                      </Link>
                    ))}
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
  )
}

export default Header
