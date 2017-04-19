import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      surname: '',
      sortCode: '',
      account: '',
      passcode: '',
    };
  }

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }

  login = (e) => {
    e.preventDefault();
    //call login action
    console.log(this.state);
  }

  render() {
    return (
      <div className="login-form">
        <h3>Log in to your online banking</h3>
        <p className="body-text">Enter the same details you use to login to your online banking</p>
        <form>
          <div className="form-item">
            <input name="surname"
            onChange={this.handleInputChange}
            placeholder="Surname"
            className="form-element"
            value={this.state.surname} type="text" />
          </div>
          <div className="form-item">
            <input name="sortCode"
            onChange={this.handleInputChange}
            placeholder="Sort code"
            className="form-element"
            value={this.state.sortCode} type="text" />
          </div>
          <div className="form-item">
            <input name="account"
            onChange={this.handleInputChange}
            placeholder="Account Number"
            className="form-element"
            value={this.state.account} type="text" />
          </div>
          <div className="form-item">
            <input name="passcode"
            onChange={this.handleInputChange}
            placeholder="Passcode"
            className="form-element"
            value={this.state.passcode} type="text" />
          </div>

          <button className="btn btn-wide" onClick={this.login}>Log in & connect</button>
        </form>
      </div>
    )
  }
};

/*
 * TODO: 
 * connect to redux store and check if bank has selected
 * disable login button if the fields are empty
 * add form validation logic
 * write tests
 * add propType checking
*/