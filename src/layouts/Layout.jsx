import React from 'react'
import { NavBar, Footer } from 'layouts'
import SEO from '../components/SEO'
import '../styles/all.css'

import { ThemeProvider } from 'emotion-theming'
import theme from '../../config/theme'
import { css, Global } from '@emotion/core'
import styled from '@emotion/styled'
import headroom from '../styles/headroom'

const ChildWrapper = styled.div`
  padding-top: 2rem;
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <Global
        styles={css`
          ${headroom}
        `}
      />

      <SEO />
      <NavBar />
      <ChildWrapper>{children}</ChildWrapper>
      <Footer />
    </>
  </ThemeProvider>
)

export default Layout
