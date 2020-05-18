import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

const Suggestion = ({ previousNeighbor, nextNeighbor }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "impressionism-quiz.jpg" }) {
        childImageSharp {
          fixed(width: 300, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9">
          <div className="site-sugg">
            <h3>People also like</h3>
            <div className="site-gallery">
              <div className="ttde-gallery sugg">
                <div className="ttde-gallery-inner">
                  <div className="ttde-gallery-bottom">
                    <div className="ttde-gallery-col ttde-gallery-col-1">
                      <div className="ttde-gallery-col-inner">
                        <Link
                          className="ttde-gallery-url"
                          to={`/${previousNeighbor.frontmatter.path}`}
                          data-gallery=""
                          title={previousNeighbor.frontmatter.title}
                        >
                          <span className="ttde-gallery-open-btn">
                            <span>{previousNeighbor.frontmatter.title}</span>
                          </span>
                          <Img
                            fixed={
                              previousNeighbor.frontmatter.cover.childImageSharp
                                .fixed
                            }
                            alt={previousNeighbor.frontmatter.title}
                            style={{
                              width: '100%',
                              height: '100%',
                            }}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="ttde-gallery-col ttde-gallery-col-2">
                      <div className="ttde-gallery-col-inner">
                        <Link
                          className="ttde-gallery-url"
                          to="/impressionism-quiz"
                          title="Try our 100 question impressionism quiz"
                        >
                          <span className="ttde-gallery-open-btn">
                            <span>2-minute quiz</span>
                          </span>
                          <Img
                            fixed={data.file.childImageSharp.fixed}
                            alt="Try our 100 question impressionism quiz"
                            style={{
                              width: '100%',
                              height: '100%',
                            }}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="ttde-gallery-col ttde-gallery-col-3 ttde-gallery-open">
                      <div className="ttde-gallery-col-inner">
                        <Link
                          className="ttde-gallery-url"
                          to={`/${nextNeighbor.frontmatter.path}`}
                          data-gallery=""
                          title={nextNeighbor.frontmatter.title}
                        >
                          <span className="ttde-gallery-open-btn">
                            <span>{nextNeighbor.frontmatter.title}</span>
                          </span>
                          <Img
                            fixed={
                              nextNeighbor.frontmatter.cover.childImageSharp
                                .fixed
                            }
                            alt={nextNeighbor.frontmatter.title}
                            style={{
                              width: '100%',
                              height: '100%',
                            }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suggestion
