import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import { activateBank, fetchBanks } from '../actions';

class BanksList extends Component {
  componentWillMount() {
    this.props.fetchBanks();
  }
  handleClick = (e) => {
    this.props.activateBank(parseInt(e.target.dataset.id));
  }

  renderList() {
    return this.props.banks.map(bank => {
      const itemClass = cn('bank-item',{
        'bank-item-selected': bank.id == this.props.activeBank
      })
      return (
        <li data-id={bank.id} className={itemClass} key={bank.id}>
          {bank.name}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="banks-list" onClick={this.handleClick}>
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

export default connect(mapStateToProps, { activateBank, fetchBanks })(BanksList);