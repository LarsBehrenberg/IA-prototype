/* eslint-disable no-undef */
import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const NavbarOld = () => {
  // // Button onClick function!
  function buttonClicked() {
    const container = document.getElementById('site-navigation')
    const menu = container.getElementsByTagName('ul')[0]
    const button = document.getElementById('primary-toggle')

    if (container.className.indexOf('toggled') !== -1) {
      container.className = container.className.replace(' toggled', '')
      button.setAttribute('aria-expanded', 'false')
      menu.setAttribute('aria-expanded', 'false')
    } else {
      container.className += ' toggled'
      button.setAttribute('aria-expanded', 'true')
      menu.setAttribute('aria-expanded', 'true')
    }
  }

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        limit: 6
      ) {
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
          <div className="brand">
            <Link className="brand-uri" to="/">
              <img
                src="/logo/logo.png"
                alt=""
                className="loading"
                data-was-processed="true"
              />
            </Link>
          </div>
          <button
            id="primary-toggle"
            type="button"
            className="menu-toggle"
            aria-controls="primary-menu"
            aria-expanded="false"
            onClick={buttonClicked}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav id="site-navigation" className="nav">
          <div className="nav-ctn">
            <ul id="primary-menu" className="nav-menu" aria-expanded="false">
              <li>
                <Link to="/">Home</Link>{' '}
              </li>
              <li>
                <Link to="/">
                  <span>The Painters</span> <span className="caret" />
                </Link>
                <ul className="sub-menu">
                  {painters.map(painter => (
                    <li key={painter.frontmatter.title}>
                      <Link to={painter.frontmatter.path}>
                        {painter.frontmatter.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/">
                      <span>
                        <svg
                          class="i i-arrow-right"
                          width="16px"
                          height="12px"
                          title="impressionist painters"
                          style={{ fill: '#dd3030', marginBottom: '3px' }}
                        >
                          <svg id="i-arrow-right" viewBox="0 0 113.4 85">
                            <path d="M109,35.4L70.9,3.8C68.7,2,67,0,63.8,0c-4.4,0-7.1,3.7-7.1,7.1v21.3H7.1c-3.9,0-7.1,3.2-7.1,7.1v14.2c0,3.9,3.2,7.1,7.1,7.1 h49.6V78c0,3.4,2.7,7.1,7.1,7.1c3.3,0,4.9-2,7.1-3.8L109,49.6c2.7-2.2,4.4-3.9,4.4-7.1S111.7,37.7,109,35.4z" />
                          </svg>
                        </svg>
                      </span>
                      {''}
                      {(data.allMarkdownRemark.totalCount - 6).toString()} more
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="gallery">Gallery</Link>
              </li>
              <li>
                <Link to="impressionism-quiz">Quiz</Link>
              </li>
              <li>
                <a href="/">
                  <span>More</span> <span className="caret" />
                </a>
                <ul className="sub-menu">
                  {/* <li><a href="https://impressionistarts.com/impressionism-timeline.html">Impressionism Timeline </a> </li>
                      <li><a href="https://impressionistarts.com/top-10-impressionist-paintings.html">Top 10 Paintings </a></li>
                      <li><a href="https://impressionistarts.com/most-expensive-impressionist-paintings.html">Most Expensive Paintings </a> </li>
                      <li><a href="https://impressionistarts.com/first-impressionist-exhibition.html">First Impressionist Exhibition</a> </li>
                      <li><a href="https://impressionistarts.com/impressionist-painters.html"><svg className="i i-arrow-right" width="16px" height="12px" title="impressionist painters">
                          </svg><span>10 More</span></a></li> */}
                  <li>
                    <Link to="about-us">About us</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
export default NavbarOld
