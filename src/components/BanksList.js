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
    return this.props.banks.map(({id, name, logo, orient})=> {
      const itemClass = cn('bank-item',{
        'bank-item-selected': id == this.props.activeBank
      });
      const imgClass = `${orient}-img`
      return (
        <li data-id={id} className={itemClass} key={id}>
          <img src={logo} alt={name} className={imgClass} data-id={id}/>
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