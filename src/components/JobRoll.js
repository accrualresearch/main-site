import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import "./JobRoll.css"

class JobRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="jobroll-container">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} className="job-container">
              <article className="job-inner">
                <header>
                  <h2>
                    <Link className="job-link" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </h2>
                </header>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="job-link" to={post.fields.slug}>
                    →
                  </Link>
                </p>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

JobRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query JobRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "job-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <JobRoll data={data} count={count} />}
  />
)
