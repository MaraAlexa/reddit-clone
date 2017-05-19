import PropTypes from 'prop-types'

import React from 'react'
import './Reddit.sass'

// components
import Navigation from './Navigation'
import RedditList from './RedditList'

const Reddit = ({ data }) => (
  <div className='container'>
    <Navigation />
    <div>
      <h2>Reddit Clone TODOS:</h2>
      <ul>
        <li>Get data from Reddit. Fetch with async await</li>
        <li>Follow data to see why it is not showing on screen</li>
      </ul>
      <RedditList posts={data} />
    </div>
  </div>
)

Reddit.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Reddit
