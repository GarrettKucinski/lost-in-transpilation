import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Link } from 'gatsby'

const theme = {
  /* Color Theme Swatches in Hex */
  blue: '#011C40',
  altBlue: '#175073',
  paper: '#fff8ef',
  lightFlamingo: '#fdf0f0',
  flamingo: '#f7dfdf',
  lemon: '#F2EFC4',
  orange: '#F27B13',
  jsYellow: '#FFEB3B',
  red: '#A60303',
  textGray: '#3a3a3a',
  borderGray: '#cccccc'
}

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    font-family: yrsa, sans-serif;
    font-size: 1.5rem;
    line-height: 1.5;
    color: ${p => p.theme.blue};
    background: #efefef;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1,h2,h3 {
    color: ${p => p.theme.blue};
    font-family: bree, sans-serif;
  }

  h2 {
    font-size: 3rem;
  }

  a {
    color: ${p => p.theme.altBlue};
    text-decoration: none;
  }

  blockquote {
    font-size: 2rem;
    margin: 40px 0;
    padding: 0 40px;
    font-style: italic;
    color: ${p => p.theme.altBlue};
    border-top: 1px solid ${p => p.theme.red};
    border-bottom: 1px solid ${p => p.theme.red};
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
  min-height: 100px;
  background: ${p => p.theme.textGray};

  .header {
    &--title {
      font-family: basic-sans, sans-serif;
      font-weight: 300;
      a {
        color: ${p => p.theme.lemon};
      }
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
