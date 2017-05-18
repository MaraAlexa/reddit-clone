import React from 'react'
import {render} from 'react-dom'
// import components
import 'normalize.css'
import Reddit from './components/Reddit'
// data
import redditData from './data/reddit-data'

render(<Reddit data={redditData} />, document.getElementById('root'))
