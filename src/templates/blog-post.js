import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ pageContext, data, location }) => {
  const { markdownRemark, site } = data;
  const { excerpt, html, frontmatter } = markdownRemark

  const { title: postTitle, description, date } = frontmatter;
  const { siteMetadata: { title: siteTitle } } = site;
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={postTitle}
        description={description || excerpt}
      />
      <h1>{postTitle}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <hr />
      <Bio />

      <ul>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
};

export default BlogPostTemplate

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
