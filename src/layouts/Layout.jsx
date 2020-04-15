import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
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