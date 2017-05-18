import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Thumbnail } from 'react-bootstrap'
import './RedditPost.sass'

const Votes = () => (
  <div className='votes'>
    <FontAwesome
      className='arrow-up'
      name='arrow-up'
    />
    <b>20</b>
    <FontAwesome
      className='arrow-down'
      name='arrow-down'
    />
  </div>
)

const Time = () => (
  <div>Submitted: [20/10/2016 21:55:01]</div>
)
const Comment = () => (
  <div className='comment'> [10 comments]</div>
)

const Post = () => (
  <div className='row'>
    <div className='column thumb'>
      <Thumbnail href='#' alt='85x90' src=' http://placehold.it/85x90' />
    </div>
    <div className='column post-content'>
      <a href='#'><h1>Title</h1></a>
      <a href='#'><small>Post URL</small></a>
      <div className='inline-wrap'>
        <Time />
        <span>by <a href=''>[author name]</a></span>
      </div>

      <div className='media-links inline-wrap'>
        <Comment />
        <a href=''>share</a>
        <a href=''>save</a>
        <a href=''>hide</a>
        <a href=''>report</a>
      </div>

    </div>
  </div>
)

class RedditPost extends React.Component {
  render () {
    return (
      <div className='post-wrapper'>
        <Votes />
        <Post />
      </div>
    )
  }
}

export default RedditPost
