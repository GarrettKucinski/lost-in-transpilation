const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors
  }

  const { allMarkdownRemark } = result.data;

  // Create blog posts pages.
  const posts = allMarkdownRemark.edges

  posts.forEach(({ node: { fields: { slug } } }, index) => {
    const previousPostIndex = index + 1
    const nextPostIndex = index - 1

    const isEndOfPosts = index === posts.length - 1
    const isFirstPost = index === 0

    const previous = isEndOfPosts ? null : posts[previousPostIndex].node
    const next = isFirstPost ? null : posts[nextPostIndex].node

    createPage({
      path: slug,
      component: blogPost,
      context: {
        slug,
        previous,
        next,
      },
    })
  })

  return null
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
};
