import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userStart } from '../actions'
import BankSelector from './BankSelector';

export class Home extends Component {
  render() {
    if (!this.props.hasUserStarted) {
      return (
        <button className="btn btn-start" onClick={this.props.userStart}>Get Started</button>
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