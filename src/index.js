import React from 'react'
import {render} from 'react-dom'
// import components
import 'normalize.css'
import Reddit from './components/Reddit'
// data
import redditData from './data/reddit-data'

async function foo() {
  console.log('async working!')
}

async function bar() {
  await foo()
  console.log('after foo')
}

bar()

render(<Reddit data={redditData} />, document.getElementById('root'))
