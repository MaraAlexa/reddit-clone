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
    const endpoint = 'http://www.reddit.com/r/reactjs.json'
    fetch(endpoint)
      .then(response =>
        response.json().then(json => ({json, response}))
      ).then(({json, response}) => {
        let posts = json.data.children;
        this.processPosts(posts);
      })
      .catch(err => console.log(err));
  } // end componentDidMount

  processPosts = (posts) => {
    // Make the data nicer to work with
    let postsHash = posts.reduce((hash, post) => {
      hash[post.data.id] = post.data;
      return hash;
    }, {});

    this.setState({
      posts: postsHash
    });
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
          <RedditList posts={Object.keys(this.state.posts).map(id => this.state.posts[id])}/>
        </div>
      </div>
    )
  }
}
Reddit.propTypes = {
  //data: PropTypes.array.isRequired,
}

export default Reddit
