import React, { useState } from 'react';
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

    article:first-child:nth-last-child(2),
    article:first-child:nth-last-child(2) ~ article {
      flex-basis: 48%;
      max-width: 48%;
      width: 48%;
    }

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
    width: 800px;
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

const TagButton = styled.span`
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
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background: #e53132;
    color: white;
    border-color: #e53132;
  }

  &.active {
    background: #e53132;
    color: white;
    border-color: #e53132;
  }
`;

const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const tagSet = new Set(
    edges.map(({ node }) => node.frontmatter.tags).flat(1),
  );
  const categories = [...tagSet];

  const emptyQuery = '';
  const [state, setState] = useState({
    categorizedData: edges,
    currentCategory: 'all',
    filteredData: [],
    query: emptyQuery,
  });

  const handleInputChange = event => {
    const query = event.target.value || '';
    const posts = edges || [];

    // return all filtered posts
    const filteredData = posts.filter(post => {
      // destructure data from post frontmatter
      const { title, tags } = post.node.frontmatter;
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags &&
          tags
            .join('') // convert tags from an array to string
            .toLowerCase()
            .includes(query.toLowerCase()))
      );
    });
    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
      categorizedData,
      currentCategory,
    });
  };

  const categoryPressed = category => {
    const posts = edges || [];

    const categorizedData = posts.filter(post => {
      const { tags } = post.node.frontmatter;
      return (
        tags &&
        tags
          .join('') // convert tags from an array to string
          .toLowerCase()
          .includes(category.toLowerCase())
      );
    });
    setState({
      categorizedData,
      currentCategory: category,
    });
  };

  const { filteredData, query, categorizedData, currentCategory } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  // if we have a search query then return filtered data instead of all posts; else return allPosts
  const posts = hasSearchResults ? filteredData : null;

  return (
    <Layout>
      <Helmet title="Home | ImpressionistArts.com" />
      <SearchBar onChange={handleInputChange} searchResults={posts} />
      {/* <Headline><span>Our Top Pages</span></Headline> */}
      <ButtonWrapper>
        <TagButton
          onClick={() => {
            setState({ categorizedData: edges, currentCategory: 'all' });
          }}
          className={`${currentCategory === 'all' ? 'active' : ''}`}
        >
          All Posts
        </TagButton>
        {categories.map(tag => (
          <TagButton
            onClick={() => categoryPressed(tag)}
            className={`${currentCategory === tag ? 'active' : ''}`}
          >
            {tag}
          </TagButton>
        ))}
      </ButtonWrapper>
      <PostWrapper>
        {categorizedData
          ? categorizedData.map(({ node }) => {
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
            })
          : null}
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
