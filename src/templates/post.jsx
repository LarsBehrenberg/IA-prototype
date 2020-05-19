/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { SEO, TextSection, Header, Suggestion, Video } from 'components'
import { Newsletter, Layout } from 'layouts'
import { Helmet } from 'react-helmet'

let slideIndex = 1

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const { html, frontmatter, excerpt, fields } = data.markdownRemark
  const {
    title,
    subTitle,
    path,
    textSections,
    upperGalleryImages,
    videoUrl,
  } = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid.src
  const { topImage, leftImage, middleImage, rightImage } = upperGalleryImages
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

  function fillModals(arr) {
    return arr !== null
      ? arr.map((modalImage, index) => (
          <div
            className="mySlides"
            key={modalImage.imageUrl.childImageSharp.fluid.src}
          >
            <img
              src={modalImage.imageUrl.childImageSharp.fluid.src}
              className="gallery-image"
              alt={
                modalImage.imageTitle == null
                  ? 'An image title is missing'
                  : modalImage.imageTitle
              }
              style={{ width: '100%' }}
            />
          </div>
        ))
      : null
  }

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: 'post-page',
        }}
      />
      <Layout>
        <SEO
          title={title}
          description={excerpt || 'Welcome to ImpressionistArts.com'}
          banner={image}
          pathname={path}
          article
        />
        {/* This is the upprGallery & sideBar */}
        <Header
          title={title}
          subTitleText={subTitle}
          intro={html}
          bodyTitles={fields.bodyTitle}
          images={upperGalleryImages}
          showGallery={showSlides}
          openGallery={openModal}
          sideLinks={data.allMarkdownRemark.nodes}
        />
        <div className="site-content">
          <main className="site-main">
            {/* These are the TextSections */}
            {videoUrl !== null && videoUrl !== '' ? (
              <Video url={videoUrl} />
            ) : null}
            {fields.bodyTitle.map((value, index) => {
              return (
                <TextSection
                  key={`section-${index}`}
                  showGallery={showSlides}
                  openGallery={openModal}
                  index={index}
                  title={textSections[index].textTitle}
                  text={fields.bodyText[index]}
                  textSectionImageArray={textSections[index].sideGalleryImages}
                />
              )
            })}
            <Suggestion previousNeighbor={prev} nextNeighbor={next} />
          </main>
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
              src={topImage.topImageUrl.childImageSharp.fluid.src}
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
              src={leftImage.leftImageUrl.childImageSharp.fluid.src}
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
              src={middleImage.middleImageUrl.childImageSharp.fluid.src}
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
              src={rightImage.rightImageUrl.childImageSharp.fluid.src}
              className="gallery-image"
              alt={
                rightImage.rightImageTitle == null
                  ? 'An image title is missing'
                  : rightImage.rightImageTitle
              }
              style={{ width: '100%' }}
            />
          </div>

          {textSections.map(section => {
            const { sideGalleryImages } = section
            return fillModals(sideGalleryImages)
          })}

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

export default Post

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query($pathSlug: String!, $sideBarLinks: [String]) {
    allMarkdownRemark(filter: { frontmatter: { id: { in: $sideBarLinks } } }) {
      nodes {
        frontmatter {
          title
          path
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      excerpt
      fields {
        bodyTitle
        bodyText
      }
      frontmatter {
        title
        subTitle
        videoUrl
        upperGalleryImages {
          topImage {
            topImageTitle
            topImageUrl {
              childImageSharp {
                fluid(maxWidth: 800, quality: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          leftImage {
            leftImageTitle
            leftImageUrl {
              childImageSharp {
                fluid(maxWidth: 800, quality: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          middleImage {
            middleImageTitle
            middleImageUrl {
              childImageSharp {
                fluid(maxWidth: 800, quality: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          rightImage {
            rightImageTitle
            rightImageUrl {
              childImageSharp {
                fluid(maxWidth: 800, quality: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        textSections {
          textTitle
          sideGalleryImages {
            imageUrl {
              childImageSharp {
                fluid(maxWidth: 800, quality: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            imageTitle
          }
        }
        cover {
          childImageSharp {
            fluid(
              maxWidth: 800
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#d3d3d3", opacity: 20 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
