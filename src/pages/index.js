import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ExcerptDate = styled.small`
  font-style: italic;
`

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
`

const BlogIndex = ({ data: { allMarkdownRemark, site } }) => {
  const siteTitle = site.siteMetadata.title
  const posts = allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
      <Seo title='All posts' />
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
            <ExcerptDate>{node.frontmatter.date}</ExcerptDate>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex
