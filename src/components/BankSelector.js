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
      <div>
        <BanksList />
        <button className="btn" disabled={this.props.activeBank == null} onClick={this.connectBank.bind(this)}>Connect</button>
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