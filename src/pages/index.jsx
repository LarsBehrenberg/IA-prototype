import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import PostList from '../components/PostList';
import Layout from '../layouts/Layout';
import SearchBar from '../components/SearchBar';
import '../styles/all.css';
import Newsletter from '../layouts/Newsletter';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;

  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 3rem 1rem 1rem 1rem;
  }
  @media (min-width: 1200px) {
    width: 1170px;
    margin: 4rem auto 1rem auto;
    & article:nth-of-type(4),
    article:nth-of-type(5) {
      flex-basis: 48%;
      max-width: 48%;
      width: 48%;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4rem 0rem 1rem 4rem;

  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
  @media (min-width: 1200px) {
    width: 1170px;
    margin: 4rem auto 1rem auto;
  }
`;

// const Headline = styled.h1`
//   text-align: center;
//   color: #262a2e;
//   margin: 4rem 0rem 1rem 4rem;
//   @media (max-width: 1000px) {
//     margin: 4rem 2rem 1rem 2rem;
//   }
//   @media (max-width: 700px) {
//     margin: 4rem 1rem 1rem 1rem;
//   }
//   @media (min-width: 1200px) {
//     width: 1170px;
//     margin: 3rem auto 0rem auto;
//   }
//   text-decoration: underline;
// `;

const TagButton = styled.a`
  font-size: 14px;
  line-height: 35px;
  color: #929497;
  text-transform: uppercase;
  border-width: 1px;
  border-style: solid;
  display: inline-block;
  height: 35px;
  border-radius: 4px;
  border-color: #dedede;
  padding: 0 15px;
  outline: none;
  text-decoration: none !important;
  margin: 0 5px 10px 5px;
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title="Home | ImpressionistArts.com" />
      <SearchBar />
      {/* <Headline><span>Our Top Pages</span></Headline> */}
      <ButtonWrapper>
        <TagButton>Impressionists</TagButton>
        <TagButton>Pre-Impressionists</TagButton>
        <TagButton>Post-Impressionists</TagButton>
        <TagButton>En plein air</TagButton>
      </ButtonWrapper>
      <PostWrapper>
        {edges.map(({ node }) => {
          const { id, excerpt, frontmatter } = node;
          const { cover, path, title, date } = frontmatter;
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          );
        })}
      </PostWrapper>
      <Newsletter />
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/posts/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 750
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
