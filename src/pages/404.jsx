import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Layout from '../layouts/Layout';
import styled from '@emotion/styled';

const Wrapper = styled.section`
  text-align: center;
  margin: auto;
  padding: 15.5rem 1.5rem;
  width: 80%;
  max-width: 80vw;
  height: 100%;
  flex: 1;
`;

const ErrorPage = center => (
  <Layout>
    <Helmet title={'404'} />
        <Wrapper>
      <h1>Woops, something went wrong.</h1>
      <h3>This page does not exist or is no longer reachable.</h3>
      <h3>
        You can return to the <Link to="/">Homepage</Link>.
      </h3>
      </Wrapper>
  </Layout>
);

export default ErrorPage;

ErrorPage.propTypes = {
  center: PropTypes.object,
};
