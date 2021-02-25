import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import blob from '../../content/bgillus/blob2DGr.svg'

import Layout from '../components/hoc/Layout/Layout'

import classes from '../styles/post.module.css'

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1" />
          <title>PRODESCO - {post.title}</title>
        </Helmet>
        <img src={blob} alt="blob" className={classes.blob} />
        <div className={classes.postCont}>
          <h1 className={classes.postTxHead}>{post.title}</h1>
          <p className={classes.postDate}>{post.date}</p>
          <div className={classes.postTx}>
            <div className={classes.postTxCont} dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </Layout>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date(formatString: "DD MMMM, YYYY")
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`