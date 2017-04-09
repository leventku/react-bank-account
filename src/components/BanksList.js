import React, { Component } from 'react';
import { connect } from 'react-redux';

import { activateBank } from '../actions';

class BanksList extends Component {
  handleClick(e) {
    this.props.activateBank(parseInt(e.target.dataset.id));
  }

  renderList() {
    return this.props.banks.map(bank => {
      return (
        <li data-id={bank.id} className="bank-item" style={{color: bank.id == this.props.activeBank && 'red'}} key={bank.id}>{bank.name}</li>
      )
    })
  }

  render() {
    return (
      <ul className="banks-list" onClick={this.handleClick.bind(this)}>
        { this.renderList() }
      </ul>
    )
  }
}

const mapStateToProps = (appState) => {
  return {
    banks: appState.banks.all,
    activeBank: appState.banks.active
  }
}

export default connect(mapStateToProps, { activateBank })(BanksList);