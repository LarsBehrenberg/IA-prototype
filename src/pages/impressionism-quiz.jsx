import React from 'react'
import { Helmet } from 'react-helmet'

import { Layout } from 'layouts'
import { Game } from 'components'

const ImpressionismQuiz = () => {
  return (
    <Layout>
      <Helmet title="ImpressionistArts.com | Quiz" />
      <Game />
    </Layout>
  )
}

export default ImpressionismQuiz
