import React from 'react'
import { Layout } from 'layouts'
import { Game, SEO } from 'components'

const ImpressionismQuiz = () => {
  return (
    <Layout>
      <SEO
        title="Our Quiz | ImpressionistArts.com"
        description={`Welcome to the ImpressionistArts Quiz || Our quiz has a database of over 70 questions, make sure to stop by and test your impressionist knowledge!`}
      />
      <Game />
    </Layout>
  )
}

export default ImpressionismQuiz
