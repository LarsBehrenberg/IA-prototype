/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Layout, Newsletter } from 'layouts'
import { SEO } from 'components'
import { css } from '@emotion/core'
import galleryStyles from '../styles/galleryStyles'

const Gallery = ({ data }) => {
  // const { edges } = data.allInstaNode
  // const nodeURL = 'https://www.instagram.com/p'
  // // const {
  // //   full_name,
  // //   username,
  // //   biography,
  // //   profile_pic_url_hd,
  // //   edge_follow,
  // //   edge_followed_by,
  // // } = data.instaUserNode

  return (
    <Layout>
      {/* <SEO
        title="Gallery | ImpressionistArts.com"
        banner={edges[0].node.localFile.childImageSharp.fixed.src}
      />
      <div
        className="gallery-wrapper"
        css={css`
          ${galleryStyles}
        `}
      >
        <div className="gallery-container">
          <div className="profile">
            <div className="profile-image">
              <img src={profile_pic_url_hd} alt="Instagram profile" />
            </div>

            <div className="profile-user-settings">
              <h1 className="profile-user-name">{username}</h1>
              <a
                className="btn profile-edit-btn"
                href={`https://instagram.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Profile
              </a>
            </div>

            <div className="profile-stats">
              <ul style={{ padding: 0 }}>
                <li>
                  <span className="profile-stat-count">
                    {edge_followed_by.count.toLocaleString()}
                  </span>{' '}
                  followers
                </li>
                <li>
                  <span className="profile-stat-count">
                    {edge_follow.count.toLocaleString()}
                  </span>{' '}
                  following
                </li>
              </ul>
            </div>

            <div className="profile-bio">
              <p>
                <span className="profile-real-name">{full_name}</span>{' '}
                {biography}
              </p>
            </div>
          </div>
        </div>
        <div className="gallery-container" style={{ paddingTop: '80px' }}>
          <div className="gallery">
            {edges.map(({ node }) => {
              return (
                <a
                  className="gallery-item"
                  tabIndex="0"
                  href={`${nodeURL}/${node.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={node.id}
                >
                  <Img
                    fixed={node.localFile.childImageSharp.fixed}
                    loading="lazy"
                    className="gallery-image"
                  />

                  <div className="gallery-item-info">
                    <ul>
                      <li className="gallery-item-likes">
                        <span role="img" aria-label="heart">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="white"
                            style={{
                              fontSize: '14px',
                              lineHeight: '1.45',
                            }}
                          >
                            <path d="M12 4.435C10.011-.964 0-.162 0 8.003 0 12.071 3.06 17.484 12 23c8.94-5.516 12-10.929 12-14.997C24-.115 14-.996 12 4.435z"></path>
                          </svg>
                        </span>{' '}
                        {node.likes !== null ? node.likes.toLocaleString() : 0}
                      </li>
                      <li className="gallery-item-comments">
                        <span role="img" aria-label="speech-balloon">
                          <svg
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                            fill="white"
                            style={{
                              fontSize: '14px',
                              lineHeight: '1.45',
                            }}
                          >
                            <path d="M24 9.874C24 4.42 18.627 0 12 0S0 4.42 0 9.874c0 4.512 3.678 8.317 8.701 9.496L12 24l3.299-4.63C20.322 18.19 24 14.385 24 9.874z"></path>
                          </svg>
                        </span>{' '}
                        {node.comments !== null
                          ? node.likes.toLocaleString()
                          : 0}
                      </li>
                    </ul>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div> */}
      <Newsletter />
    </Layout>
  )
}

export default Gallery

// export const query = graphql`
//   query {
//     allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 12) {
//       edges {
//         node {
//           id
//           likes
//           comments
//           localFile {
//             childImageSharp {
//               fixed(width: 300, height: 300) {
//                 ...GatsbyImageSharpFixed
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `
