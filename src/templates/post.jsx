import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import SEO from '../components/SEO'

import Layout from '../layouts/Layout'
import TextSection from '../components/TextSection'
import Header from '../components/Header'


// export const BlogPostTemplate = ({
//   articleTitle,
//   introText,
//   bodyTitles,
//   bodyTexts,
//   upperGalleryImages,
//   previous,
//   next,
//   textSection
// }) => {

//   return (
//     <>
//     {/* This is the upprGallery & sideBar */}
//     <Header title={articleTitle} intro={introText} bodyTitles={bodyTitles} images={upperGalleryImages} prevNeighbor={previous} nextNeighbor={next} />
//     <div class="site-content">
//       <main class="site-main">
//         {/* These are the TextSections */}
//         {bodyTitles.map((value, index) => {
//           return <TextSection index={index} title={bodyTitles[index]} text={bodyTexts[index]} textSectionImageArray={textSection}/>
//         })}
//       </main>
//     </div>
//     </>
//   )
// }

// BlogPostTemplate.propTypes = {
//   content: PropTypes.node.isRequired,
//   contentComponent: PropTypes.func,
//   description: PropTypes.string,
//   title: PropTypes.string,
//   helmet: PropTypes.object,
// }


const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const {html, frontmatter, excerpt, fields} = data.markdownRemark
  const {date, title, tags, path, description, textSections, upperGalleryImages} = frontmatter
  const image = frontmatter.cover.childImageSharp.fluid;

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || ' '}
        banner={image}
        pathname={path}
        article
      />
      {/* This is the upprGallery & sideBar */}
      <Header title={title} intro={html} bodyTitles={fields.bodyTitle} images={upperGalleryImages} prevNeighbor={prev} nextNeighbor={next} />
      <div class="site-content">
        <main class="site-main">
          {/* These are the TextSections */}
          {fields.bodyTitle.map((value, index) => {
            return <TextSection index={index} title={textSections[index].textTitle} text={fields.bodyText[index]} textSectionImageArray={textSections[index].sideGalleryImages}/>
          })}
        </main>
      </div>
    </Layout>
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
        date(formatString: "MM.DD.YYYY")
        title
        tags
        upperGalleryImages {
          image4 {
            childImageSharp {
              fluid(
                maxWidth: 450
                quality: 90
                traceSVG: { color: "#2B2B2F" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          image3 {
            childImageSharp {
              fluid(
                maxWidth: 450
                quality: 90
                traceSVG: { color: "#2B2B2F" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          image2 {
            childImageSharp {
              fluid(
                maxWidth: 450
                quality: 90
                traceSVG: { color: "#2B2B2F" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          image1 {
            childImageSharp {
              fluid(
                maxWidth: 900
                quality: 90
                traceSVG: { color: "#2B2B2F" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        textSections {
          textTitle
          sideGalleryImages {
            childImageSharp {
              fluid(
                maxWidth: 900
                quality: 90
                traceSVG: { color: "#2B2B2F" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
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