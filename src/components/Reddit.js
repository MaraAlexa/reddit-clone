import PropTypes from 'prop-types'

import React from 'react'
import './Reddit.sass'

// components
import Navigation from './Navigation'
import RedditList from './RedditList'

class Reddit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: {},
    }
  }

  componentDidMount() {
    // fetch live data from Reddit // works in the browser repl
    const endpoint = 'https://www.reddit.com/r/reactjs.json'
    async function fetchReddit() {
      let response = await fetch(endpoint)
      let data = await response.json()
      return data
    }
  }

  render() {
    return (
      <div className='container'>
        <Navigation />
        <div>
          <h2>Reddit Clone TODOS:</h2>
          <ul>
            <li>Get data from Reddit. Fetch with async await</li>
            <li>Follow data to see why it is not showing on screen</li>
          </ul>
          <RedditList posts={fetchReddit} />
        </div>
      </div>
    )
  }
}
Reddit.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Reddit
