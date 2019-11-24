import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

const BlogHeadline = styled.h1`
  font-size: 4rem;
  line-height: 1;
`

const BlogContentWrapper = styled.article`
  .gatsby-highlight pre[class*="language-"] {
    &.line-numbers .line-numbers-rows {
      padding-top: 1em;
      padding-left: 15px;
      border-right: none;
    }
  }
`

const BlogPostTemplate = ({ pageContext, data, location }) => {
  const { markdownRemark, site } = data
  const { excerpt, html, frontmatter } = markdownRemark

  const { title: postTitle, description, date } = frontmatter
  const { siteMetadata: { title: siteTitle } } = site
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={postTitle}
        description={description || excerpt}
      />
      <BlogHeadline>{postTitle}</BlogHeadline>
      <p>{date}</p>
      <BlogContentWrapper dangerouslySetInnerHTML={{ __html: html }} />
      <Bio />
      <ul>
        {previous && (
          <li>
            <Link to={previous.fields.slug} rel='prev'>
              ← {previous.frontmatter.title}
            </Link>
          </li>
        )}
        {next && (
          <li>
            <Link to={next.fields.slug} rel='next'>
              {next.frontmatter.title} →
            </Link>
          </li>
        )}
      </ul>
    </Layout>
  )
}

export default BlogPostTemplate
