import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from '../components/hoc/Layout/Layout'

import classes from '../styles/blog.module.css'
import Footer from '../components/sections/footer'

import blob from '../../content/bgillus/blob2DGr.svg'

class Blog extends Component {
  render() {
    const data = this.props.data

    return (
      <Layout>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
          <title>PRODESCOM BLOG</title>
        </Helmet>
        <img src={blob} alt="blob" className={classes.blob} />
        <div className={classes.blogCont}>
          <h1 className={classes.blogTxHead}>Posts</h1>
          <div className={classes.blogPostList}>
            {data.allWordpressPost.edges.map(({ node }) => (
              <div className={classes.blogPostTx} key={node.slug}>
                <Link style={{textDecoration:"none"}} to={node.slug}>
                  <h2 className={classes.blogPostTxHead} style={{margin:"0"}}>{node.title}</h2>
                </Link>
                <p className={classes.postDate}>{node.date}</p>
                <div className={classes.blogPostTxCont} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            ))}
          </div>
        </div>
      {/* <Footer /> */}
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          date(formatString: "DD MMMM, YYYY")
          slug
        }
      }
    }
  }
`

// allWordpressPage {
//     edges {
//       node {
//         id
//         title
//         excerpt
//         slug
//       }
//     }
//   }

        {/* <div>
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug}>
                <h2>{node.title}</h2>
              </Link>
              <h3>{node.excerpt}</h3>
            </div>
          ))}
        </div> */}