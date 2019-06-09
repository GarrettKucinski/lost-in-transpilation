import React from "react"
import styled from 'styled-components';
import { Link } from "gatsby"

const SiteWrapper = styled.section`
  max-width: 800px;
`;

const Header = ({ title }) => {
  return (
    <h1 style={{ marginTop: 0, }}>
      <Link
        style={{
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        {title}
      </Link>
    </h1>
  );
};

const Layout = ({ title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <SiteWrapper
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <Header title={title} />
      <main>{children}</main>
    </SiteWrapper>
  )
};

export default Layout
