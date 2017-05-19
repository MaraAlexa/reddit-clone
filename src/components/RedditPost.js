import React from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { Thumbnail } from 'react-bootstrap'
import './RedditPost.sass'
// components
import Time from './Time'

const Votes = ({ post }) => (
  <div className='votes'>
    <FontAwesome
      className='arrow-up'
      name='arrow-up'
    />
    <b>{post.votes}</b>
    <FontAwesome
      className='arrow-down'
      name='arrow-down'
    />
  </div>
)


const Comment = ({ post }) => (
  <div className='comment'>{post.comments} comments</div>
)


class RedditPost extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <div className='post-wrapper'>
        <Votes post={post} />
        <div className='row'>
          <div className='column thumb'>
            <Thumbnail href='#' alt='85x90' src=' http://placehold.it/85x90' />
          </div>
          <div className='column post-content'>
            <a href=''><h1>{post.title}</h1></a>
            <a href=''><small>{post.sourceUrl}</small></a>
            <div className='inline-wrap'>
              <Time timestamp={post.timestamp} />
              <span className='author'>by <a href=''>{post.author}</a></span>
            </div>

            <div className='media-links inline-wrap'>
              <Comment post={post}/>
              <a href=''>share</a>
              <a href=''>save</a>
              <a href=''>hide</a>
              <a href=''>report</a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
RedditPost.propTypes = {
  post: PropTypes.object.isRequired,
}
export default RedditPost
