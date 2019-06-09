import React from "react"
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
    font-size: 20px;
    color: ${p => p.theme.textGray}
    background: ${p => p.theme.paper}
  }

  a {
    text-decoration: none;
  }
`;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;

const BlogIndex = ({ data: { allMarkdownRemark, site } }) => {
  const siteTitle = site.siteMetadata.title
  const posts = allMarkdownRemark.edges

  return (
    <ThemeProvider theme={theme}>
      <Layout title={siteTitle}>
        <GlobalStyle />
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </Layout>
    </ThemeProvider>
  )
};

export default BlogIndex
