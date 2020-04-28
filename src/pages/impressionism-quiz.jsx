import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../layouts/Layout';
import Game from '../components/Game/Game';

const ImpressionismQuiz = () => {
  return (
    <Layout>
      <Helmet title="ImpressionistArts.com | Quiz" />
      <Game />
    </Layout>
  );
};

export default ImpressionismQuiz;
