import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Newsletter from './Newsletter'
import SEO from '../components/SEO'
import '../styles/all.css'

const Layout = ({ children }) => (
    <>
    <div className="site">
        <SEO />
        <Navbar />
        {children}
    </div>
    <Newsletter />
    <Footer />
    </>
)

export default Layout