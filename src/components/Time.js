import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

class Time extends React.Component {
  computeTimeString() {
    return moment(this.props.timestamp).fromNow();
  }
  render() {
    return (
      <span className='time'>
        {this.computeTimeString()}
      </span>
    )
  }
}

Time.propTypes = {
  timestamp: PropTypes.string.isRequired,
}

export default Time
