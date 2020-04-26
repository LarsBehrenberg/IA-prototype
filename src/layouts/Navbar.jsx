import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Navbar = () => {



  const data = useStaticQuery(graphql`
  query {
      allMarkdownRemark(limit: 6) {
          nodes {
            frontmatter {
              title
              path
            }
          }
          totalCount
      }
  }
  `)
  const painters = data.allMarkdownRemark.nodes

  return (
      <header className="site-header">
      <div className="container">
        <div className="site-brand">
          <div className="brand"><Link className="brand-uri" to="/"><img
                src="/logo/logo.png" alt="" className="loading"
                data-was-processed="true" /></Link>
          </div>
          <button id="primary-toggle" className="menu-toggle"
            aria-controls="primary-menu" aria-expanded="false"><span></span><span></span><span></span>
          </button>
        </div>
        <nav id="site-navigation" className="nav">
          <div className="nav-ctn">
            <ul id="primary-menu" className="nav-menu" aria-expanded="false">
              <li><Link to="/">Home</Link> </li>
              <li><Link to="/"><span>The Painters</span> <span className="caret"></span></Link>
                  <ul className="sub-menu">
                    {painters.map((painter) => (
                      <li><Link to={painter.frontmatter.path}>{painter.frontmatter.title}</Link></li>
                    ))}
                    <li><Link to="/"><span style={{color: "#dd3030"}}>&#10145;</span> {(data.allMarkdownRemark.totalCount - 6).toString()} more</Link></li>
                  </ul>
              </li>
              <li><Link to="gallery">Gallery</Link></li>
              <li><Link to="impressionism-quiz">Quiz</Link></li>
              <li><a href="/"><span>More</span> <span className="caret"></span></a>
                  <ul className="sub-menu">
                      {/* <li><a href="https://impressionistarts.com/impressionism-timeline.html">Impressionism Timeline </a> </li>
                      <li><a href="https://impressionistarts.com/top-10-impressionist-paintings.html">Top 10 Paintings </a></li>
                      <li><a href="https://impressionistarts.com/most-expensive-impressionist-paintings.html">Most Expensive Paintings </a> </li>
                      <li><a href="https://impressionistarts.com/first-impressionist-exhibition.html">First Impressionist Exhibition</a> </li>
                      <li><a href="https://impressionistarts.com/impressionist-painters.html"><svg className="i i-arrow-right" width="16px" height="12px" title="impressionist painters">
                          </svg><span>10 More</span></a></li> */}
                      <li>Coming soon</li>
                  </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default Navbar