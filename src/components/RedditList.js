import React from 'react'
import PropTypes from 'prop-types'
import RedditPost from './RedditPost'
import './RedditList.sass'

const RedditList = ({ posts }) => (
  <div>Reddit list
    <ul className='post-list'>
      <h2>Reddit Posts:</h2>
      {
        posts.map((post) =>
          <li key={post.id}>
            <RedditPost post={post} />
          </li>
        )
      }
    </ul>
  </div>
)

RedditList.propTypes = {
  posts: PropTypes.array,
}

export default RedditList
