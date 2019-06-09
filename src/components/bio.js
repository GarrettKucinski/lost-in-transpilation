import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

const bioContent = data => {
  const { author, social } = data.site.siteMetadata
  return (
    <div>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
      />
      <p>
        Written by <strong>{author}</strong>. Dad, author, developer, awesome guy.
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a>
      </p>
    </div>
  )
};

const Bio = () => {
  return <StaticQuery query={bioQuery} render={bioContent} />;
};

export default Bio;
