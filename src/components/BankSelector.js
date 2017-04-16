import React, { Component } from 'react';
import { connect } from 'react-redux';

import BanksList from './BanksList';

import { confirmBank } from '../actions';

class BankSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { activeBankId: null }
  }
  connectBank = () => {
    this.props.confirmBank(this.state.activeBankId);
  }

  render() {
    return (
      <div className="banks-selector">
        <div className="banks-banner">
          <h3>Which bank does this account belong to?</h3>
          <p className="body-text show-mobile">Choose your bank</p>
          <p className="body-text show-desktop">Track of all your payments by connecting as many bank accounts as you’d like to your Nopa account and get updates your balance instantly. Plus it’s free.</p>
        </div>
        <BanksList onBankActivated={activeBankId => {this.setState({activeBankId})}}/>
        <button 
          className="btn btn-wide"
          disabled={this.state.activeBankId == null}
          onClick={this.connectBank}>Continue</button>
      </div>
    )
  }
}

export default connect(null, { confirmBank })(BankSelector);
