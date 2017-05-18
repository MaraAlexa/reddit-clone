import React from 'react'
import './Reddit.sass'
// components
import Navigation from './Navigation'
import RedditList from './RedditList'

const Reddit = ({data}) => (
  <div className='container'>
    <Navigation />
    <div>
      <h2>Reddit Clone</h2>
      <RedditList postsList={data} />
    </div>
  </div>
)

export default Reddit
