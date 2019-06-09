import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const NotFoundPage = ({ data, location }) => {
  const { siteMetadata: { title } } = data.site;

  return (
    <Layout location={location} title={title}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
};

export default NotFoundPage
