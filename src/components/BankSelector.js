import React, { Component } from 'react';
import { connect } from 'react-redux';

import BanksList from './BanksList';

import { confirmBank } from '../actions';

class BankSelector extends Component {
  connectBank() {   
    this.props.confirmBank()
  }

  render() {
    return (
      <div className="banks-selector">
        <BanksList />
        <button className="btn btn-wide" disabled={this.props.activeBank == null} onClick={this.connectBank.bind(this)}>Continue</button>
      </div>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    activeBank: appState.banks.active
  }
}

export default connect(mapStateToProps, { confirmBank })(BankSelector);