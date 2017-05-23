import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.computeTimeString = this.computeTimeString.bind(this);
  }

  computeTimeString() {
    let theMoment;
    if(this.props.isUnixTime) {
      theMoment = moment.unix(this.props.timestamp);
    } else {
      theMoment = moment(this.props.timestamp);
    }

    return theMoment.fromNow();
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
  timestamp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  isUnixTime: PropTypes.bool
}

export default Time
