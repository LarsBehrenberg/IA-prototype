/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import { Layout, Newsletter } from 'layouts'
import { SEO, InstagramGallery } from 'components'

const Gallery = ({ data }) => {
  // This can be retrieved with a GET https://www.instagram.com/web/search/topsearch/?context=blended&query=INSTAGRAM_USERNAME
  const INSTAGRAM_ID = '269496940'
  const THUMBNAIL_WIDTH = 640
  const PHOTO_COUNT = 30

  return (
    <Layout>
      <SEO
        title="Gallery | ImpressionistArts.com"
        description={`Welcome to the ImpressionistArts Gallery || See our latest images shared with you on our Instagram account`}
      />

      <InstagramGallery
        userId={INSTAGRAM_ID}
        thumbnailWidth={THUMBNAIL_WIDTH}
        photoCount={PHOTO_COUNT}
      />
      <Newsletter />
    </Layout>
  )
}

export default Gallery
