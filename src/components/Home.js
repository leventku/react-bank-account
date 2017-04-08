import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userStart } from '../actions'
import BankSelector from './BankSelector';

class Home extends Component {
  render() {
    if (!this.props.hasUserStarted) {
      return (
        <button onClick={this.props.userStart}>Get Started</button>
      )
    }
    
    return (
      <BankSelector />
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    hasUserStarted: appState.user.started
  }
}

export default connect(mapStateToProps, {userStart})(Home);