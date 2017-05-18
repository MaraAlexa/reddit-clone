import React from 'react'
import RedditPost from './RedditPost'
import './RedditList.sass'

const RedditList = ({postsList}) => (
  <div>Reddit list
    <ul className='post-list'>
      <h2>Reddit Posts:</h2>
      {
        postsList.map((post) => {
          <RedditPost key={post.id} post={post} />
        })
      }
    </ul>
  </div>
)

export default RedditList
