import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'

const theme = {
  /* Color Theme Swatches in Hex */
  blue: '#011C40',
  altBlue: '#175073',
  paper: '#fff8ef',
  cream: '#F2EFC4',
  yellow: '#F27B13',
  red: '#A60303',
  textGray: '#3a3a3a'
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: yrsa, sans-serif;
    font-size: 1.5rem;
    line-height: 1.5;
    color: ${p => p.theme.textGray};
    background: ${p => p.theme.paper};
  }

  h1,h2,h3 {
    font-family: bree, sans-serif;
  }

  h2 {
    font-size: 3rem;
  }

  a {
    color: ${p => p.theme.yellow};
    text-decoration: none;
  }

  blockquote {
    font-size: 2rem;
    margin: 40px 0;
    padding: 0 40px;
    font-style: italic;
    color: #3c3c3c;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    font-family: basic-sans, sans-serif;
  }
`

const SiteWrapper = styled.section`
  max-width: 1800px;
  margin: 0 auto;
`

const ContentSection = styled.main`
  max-width: 800px;
  margin: 0 auto;
`

const HeaderWrapper = styled.hgroup`
  .header {
    &--title {
      font-family: sans-serif;
      text-align: center;
    }
  }
`

const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <h1 className='header--title'>
        <Link className='header--home-link' to='/'>
          {title}
        </Link>
      </h1>
    </HeaderWrapper>
  )
}

const Layout = ({ title, children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <SiteWrapper>
      <Header title={title} />
      <ContentSection>
        {children}
      </ContentSection>
    </SiteWrapper>
  </ThemeProvider>
)

export default Layout
