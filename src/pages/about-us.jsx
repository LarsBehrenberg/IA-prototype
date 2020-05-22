import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { Layout, Newsletter } from 'layouts'
import { SEO } from 'components'

let slideIndex = 1

const AboutUs = ({ data }) => {
  const { title, subTitle } = data.markdownRemark.frontmatter
  const {
    topImage,
    leftImage,
    middleImage,
    rightImage,
  } = data.markdownRemark.frontmatter.upperGalleryImages
  const artists = data.allMarkdownRemark.nodes

  let touchListen = false

  let touchstartX = 0
  let touchendX = 0

  function keyListener(event) {
    if (event.keyCode === 39) {
      // eslint-disable-next-line no-use-before-define
      plusSlides(1)
    }
    if (event.keyCode === 37) {
      // eslint-disable-next-line no-use-before-define
      plusSlides(-1)
    }
    if (event.keyCode === 27) {
      // eslint-disable-next-line no-use-before-define
      closeModal()
    }
  }

  // React Hook to initiate and clean up eventlisteners after mounting
  useEffect(() => {
    window.addEventListener('keydown', keyListener)
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener('keydown', keyListener)
    }
  })

  function openModal() {
    document.getElementById('myModal').style.display = 'block'
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
  }

  function closeModal() {
    if (document.getElementById('myModal')) {
      document.getElementById('myModal').style.display = 'none'
    }
    document.getElementsByTagName('body')[0].style.overflow = 'auto'
  }

  function showSlides(n) {
    let i
    slideIndex = n
    const slides = document.getElementsByClassName('mySlides')
    const captionText = document.getElementById('caption')
    const numberText = document.getElementById('numbertext')

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none'
    }
    slides[slideIndex - 1].style.display = 'block'
    captionText.innerHTML = document.getElementsByClassName('gallery-image')[
      slideIndex - 1
    ].alt

    numberText.innerHTML = `${slideIndex} / ${
      document.getElementsByClassName('gallery-image').length
    }`

    if (touchListen === false) {
      Array.from(slides).forEach(slide => {
        slide.addEventListener(
          'touchstart',
          event => {
            touchstartX = event.changedTouches[0].screenX
          },
          false
        )

        slide.addEventListener(
          'touchend',
          event => {
            touchendX = event.changedTouches[0].screenX
            // eslint-disable-next-line no-use-before-define
            handleGesture()
          },
          false
        )
      })
      touchListen = true
    }
  }

  function plusSlides(n) {
    if (document.getElementById('myModal')) {
      slideIndex += n
      showSlides(slideIndex)
    }
  }

  function handleGesture() {
    if (touchendX <= touchstartX) {
      plusSlides(1)
    }

    if (touchendX >= touchstartX) {
      plusSlides(-1)
    }
  }

  return (
    <>
      <Layout>
        <SEO
          title="About Us | ImpressionistArts.com"
          description="I don't like art. Not most of it. But I have always loved impressionism. Always. I remember having posters of impressionist paintings on my childhood bedroom..."
          banner={topImage.topImageUrl.childImageSharp.fixed.src}
        />
        <div className="container" style={{ paddingTop: '40px' }}>
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
                        <figure
                          className="ttde-gallery-top-inner"
                          onClick={() => {
                            openModal()
                            showSlides(1)
                          }}
                        >
                          <span className="ttde-gallery-url" data-index="0">
                            <Img
                              fixed={topImage.topImageUrl.childImageSharp.fixed}
                              alt={topImage.topImageTitle}
                              style={{ height: '100%', width: '100%' }}
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
                              openModal()
                              showSlides(2)
                            }}
                          >
                            <span className="ttde-gallery-url" data-index="1">
                              <Img
                                fixed={
                                  leftImage.leftImageUrl.childImageSharp.fixed
                                }
                                alt={leftImage.leftImageTitle}
                                style={{ height: '100%', width: '100%' }}
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
                              openModal()
                              showSlides(3)
                            }}
                          >
                            <span className="ttde-gallery-url" data-index="2">
                              <Img
                                fixed={
                                  middleImage.middleImageUrl.childImageSharp
                                    .fixed
                                }
                                alt={middleImage.middleImageTitle}
                                style={{ height: '100%', width: '100%' }}
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
                              openModal()
                              showSlides(4)
                            }}
                          >
                            <span
                              className="ttde-gallery-url"
                              href="#top"
                              data-index="3"
                            >
                              <span className="ttde-gallery-open-btn">
                                <span>More images 20+</span>
                              </span>
                              <Img
                                fixed={
                                  rightImage.rightImageUrl.childImageSharp.fixed
                                }
                                alt={rightImage.rightImageTitle}
                                style={{ height: '100%', width: '100%' }}
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
                      <Link to="/">
                        <span itemProp="name">Home</span>
                      </Link>
                      <meta itemProp="position" content="1" />
                    </li>
                    <li
                      itemProp="itemListElement"
                      itemScope=""
                      itemType="http://schema.org/ListItem"
                    >
                      <span itemProp="name">About Us</span>
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
                            to={`/${artist.frontmatter.path}`}
                            className="list-group-item"
                            key={artist.frontmatter.title}
                          >
                            <h5 className="list-group-item-heading">
                              {artist.frontmatter.title}
                            </h5>
                          </Link>
                        ))}
                        <Link
                          to="/impressionism-quiz"
                          className="list-group-item active"
                        >
                          <h4 className="list-group-item-heading">
                            Impressionism Quiz
                          </h4>
                        </Link>
                        <Link to="/gallery" className="list-group-item active">
                          <h4 className="list-group-item-heading">
                            Our Gallery
                          </h4>
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
      {/* Invisable Modal for image gallery */}
      <div id="myModal" className="modal">
        <div className="numbertext" id="numbertext">
          1 / x
        </div>
        <button className="close cursor" onClick={closeModal} type="button">
          &times;
        </button>
        <div className="modal-content">
          <div className="mySlides" key="slide-1">
            <img
              src={topImage.topImageUrl.childImageSharp.fixed.src}
              className="gallery-image"
              alt={
                topImage.topImageTitle == null
                  ? 'An image title is missing'
                  : topImage.topImageTitle
              }
              style={{ width: '100%' }}
            />
          </div>
          <div className="mySlides" key="slide-2">
            <img
              src={leftImage.leftImageUrl.childImageSharp.fixed.src}
              className="gallery-image"
              alt={
                leftImage.leftImageTitle == null
                  ? 'An image title is missing'
                  : leftImage.leftImageTitle
              }
              style={{ width: '100%' }}
            />
          </div>
          <div className="mySlides" key="slide-3">
            <img
              src={middleImage.middleImageUrl.childImageSharp.fixed.src}
              className="gallery-image"
              alt={
                middleImage.middleImageTitle == null
                  ? 'An image title is missing'
                  : middleImage.middleImageTitle
              }
              style={{ width: '100%' }}
            />
          </div>
          <div className="mySlides" key="slide-4">
            <img
              src={rightImage.rightImageUrl.childImageSharp.fixed.src}
              className="gallery-image"
              alt={
                rightImage.rightImageTitle == null
                  ? 'An image title is missing'
                  : rightImage.rightImageTitle
              }
              style={{ width: '100%' }}
            />
          </div>

          <div className="caption-container">
            <p id="caption" />
          </div>
          <button className="prev" onClick={() => plusSlides(-1)} type="button">
            &#10094;
          </button>
          <button className="next" onClick={() => plusSlides(1)} type="button">
            &#10095;
          </button>
        </div>
        <div
          style={{
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            opacity: '0',
            top: '0',
            left: '0',
            zIndex: '-1',
          }}
          onClick={closeModal}
        />
      </div>
    </>
  )
}
export default AboutUs

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/pages/about-us.md/" }) {
      html
      frontmatter {
        title
        subTitle
        upperGalleryImages {
          topImage {
            topImageUrl {
              childImageSharp {
                fixed(width: 800) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          leftImage {
            leftImageUrl {
              childImageSharp {
                fixed(width: 800) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          middleImage {
            middleImageUrl {
              childImageSharp {
                fixed(width: 800) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          rightImage {
            rightImageUrl {
              childImageSharp {
                fixed(width: 800) {
                  ...GatsbyImageSharpFixed
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
