import React from 'react'
import { Navbar, Footer } from 'layouts'
import SEO from '../components/SEO'
import '../styles/all.css'

const Layout = ({ children }) => (
  <>
    <div className="site">
      <SEO />
      <Navbar />
      {children}
    </div>
    <Footer />
  </>
)

export default Layout
