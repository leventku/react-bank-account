import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../Assets/Logo_Nopa.svg';

export default () => {
  return (
    <div className="header-section">
      <Link to="/">
        <img src={logo} alt="NOPA" className="logo" />
      </Link>
      <Link to="/login" className="btn btn-login">
        Log in
      </Link>
    </div>
  )
}