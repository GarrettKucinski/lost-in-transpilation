import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const SiteWrapper = styled.section`
  max-width: 1800px;
  margin: 0 auto;
`

const ContentSection = styled.section`
  max-width: 800px;
  margin: 0 auto;
`

const HeaderWrapper = styled.hgroup`
  .header {
    &--title {
      font-size: 32px;
      font-family: sans-serif;
      color: ${p => p.theme.yellow}
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
  <SiteWrapper>
    <ContentSection>
      <Header title={title} />
      <main>{children}</main>
    </ContentSection>
  </SiteWrapper>
)

export default Layout
