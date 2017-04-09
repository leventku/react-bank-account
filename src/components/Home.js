import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userStart } from '../actions'
import BankSelector from './BankSelector';
import introShape from '../../Assets/Shapes.png';

export class Home extends Component {
  render() {
    if (!this.props.hasUserStarted) {
      return (
        <div className="home">
          <div className="start-banner">
            <h1>Your finances, in one place</h1>
            <p className="body-text">Track of all your payments by connecting as many bank accounts as you’d like to your Nopa account and get updates your balance instantly.</p>
            <button className="btn btn-wide" onClick={this.props.userStart}>Get Started</button>
          </div>
          <div className="intro-banner">
            <h2>There’s no such things as “one size fits all” finance.</h2>
            <p className="body-text black">
              We were founded to make money simple and fair, for everyone: whether you’re looking for a loan, or to get better rewards for your investments.
              <img src={introShape} alt="introShape" className="intro-shape"/>
            </p>
          </div>
        </div>
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