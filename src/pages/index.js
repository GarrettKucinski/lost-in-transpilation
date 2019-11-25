import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ExcerptCard = styled.article`
  background: #fff;
  box-shadow: 0px 0px 10px rgba(3, 3, 3, 0.2);
  padding: 60px 20px 20px;
  margin-bottom: 20px;
  border-radius: 3px;
  position: relative;

  p {
    margin: 0;
  }
`

const ExcerptTitle = styled.h3`
  margin: 20px 0 10px;
`

const ExcerptDate = styled.small`
  font-style: italic;
  position: absolute;
  left: -20px;
  top: 20px;
  box-shadow: 0px 0px 3px 0px rgba(3, 3, 3, 0.8);
  padding: 5px 10px;
  background: ${p => p.theme.red};
  color: ${p => p.theme.lemon};
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
      {/* <Bio /> */}
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <ExcerptCard className="excerpt__card" key={node.fields.slug}>
            <ExcerptTitle>
              <Link to={node.fields.slug}>
                {title}
              </Link>
            </ExcerptTitle>
            <ExcerptDate>{node.frontmatter.date}</ExcerptDate>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt
              }}
            />
          </ExcerptCard>
        )
      })}
    </Layout>
  )
}

export default BlogIndex
