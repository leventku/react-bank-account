import React, { Component } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';

import { activateBank, fetchBanks } from '../actions';

export class BanksList extends Component {
  constructor(props) {
    super(props);
    this.state = {activeBankId: null}
  }
  componentWillMount() {
    this.props.fetchBanks();
  }
  handleClick = (e) => {
    const activeBankId = parseInt(e.target.dataset.id);
    this.setState({activeBankId});
    this.props.onBankActivated(activeBankId);
  }

  renderList() {
    return this.props.banks.map(({id, name, logo, orient})=> {
      const itemClass = cn('bank-item',{
        'bank-item-selected': id == this.state.activeBankId
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
    banks: appState.banks.all
  }
}

export default connect(mapStateToProps, { fetchBanks })(BanksList);