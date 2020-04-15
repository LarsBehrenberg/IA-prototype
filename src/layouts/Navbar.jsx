import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
    <header className="site-header">
    <div className="container">
      <div className="site-brand">
        <div className="brand"><a className="brand-uri" href="/"><img
              src="./logo/logo.png" alt="" className="loading"
              data-was-processed="true" /></a></div><button id="primary-toggle" className="menu-toggle"
          aria-controls="primary-menu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
      <nav id="site-navigation" className="nav">
        <div className="nav-ctn">
          <ul id="primary-menu" className="nav-menu" aria-expanded="false">
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/"><span>The Painters</span> <span className="caret"></span></Link>
                <ul className="sub-menu">
                {/* <li className=""><a href="https://impressionistarts.com/paul-cezanne-biography.html">Paul Cezanne</a></li>
                <li><a href="https://impressionistarts.com/edgar-degas-biography.html">Edgar Degas</a></li>
                <li><a href="https://impressionistarts.com/edouard-manet-biography.html">Edouard Manet</a></li>
                <li><a href="https://impressionistarts.com/claude-monet-biography.html">Claude Monet</a></li>
                <li><a href="https://impressionistarts.com/camille-pissarro-biography.html">Camille Pissarro</a></li>
                <li><a href="https://impressionistarts.com/pierre-auguste-renoir-biography.html">Pierre-Auguste Renoir</a>
                </li>
                <li><a href="https://impressionistarts.com/impressionist-painters.html"><svg className="i i-arrow-right"
                      width="16px" height="12px" title="impressionist painters"></svg><span>10 More</span></a></li> */}
                <li>Coming soon</li>
                </ul>
            </li>
            <li><a href="/">Quiz</a></li>
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

export default Navbar