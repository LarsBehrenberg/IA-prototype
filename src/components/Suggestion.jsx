import React from 'react'
import { Link } from 'gatsby'

const Suggestion = ({ previousNeighbor, nextNeighbor }) => (
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
                      {' '}
                      <Link
                        className="ttde-gallery-url"
                        to={previousNeighbor.frontmatter.path}
                        data-gallery=""
                        title={previousNeighbor.frontmatter.title}
                      >
                        <span className="ttde-gallery-open-btn">
                          <span>{previousNeighbor.frontmatter.title}</span>
                        </span>
                        <img
                          alt={previousNeighbor.frontmatter.title}
                          className="loaded"
                          src={
                            'assets/' +
                            previousNeighbor.frontmatter.cover.relativePath
                          }
                          data-was-processed="true"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="ttde-gallery-col ttde-gallery-col-2">
                    <div className="ttde-gallery-col-inner">
                      {' '}
                      <Link
                        className="ttde-gallery-url"
                        to="impressionism-quiz"
                        title="Try our 100 question impressionism quiz"
                      >
                        <span className="ttde-gallery-open-btn">
                          <span>2-minute quiz</span>
                        </span>
                        <img
                          alt="Try our 100 question impressionism quiz"
                          className="loaded"
                          src="assets/impressionism-quiz.jpg"
                          data-was-processed="true"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="ttde-gallery-col ttde-gallery-col-3 ttde-gallery-open">
                    <div className="ttde-gallery-col-inner">
                      {' '}
                      <Link
                        className="ttde-gallery-url"
                        to={nextNeighbor.frontmatter.path}
                        data-gallery=""
                        title={nextNeighbor.frontmatter.title}
                      >
                        <span className="ttde-gallery-open-btn">
                          <span>{nextNeighbor.frontmatter.title}</span>
                        </span>
                        <img
                          alt={nextNeighbor.frontmatter.title}
                          className="loaded"
                          src={
                            'assets/' +
                            nextNeighbor.frontmatter.cover.relativePath
                          }
                          data-was-processed="true"
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

export default Suggestion
