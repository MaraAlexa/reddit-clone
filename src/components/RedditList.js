import React from 'react'
import RedditPost from './RedditPost'
import './RedditList.sass'

const RedditList = ({postsList}) => (
  <div>Reddit list
    <ul className='post-list'>
      <h2>Reddit Posts:</h2>
      {
        postsList.map((post) => {
          <li><RedditPost key={post.id} post={post} /></li>
        })
      }
    </ul>
  </div>
)

export default RedditList
