import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Layout, Newsletter } from 'layouts'

const AboutUs = ({ data }) => {
  const { title, subTitle } = data.markdownRemark.frontmatter
  const {
    topImage,
    leftImage,
    middleImage,
    rightImage,
  } = data.markdownRemark.frontmatter.upperGalleryImages
  const artists = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Helmet title="About Us | ImpressionistArts.com" />
      {/* <Header title={} subTitleText= intro bodyTitles images showGallery openGallery prevNeighbor nextNeighbor></Header> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <section className="site-block top">
              <div className="site-title">
                <h1>
                  <span className="page__title-ttd">{subTitle} </span>
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
                      <figure className="ttde-gallery-top-inner">
                        <a
                          className="ttde-gallery-url"
                          href="#top"
                          data-index="0"
                        >
                          <Img
                            fluid={topImage.topImageUrl.childImageSharp.fluid}
                            alt={topImage.topImageTitle}
                            loading="lazy"
                          />
                        </a>
                      </figure>
                    </div>
                    <div className="ttde-gallery-bottom">
                      <div
                        className="ttde-gallery-col ttde-gallery-col-1 ttdegalleryitem"
                        data-pswp-uid="1"
                      >
                        <figure className="ttde-gallery-col-inner">
                          <a
                            className="ttde-gallery-url"
                            href="#top"
                            data-index="1"
                          >
                            <Img
                              fluid={
                                leftImage.leftImageUrl.childImageSharp.fluid
                              }
                              alt={leftImage.leftImageTitle}
                              loading="lazy"
                            />
                          </a>
                        </figure>
                      </div>
                      <div
                        className="ttde-gallery-col ttde-gallery-col-2 ttdegalleryitem"
                        data-pswp-uid="1"
                      >
                        <figure className="ttde-gallery-col-inner">
                          <a
                            className="ttde-gallery-url"
                            href="#top"
                            data-index="2"
                          >
                            <Img
                              fluid={
                                middleImage.middleImageUrl.childImageSharp.fluid
                              }
                              alt={middleImage.middleImageTitle}
                              loading="lazy"
                            />
                          </a>
                        </figure>
                      </div>
                      <div
                        className="ttde-gallery-col ttde-gallery-col-3 ttdegalleryitem ttde-gallery-open"
                        data-pswp-uid="1"
                      >
                        <figure className="ttde-gallery-col-inner">
                          <a
                            className="ttde-gallery-url"
                            href="#top"
                            data-index="3"
                          >
                            <span className="ttde-gallery-open-btn">
                              <span>More images 20+</span>
                            </span>
                            <Img
                              fluid={
                                rightImage.rightImageUrl.childImageSharp.fluid
                              }
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
                    <a
                      itemProp="item"
                      href="https://impressionistarts.com/index.html"
                    >
                      <span itemProp="name">Home</span>
                    </a>
                    <meta itemProp="position" content="1" />
                  </li>
                  <li
                    itemProp="itemListElement"
                    itemScope=""
                    itemType="http://schema.org/ListItem"
                  >
                    <a
                      itemProp="item"
                      href="https://impressionistarts.com/paul-signac-biography.html"
                    >
                      <span itemProp="name">About Us</span>
                    </a>
                    <meta itemProp="position" content="3" />
                  </li>
                </ul>
              </div>
              <div
                className="site-text"
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
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
                      <a href="#top" className="list-group-item active">
                        <h4 className="list-group-item-heading">
                          Impressionist Painters
                        </h4>
                      </a>
                      {artists.map(artist => (
                        <Link
                          to={artist.frontmatter.path}
                          className="list-group-item"
                        >
                          <h5 className="list-group-item-heading">
                            {artist.frontmatter.title}
                          </h5>
                        </Link>
                      ))}
                      <Link
                        to="impressionism-quiz"
                        className="list-group-item active"
                      >
                        <h4 className="list-group-item-heading">
                          Impressionism Quiz
                        </h4>
                      </Link>
                      <Link to="gallery" className="list-group-item active">
                        <h4 className="list-group-item-heading">Our Gallery</h4>
                      </Link>
                      <Link to="/" className="list-group-item active">
                        <h4 className="list-group-item-heading">
                          The Painters
                        </h4>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Newsletter />
    </Layout>
  )
}
export default AboutUs

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/pages/" }) {
      html
      frontmatter {
        title
        subTitle
        upperGalleryImages {
          topImage {
            topImageUrl {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          leftImage {
            leftImageUrl {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          middleImage {
            middleImageUrl {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          rightImage {
            rightImageUrl {
              childImageSharp {
                fluid(maxWidth: 450) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 5
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        frontmatter {
          title
          path
        }
      }
    }
  }
`
