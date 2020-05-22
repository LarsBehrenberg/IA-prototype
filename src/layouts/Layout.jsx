import React from 'react'
import { Footer, Navbar } from 'layouts'
import SEO from '../components/SEO'

import { ThemeProvider } from 'emotion-theming'
import theme from '../../config/theme'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import styles from '../styles/styles'

const ChildWrapper = styled.div`
  padding-top: 2rem;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Global
        styles={css`
          ${styles}
        `}
      />
      <SEO />
      <Navbar />
      <ChildWrapper id="childWrapper">{children}</ChildWrapper>
      <Footer />
    </>
    <script
      async
      src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    ></script>
  </ThemeProvider>
)

export default Layout
