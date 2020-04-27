import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/SEO'
import Newsletter from '../layouts/Newsletter'
import Layout from '../layouts/Layout'
import TextSection from '../components/TextSection'
import Header from '../components/Header'
import Suggestion from '../components/Suggestion'
import Video from '../components/Video'
import '../styles/lightbox.css'

var slideIndex = 1;

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { html, frontmatter, excerpt, fields } = data.markdownRemark
  const { title, subTitle, path, description, textSections, upperGalleryImages, videoUrl } = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid;
  const { topImage, leftImage, middleImage, rightImage } = upperGalleryImages

  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }

  function plusSlides(n) {
    slideIndex += n
    showSlides(slideIndex);
  }

  function showSlides(n) {
    var i;
    slideIndex = n
    var slides = document.getElementsByClassName("mySlides");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    captionText.innerHTML = document.getElementsByClassName("gallery-image")[slideIndex-1].alt;
  }

  function fillModals(arr) {
    return arr !== null ? arr.map((image, index) => (
      <div className="mySlides">
        <div className="numbertext">1 / x</div>
        <img src={image.imageUrl.childImageSharp.fluid.src} className="gallery-image" alt={image.imageTitle == null ? "An image title is missing" : image.imageTitle} style={{width: "100%"}} />
      </div>
    )) : null
  }

  window.addEventListener('scroll', function(event){
    if(document.getElementById('sidebar')){
      let sideBar = document.getElementById('sidebar')  // your element
      let sideBottom = sideBar.getBoundingClientRect().bottom+100
      // current scroll position relative to the body
      let footerDiv = document.getElementById('newsletter')
      let footerTop = footerDiv.getBoundingClientRect().top-50
      console.log(sideBottom, footerTop)
      if (sideBottom > footerTop) {
        document.getElementById("sidebar-container").classList.add("stuck");
      } else {
        document.getElementById("sidebar-container").classList.remove("stuck");
      }
    }
    // if (sideBar.hasClass('stuck')){
    //   sideBar.removeClass('stuck')
    // }
    // console.log(footerDivPos)
    // var toCross_position = $(".div-to-cross").offset().top;
    // var toCross_height = $(".div-to-cross").height();

    // if (fixed_position + fixed_height  < toCross_position) {
    //   fixed.removeClass('white');
    // } else if (fixed_position > toCross_position + toCross_height) {
    //   fixed.removeClass('white');
    // } else {
    //   fixed.addClass('white');
    // }
  });

  return (
    <>
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || ' '}
        banner={image}
        pathname={path}
        article
      />
      {/* This is the upprGallery & sideBar */}
      <Header title={title} subTitleText={subTitle} intro={html} bodyTitles={fields.bodyTitle} images={upperGalleryImages} showGallery={showSlides} openGallery={openModal} prevNeighbor={prev} nextNeighbor={next} />
      <div class="site-content">
        <main class="site-main">
          {/* These are the TextSections */}
          {videoUrl !== null && videoUrl !== "" ? <Video url={videoUrl} /> : null}
          {fields.bodyTitle.map((value, index) => {
            return <TextSection showGallery={showSlides} openGallery={openModal} index={index} title={textSections[index].textTitle} text={fields.bodyText[index]} textSectionImageArray={textSections[index].sideGalleryImages}/>
          })}

        <Suggestion previousNeighbor={prev} nextNeighbor={next}/>
        </main>
      </div>
      <Newsletter />
    </Layout>

    {/* Invisable Modal for image gallery */}
     <div id="myModal" className="modal">
            <button className="close cursor" onClick={closeModal}>&times;</button>
            <div className="modal-content">

                <div className="mySlides">
                  <div className="numbertext">1 / x</div>
                  <img src={topImage.topImageUrl.childImageSharp.fluid.src} className="gallery-image" alt={topImage.topImageTitle == null ? "An image title is missing" : topImage.topImageTitle} style={{width: "100%"}} />
                </div>
                <div className="mySlides">
                  <div className="numbertext">1 / x</div>
                  <img src={leftImage.leftImageUrl.childImageSharp.fluid.src} className="gallery-image" alt={leftImage.leftImageTitle == null ? "An image title is missing" : leftImage.leftImageTitle} style={{width: "100%"}} />
                </div>
                <div className="mySlides">
                  <div className="numbertext">1 / x</div>
                  <img src={middleImage.middleImageUrl.childImageSharp.fluid.src} className="gallery-image" alt={middleImage.middleImageTitle == null ? "An image title is missing" : middleImage.middleImageTitle} style={{width: "100%"}} />
                </div>
                <div className="mySlides">
                  <div className="numbertext">1 / x</div>
                  <img src={rightImage.rightImageUrl.childImageSharp.fluid.src} className="gallery-image" alt={rightImage.rightImageTitle == null ? "An image title is missing" : rightImage.rightImageTitle} style={{width: "100%"}} />
                </div>

                {
                  textSections.map((section, index) => {
                    const { sideGalleryImages } = section
                    return fillModals(sideGalleryImages)
                  })
                }
                <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
                <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>

                <div className="caption-container">
                    <p id="caption"></p>
                </div>
            </div>
            </div>
            
    </>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
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
        textSections {
          textTitle
          sideGalleryImages {
            imageUrl {
              childImageSharp {
                fluid(maxWidth: 800) {
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
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#d3d3d3", opacity: 20 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;